// Production manifest validator: safe after image generation begins.
// Run: node scripts/validate_design.mjs
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const manifest=JSON.parse(read('assets/asset_manifest.json'));
const builds=JSON.parse(read('assets/asset_build_specs_v1.json'));
const promptDeck=read('docs/RENDER_PROMPTS_CORE_V1.md');
const check=(condition,message)=>{if(!condition)throw new Error(message)};
const equal=o=>JSON.stringify(Object.entries(o).sort());
const counts=(arr,key)=>arr.reduce((m,x)=>(m[x[key]]=(m[x[key]]||0)+1,m),{});
const validPhases=new Set(['PLANNED','PROMPT_READY','RENDERED','REVIEW','APPROVED','REJECTED','CROPPED','ARCHIVED']);
check(manifest.assets.length===100 && builds.assets.length===100,'Expected 100 assets and 100 specs');
check(new Set(manifest.assets.map(a=>a.id)).size===100,'Duplicate manifest ID');
check(new Set(builds.assets.map(a=>a.id)).size===100,'Duplicate build spec ID');
check(equal(counts(manifest.assets,'production_scope'))===equal({CORE_AI:18,SECONDARY_AI:16,HOLD_AI:19,CORE_CODE:16,SECONDARY_CODE:23,VFX_RUNTIME:8}),'Invalid scope counts');
check(equal(counts(manifest.assets,'production_method'))===equal({GEN:53,CODE:39,VFX:8}),'Invalid method counts');
check(equal(counts(manifest.assets,'group'))===equal({CHR:6,WPN:12,MAP:24,OBJ:18,INT:12,ENV:12,PKU:8,VFX:8}),'Invalid group counts');
let accepted=0;
for(let i=0;i<100;i++){
 const a=manifest.assets[i],b=builds.assets[i];
 check(a.id===b.id && a.production_scope===b.scope,'Build spec mismatch '+a.id);
 check(typeof b.source_brief_en==='string' && b.source_brief_en.trim().length>24,'Blank source brief '+a.id);
 check(validPhases.has(a.phase),'Unknown status '+a.id);
 check(typeof a.render_authorized==='boolean','Missing authorization boolean '+a.id);
 for(const k of ['source_sheet','source_image','crop_image','model_3d']) {
   const p=a[k];
   check(p===null||p===undefined||(typeof p==='string'&&p.trim().length>0),'Invalid file path '+a.id+' '+k);
   if(p && p.startsWith('assets/')) check(fs.existsSync(path.join(root,p)),'Git path absent in checked-out repository: '+a.id+' '+p);
 }
 if(a.phase==='PLANNED')check(!a.source_sheet&&!a.source_image&&!a.crop_image&&!a.model_3d,'PLANNED item has unexpected files '+a.id);
 if(a.phase==='APPROVED'||a.phase==='CROPPED'){
   check((a.source_image||a.source_sheet||a.model_3d)&&a.review==='PASS','Approved item missing actual artifact path or user PASS '+a.id);
   accepted++;
 }
 if(a.model_3d && a.production_method==='VFX')throw new Error('VFX cannot be GLB asset '+a.id);
}
const deckIds=[...promptDeck.matchAll(/^## ([A-Z]{3}-\d{2}) —/gm)].map(m=>m[1]);
const coreIds=manifest.assets.filter(a=>a.production_scope==='CORE_AI').map(a=>a.id);
check(deckIds.length===18&&new Set(deckIds).size===18,'Prompt card count or duplicate');
check(coreIds.every(id=>deckIds.includes(id)),'Core prompt missing');
console.log('PASS 100 IDs / 100 specs / 18 core prompts / scopes stable / verified file refs / approved entries '+accepted);
