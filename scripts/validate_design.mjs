// Validate design inventory without external dependencies.
// Usage: node scripts/validate_design.mjs
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const manifest=JSON.parse(read('assets/asset_manifest.json'));
const builds=JSON.parse(read('assets/asset_build_specs_v1.json'));
const cardDeck=read('docs/RENDER_PROMPTS_CORE_V1.md');
const assert=(ok,message)=>{if(!ok)throw new Error(message)};
assert(manifest.assets.length===100,'Expected exactly 100 manifest entries');
assert(builds.assets.length===100,'Expected exactly 100 build specs');
const mids=manifest.assets.map(a=>a.id);
const bids=builds.assets.map(a=>a.id);
assert(new Set(mids).size===100,'Duplicate manifest ID');
assert(new Set(bids).size===100,'Duplicate build spec ID');
assert(mids.every((id,i)=>id===bids[i]),'Build specs out of alignment');
const scopeCounts={};
const methodCounts={};
const groupCounts={};
for(let i=0;i<100;i++){
 const a=manifest.assets[i], b=builds.assets[i];
 assert(a.id===b.id && a.production_scope===b.scope,'Mismatched build spec '+a.id);
 assert(typeof b.source_brief_en==='string' && b.source_brief_en.trim().length>24,'Blank build brief '+a.id);
 assert(a.render_authorized===false,'Unexpected auto-render permission '+a.id);
 assert(a.phase==='PLANNED' && a.review==='NOT_REVIEWED','Unexpected staged approval: '+a.id);
 assert(!a.source_sheet && !a.crop_image && !a.model_3d,'Unverified file path '+a.id);
 for(const [target,key] of [[scopeCounts,a.production_scope],[methodCounts,a.production_method],[groupCounts,a.group]]) target[key]=(target[key]||0)+1;
}
const expectedScopes={CORE_AI:18,SECONDARY_AI:16,HOLD_AI:19,CORE_CODE:16,SECONDARY_CODE:23,VFX_RUNTIME:8};
const expectedMethods={GEN:53,CODE:39,VFX:8};
const expectedGroups={CHR:6,WPN:12,MAP:24,OBJ:18,INT:12,ENV:12,PKU:8,VFX:8};
const stable=x=>JSON.stringify(Object.entries(x).sort());
assert(stable(scopeCounts)===stable(expectedScopes),'Scope counts changed');
assert(stable(methodCounts)===stable(expectedMethods),'Method counts changed');
assert(stable(groupCounts)===stable(expectedGroups),'Group counts changed');
const deckIds=[...cardDeck.matchAll(/^## ([A-Z]{3}-\d{2}) —/gm)].map(m=>m[1]);
assert(deckIds.length===18,'Expected 18 core prompt cards');
assert(new Set(deckIds).size===18,'Duplicate prompt cards');
const coreIds=manifest.assets.filter(a=>a.production_scope==='CORE_AI').map(a=>a.id);
assert(stable(Object.fromEntries(deckIds.map(a=>[a,1])))===stable(Object.fromEntries(coreIds.map(a=>[a,1]))),'Prompt deck mismatches core set');
console.log('PASS: 100 unique IDs, 100 build specs, 18 core image prompts, correct counts, zero fabricated approvals/paths.');
