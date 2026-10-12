import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {linkStart,linkVariedBoard,linkRoute,linkAvailable,linkMatch,linkRearrange,linkNext,bubbleStart,bubbleShoot,bubbleNeighbors,jewelStart,jewelLegal,jewelMatches,jewelSwap,next32} from "../prototype/engines.mjs";

test("LINK: 250 seeded boards complete without time-based input",()=>{
 for(let seed=1;seed<=250;seed++){
  let s=linkStart(seed),n=0;
  while(!s.done&&n<24){const p=linkAvailable(s.board);assert.ok(p,`seed ${seed} stuck`);const x=linkMatch(s,p.a,p.b);assert.ok(!x.error);s=x.state;n++;}
  assert.equal(n,24,`seed ${seed}`);assert.equal(s.board.every(v=>v===-1),true);assert.ok(s.score>=2400);
  const next=linkNext(s);assert.equal(next.state.round,2);assert.equal(next.state.score,s.score);
 }
});
test("LINK: 250 shuffled boards remain solvable and preserve counts",()=>{
 for(let seed=1;seed<=250;seed++){
  const before=linkStart(seed);
  const changed=linkRearrange(before);
  assert.ok(!changed.error);
  const a=before.board.slice().sort((x,y)=>x-y),b=changed.state.board.slice().sort((x,y)=>x-y);
  assert.deepEqual(a,b);
  let s=changed.state,n=0;
  while(!s.done&&n<24){const p=linkAvailable(s.board);assert.ok(p,`shuffle seed ${seed}`);s=linkMatch(s,p.a,p.b).state;n++;}
  assert.equal(n,24);
 }
});
test("LINK: no matching a tile with itself and invalid match does not modify state",()=>{
 const s=linkStart(77);assert.equal(linkRoute(s.board,0,0),null);
 const x=linkMatch(s,0,2);assert.ok(x.error);assert.deepEqual(x.state,s);
});
test("LINK: 400 varied levels have a complete witness and nonadjacent matching",()=>{
 let remote=0;
 for(let seed=1;seed<=400;seed++){
  const puzzle=linkVariedBoard(seed);
  const b=puzzle.board.slice();assert.equal(puzzle.witness.length,24);
  assert.equal(new Set(puzzle.witness.flat()).size,48);
  for(const [a,z] of puzzle.witness){
   assert.ok(linkRoute(b,a,z),`invalid witness for seed ${seed}`);
   if(Math.abs(Math.floor(a/6)-Math.floor(z/6))+Math.abs(a%6-z%6)>1)remote++;
   b[a]=b[z]=-1;
  }
  assert.equal(b.every(v=>v===-1),true);
 }
 assert.ok(remote>1000,`too many trivial pairs: ${remote}`);
});
test("LINK: after three introductory boards, endless mode creates varied level 4",()=>{
 let s=linkStart(9);
 for(let round=1;round<=3;round++){
  for(let i=0;i<24;i++){
   const p=linkAvailable(s.board);
   assert.ok(p);
   s=linkMatch(s,p.a,p.b).state;
  }
  assert.equal(s.done,true);
  s=linkNext(s).state;
 }
 assert.equal(s.round,4);assert.ok(Array.isArray(s.witness));
});
test("BUBBLE: 250 seeds have stable 7-column hex geometry, shoot deterministic",()=>{
 for(let seed=1;seed<=250;seed++){
  const s=bubbleStart(seed);assert.equal(s.board.length,77);assert.equal(s.queue.length,3);
  const angle=(seed%33)-16,x=bubbleShoot(s,angle),y=bubbleShoot(s,angle);
  assert.deepEqual(x,y,`bubble seed ${seed}`);
  assert.ok(x.state.moves===1||x.state.lost);
  assert.equal(x.state.board.length,77);
  assert.ok(x.state.board.every(v=>v>=-1&&v<=4));
 }
});
test("BUBBLE: center and edge neighbor counts are hex-based",()=>{
 assert.equal(bubbleNeighbors(3*7+3).length,6);
 assert.ok(bubbleNeighbors(0).length<6);
 assert.equal(bubbleShoot(bubbleStart(5),100).error,"INVALID_ANGLE");
});
test("JEWEL: 250 boards stable, move available, swap deterministic",()=>{
 for(let seed=1;seed<=250;seed++){
  const s=jewelStart(seed);assert.equal(s.board.length,49);
  assert.equal(jewelMatches(s.board).length,0);
  const move=jewelLegal(s.board.slice());assert.ok(move,`no legal move at seed ${seed}`);
  const x=jewelSwap(s,...move),y=jewelSwap(s,...move);assert.deepEqual(x,y);
  assert.ok(!x.error);assert.equal(x.state.moves,1);
  assert.ok(x.state.score>0);assert.equal(jewelMatches(x.state.board).length,0);
 }
});
test("JEWEL: invalid swaps cannot earn points",()=>{
 const s=jewelStart(5);const r=jewelSwap(s,0,48);
 assert.equal(r.error,"NOT_ADJACENT");assert.deepEqual(r.state,s);
});
test("UI: exactly the three approved modes are present, no rejected fourth game",()=>{
 const html=readFileSync(new URL("../prototype/index.html",import.meta.url),"utf8");
 for(const mode of ["link","bubble","jewel"])assert.ok(html.includes('data-mode="'+mode+'"'));
 assert.equal((html.match(/data-mode="/g)||[]).length,3);
 assert.ok(html.includes('type="module"')&&html.includes('./engines.mjs'));
 assert.ok(!html.includes('data-mode="sort"'));
});
test("RNG: pinned nonzero xorshift32 cycle start deterministic",()=>{
 assert.equal(next32(0),next32(0));assert.notEqual(next32(13),next32(14));
});
