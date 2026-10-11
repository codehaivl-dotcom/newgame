// Run: node scripts/validate_production.mjs
// Structural production contract validator. Does NOT run game engines or approve imagery.
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root=resolve(fileURLToPath(new URL("../",import.meta.url)));
const read=(p)=>readFileSync(resolve(root,p),"utf8");
const check=(expr,msg)=>{if(!expr)throw new Error("FAIL "+msg)};
const m=JSON.parse(read("assets/render_manifest_v1.json"));
const product=JSON.parse(read("data/product_manifest.json"));
const deck=read("assets/RENDER_PROMPT_DECK_V1.md");
const expected= ["LINK","BUBBLE","JEWEL"];
const modes=product.modes.map(x=>x.id).sort();
check(JSON.stringify(modes)===JSON.stringify(expected.sort()),"exactly three approved active modes");
check(product.rejected_modes.some(x=>x.id==="SORT"&&x.no_implementation),"Water Sort explicitly rejected");
check(m.render_authorized===false,"manifest must not grant universal spend/render authorization");
check(m.assets.length===64,"64 asset catalogue entries");
check(new Set(m.assets.map(x=>x.id)).size===64,"no duplicate asset IDs");
const counts={total:0,CORE:0,OPTIONAL:0,SHARED:0,LINK:0,BUBBLE:0,JEWEL:0,W0_CALIBRATION:0,W1_LINK:0,W2_GAME_OBJECTS:0,W3_SHARED:0,W4_OPTIONAL:0};
const allowedPhases=["PLANNED","GENERATED","REVIEW_PENDING","USER_APPROVED","PROCESSED","IN_GAME","REJECTED","HOLD"];
const seen=new Set();
for(const a of m.assets){
 check(/^(SYS-(BG|CARD|POST|ALBUM)|LNK-ICON|BUB-(BALL|LAUNCH|BONUS)|JWL-(GEM|SPECIAL))-\d{3}$/.test(a.id),"ID format "+a.id);
 counts.total++;counts[a.production_scope]++;counts[a.group]++;counts[a.render_wave]++;
 check(a.prompt_en.length>200&&a.negative_prompt_en.length>100,"full standalone prompt "+a.id);
 check(a.prompt_en.includes(a.name_en)===false||a.prompt_en.length>200,"nontrivial prompt "+a.id);
 check(deck.includes("## "+a.id+" —"),"deck missing ID "+a.id);
 check(deck.includes(a.prompt_en),"deck missing exact prompt "+a.id);
 check(deck.includes(a.negative_prompt_en),"deck missing negative prompt "+a.id);
 check(allowedPhases.includes(a.phase),"unknown phase "+a.id);
 check(["OBJECT","BACKGROUND","CARD","ALBUM","POSTCARD"].includes(a.source_type),"bad type "+a.id);
 check(["1:1","9:16","4:3"].includes(a.source_aspect_ratio),"bad ratio "+a.id);
 check(!a.prompt_en.includes("Water Sort")&&!a.prompt_en.includes("Color Atelier"),"rejected game art "+a.id);
 if(a.phase!=="PLANNED"&&a.phase!=="HOLD"&&a.phase!=="REJECTED"){
   check(typeof a.source_path==="string"&&existsSync(resolve(root,a.source_path)),"real source file required for "+a.id);
   check(a.render_job_id!==null,"record job ID once GENERATED "+a.id);
 }
 if(a.phase==="USER_APPROVED"||a.phase==="PROCESSED"||a.phase==="IN_GAME")
   check(a.user_approved===true,"cannot promote without user review "+a.id);
 if(a.phase==="IN_GAME")
   check(typeof a.runtime_path==="string"&&existsSync(resolve(root,a.runtime_path)),"runtime file absent "+a.id);
 if(a.phase==="PLANNED"){
  check(a.source_path===null&&a.runtime_path===null&&a.render_job_id===null&&a.cost_credits_actual===null,"fake progress in "+a.id);
  check(a.user_approved===false,"planned but approved "+a.id);
 }
 seen.add(a.id);
}
const expectedCounts={total:64,CORE:44,OPTIONAL:20,SHARED:14,LINK:36,BUBBLE:7,JEWEL:7,W0_CALIBRATION:4,W1_LINK:22,W2_GAME_OBJECTS:11,W3_SHARED:7,W4_OPTIONAL:20};
for(const [k,n] of Object.entries(expectedCounts))check(counts[k]===n,k+" expected "+n+" got "+counts[k]);
const required=["README.md","AGENTS.md","docs/12_PRODUCTION_LOCK_V1.md","docs/13_ASSET_PIPELINE_AND_QA.md","docs/14_PLAYABLE_SPEC_AND_TEST_GATES.md","docs/15_PRODUCTION_RUNBOOK.md","docs/02_LINK_GARDEN.md","docs/03_BUBBLE_ORCHARD.md","docs/04_JEWEL_GARDEN.md"];
required.forEach(p=>check(existsSync(resolve(root,p)),"required "+p));
check(!existsSync(resolve(root,"docs/04_COLOR_ATELIER.md")),"rejected 4th game doc exists");
console.log("PASS: exactly three approved game modes; 64 unique render IDs; 44 CORE / 20 OPTIONAL; 64 exact prompt cards; rejected game excluded; no fabricated art states.");
console.log("NOTE: Structural data QA only. Does not test playable engines, rendered images or server leaderboard.");
