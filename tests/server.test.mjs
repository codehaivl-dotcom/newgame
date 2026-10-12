import test from "node:test";
import assert from "node:assert/strict";
import {spawn} from "node:child_process";
import {once} from "node:events";

test("static server redirects root and serves module + service worker from correct path",async()=>{
 const port=59673;
 const proc=spawn(process.execPath,["scripts/serve.mjs"],{env:{...process.env,PORT:String(port)},stdio:["ignore","pipe","pipe"]});
 let err="";
 proc.stderr.on("data",c=>{err+=c.toString()});
 try{
  await Promise.race([
   once(proc.stdout,"data"),
   new Promise((_,reject)=>setTimeout(()=>reject(new Error("server start timeout: "+err)),5000))
  ]);
  const root=await fetch("http://127.0.0.1:"+port+"/",{redirect:"manual"});
  assert.equal(root.status,302);assert.equal(root.headers.get("location"),"/prototype/index.html");
  for(const file of ["index.html","engines.mjs","sw.js"]){
   const response=await fetch("http://127.0.0.1:"+port+"/prototype/"+file);
   assert.equal(response.status,200,file);
   const text=await response.text();
   assert.ok(text.length>500,file);
  }
  const missing=await fetch("http://127.0.0.1:"+port+"/prototype/no-such-file.js");
  assert.equal(missing.status,404);
  const blocked=await fetch("http://127.0.0.1:"+port+"/.git/config");
  assert.equal(blocked.status,404,"local preview must never leak .git");
 }finally{proc.kill("SIGTERM");}
});
