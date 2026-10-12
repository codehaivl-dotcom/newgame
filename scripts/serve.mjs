import http from "node:http";
import {readFile,stat} from "node:fs/promises";
import {resolve,relative,extname,sep} from "node:path";
const root=resolve(import.meta.dirname,"..");
const mime={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".mjs":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".png":"image/png",".json":"application/json",".webp":"image/webp",".svg":"image/svg+xml"};
const port=Number(process.env.PORT||5173);
http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,"http://127.0.0.1");
  if(url.pathname==="/"){res.writeHead(302,{"Location":"/prototype/index.html","Cache-Control":"no-store"});res.end();return}
  const input=decodeURIComponent(url.pathname);
  const filename=resolve(root,"."+input);
  const rel=relative(root,filename);
  if(rel.startsWith(".."+sep)||rel==="..")throw Error("forbidden");
  const s=await stat(filename);if(!s.isFile())throw Error("not a file");
  const data=await readFile(filename);
  res.writeHead(200,{"Content-Type":mime[extname(filename)]||"application/octet-stream","Cache-Control":"no-cache"});
  res.end(data);
 }catch{res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});res.end("Không tìm thấy tệp.");}
}).listen(port,"127.0.0.1",()=>console.log("Quiet Puzzle Club: http://127.0.0.1:"+port));
