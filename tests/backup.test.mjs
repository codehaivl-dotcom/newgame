import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {Script} from "node:vm";
const html=readFileSync(new URL("../prototype/index.html",import.meta.url),"utf8");
const code=html.split('<script type="module">')[1]?.split("</script>")[0];
test("alpha browser bootstrap remains valid JavaScript",()=>{
 assert.ok(code,"missing inline app module");
 const withoutImport=code.replace(/^\s*import[^\n]*\n/m,"");
 assert.doesNotThrow(()=>new Script(withoutImport));
});
test("backup controls exist and are connected to save/export/import",()=>{
 for(const id of ["backup-export","backup-import","backup-file"]){
   assert.match(html,new RegExp('id="'+id+'"'));
 }
 for(const functionName of ["openIDB","readIDB","writeIDB","persist","restoreBackup","exportBackup","importBackup"]){
   assert.ok(code.includes("function "+functionName+"(")||code.includes("async function "+functionName+"("),functionName);
 }
 assert.match(code,/restoreBackup\(\)/);
});
test("import gate rejects structurally invalid or oversized data",()=>{
 const match=code.match(/function validBackup\(v\)\{[\s\S]*?return typeof v\.best==="object"&&v\.best!==null;\}/);
 assert.ok(match,"backup validator missing");
 const validBackup=new Function(match[0]+";return validBackup;")();
 const empty={version:1,current:null,games:{},best:{}};
 assert.equal(validBackup(empty),true);
 assert.equal(validBackup({...empty,version:2}),false);
 assert.equal(validBackup({...empty,games:{link:{board:[1],score:0}}}),false);
 assert.equal(validBackup({...empty,games:{bubble:{board:Array(77).fill(-1),score:-1}}}),false);
});
