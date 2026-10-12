// NEWGAME — repeatable skill-score sampling, NOT human retention or an online Top.
// Usage: node scripts/simulate-link-rank.mjs
import {linkStart,linkRoute,linkMatch,linkRearrange} from "../prototype/engines.mjs";
const strategies=["first","least","most"];
function available(board){
 const list=[];
 for(let a=0;a<48;a++)if(board[a]>=0)for(let b=a+1;b<48;b++)if(board[b]===board[a]){
   const p=linkRoute(board,a,b);if(p)list.push({a,b,bends:p.bends});
 }
 return list;
}
function simulate(seed,style){
 let state=linkStart(seed,5),assist=0,actions=0,matched=0;
 while(!state.done&&actions<72){
  actions++;const list=available(state.board);
  if(!list.length){const swap=linkRearrange(state);if(swap.error)break;state=swap.state;assist++;continue;}
  const picked=style==="first"?list[0]:list.reduce((x,y)=>
   style==="least"?(y.bends<x.bends?y:x):(y.bends>x.bends?y:x),list[0]);
  const out=linkMatch(state,picked.a,picked.b);
  if(out.error)throw Error("Invalid generated route");state=out.state;matched++;
 }
 return {score:Math.max(0,state.score-150*assist),cleared:state.done,pairs:matched,assists:assist};
}
const out=[];for(let seed=1;seed<=30;seed++){
 const r={seed};for(const style of strategies)r[style]=simulate(seed,style);out.push(r);
}
const allCleared=out.filter(r=>strategies.every(k=>r[k].cleared)).length;
const allTied=out.filter(r=>new Set(strategies.map(k=>r[k].score)).size===1).length;
const meanSpan=Math.round(out.reduce((a,r)=>a+Math.max(...strategies.map(k=>r[k].score))-Math.min(...strategies.map(k=>r[k].score)),0)/out.length);
const distinct=(out.reduce((a,r)=>a+new Set(strategies.map(k=>r[k].score)).size,0)/out.length).toFixed(2);
console.log(JSON.stringify({seeds:out.length,allCleared,allTied,meanSpan,meanDistinctPerSeed:Number(distinct),examples:out.slice(0,5)},null,2));
if(allCleared!==30)process.exitCode=1;
// QUALIFIER: this is only three deterministic bot policies on 30 generated boards.
// It cannot prove rank fair, human skill score spread or production difficulty.
