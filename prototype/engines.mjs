// Pure prototype engines (3 games). Not production-certified for online rankings or level difficulty.
function next32(n){let x=(n>>>0)||0x6d2b79f5;x^=x<<13;x^=x>>>17;x^=x<<5;return x>>>0}

function drawNum(state,n){const x=next32(state);return {state:x,n:x%n}}

function shuffled(items,seed){let s=seed>>>0,a=items.slice();for(let i=a.length-1;i>0;i--){const d=drawNum(s,i+1);s=d.state;[a[i],a[d.n]]=[a[d.n],a[i]]}return {items:a,seed:s}}

function linkVariedBoard(seed){
 let rng=seed>>>0;const groups=[],idx=(r,c)=>r*6+c;
 for(const r of [0,7]){let a=shuffled([0,1,2,3,4,5],rng);rng=a.seed;for(let k=0;k<6;k+=2)groups.push([idx(r,a.items[k]),idx(r,a.items[k+1])]);}
 for(const c of [0,5]){let a=shuffled([1,2,3,4,5,6],rng);rng=a.seed;for(let k=0;k<6;k+=2)groups.push([idx(a.items[k],c),idx(a.items[k+1],c)]);}
 for(let r=1;r<=5;r+=2)for(let c=1;c<=3;c+=2){const pick=drawNum(rng,2);rng=pick.state;
  if(pick.n===0){groups.push([idx(r,c),idx(r,c+1)],[idx(r+1,c),idx(r+1,c+1)])}
  else {groups.push([idx(r,c),idx(r+1,c)],[idx(r,c+1),idx(r+1,c+1)])}}
 let palette=shuffled(Array.from({length:24},(_,i)=>i%12),rng);rng=palette.seed;
 const board=Array(48).fill(-1);for(let i=0;i<24;i++){board[groups[i][0]]=palette.items[i];board[groups[i][1]]=palette.items[i]}
 return {board,seed:rng,witness:groups};
}

function linkStart(seed=12345,level=1){if(level>=4){const v=linkVariedBoard(seed);return {kind:'link',board:v.board,score:0,moves:0,round:level,seed:v.seed,done:false,witness:v.witness}}
const symbols=Array.from({length:24},(_,i)=>i%12);const d=shuffled(symbols,seed),board=Array(48).fill(-1);for(let i=0;i<24;i++){const pos=Math.floor(i/3)*6+(i%3)*2;board[pos]=board[pos+1]=d.items[i]}return {kind:"link",board,score:0,moves:0,round:1,seed:d.seed,done:false}}

function linkRoute(board,a,b){if(a===b||a<0||b<0||a>=48||b>=48||board[a]<0||board[a]!==board[b])return null;const H=8,W=6,dirs=[[-1,0],[0,-1],[0,1],[1,0]],tr=Math.floor(b/W),tc=b%W;
 let q=[{r:Math.floor(a/W),c:a%W,dir:-1,bends:0,length:0,trail:[[Math.floor(a/W),a%W]]}],seen=new Map(),bound=0;
 while(q.length){q.sort((x,y)=>x.bends-y.bends||x.length-y.length||x.r-y.r||x.c-y.c);const cur=q.shift();if(cur.r===tr&&cur.c===tc&&cur.length)return {bends:cur.bends,length:cur.length,trail:cur.trail};if(++bound>15000)throw Error("Route bound");
  for(let d=0;d<4;d++){const r=cur.r+dirs[d][0],c=cur.c+dirs[d][1],turn=cur.bends+(cur.dir===-1||cur.dir===d?0:1);if(turn>2||r< -1||r>H||c< -1||c>W)continue;if(r>=0&&r<H&&c>=0&&c<W&&board[r*W+c]!==-1&&r*W+c!==b)continue;const code=[r,c,d,turn].join(":");if(seen.has(code)&&seen.get(code)<=cur.length+1)continue;seen.set(code,cur.length+1);q.push({r,c,dir:d,bends:turn,length:cur.length+1,trail:cur.trail.concat([[r,c]])})}
 }return null}

function linkAvailable(board){for(let i=0;i<48;i++)if(board[i]>=0)for(let j=i+1;j<48;j++)if(board[j]===board[i]){let p=linkRoute(board,i,j);if(p)return {a:i,b:j,route:p}}return null}

function linkMatch(s,a,b){const route=linkRoute(s.board,a,b);if(!route)return {state:s,error:"PAIR_INVALID"};const b2=s.board.slice();b2[a]=b2[b]=-1;return{state:{...s,board:b2,moves:s.moves+1,score:s.score+100+(2-route.bends)*10,done:b2.every(v=>v===-1)},route}}

function linkRearrange(s){const rest=s.board.filter(v=>v>=0),count=new Map();for(const v of rest)count.set(v,(count.get(v)||0)+1);if([...count.values()].some(n=>n%2))return {state:s,error:"ODD_PAIR"};const pool=[];for(const [v,n] of count)for(let i=0;i<n/2;i++)pool.push(v);const z=shuffled(pool,s.seed);const board=Array(48).fill(-1);for(let i=0;i<z.items.length;i++){const p=Math.floor(i/3)*6+(i%3)*2;board[p]=board[p+1]=z.items[i]}return{state:{...s,board,seed:z.seed,moves:s.moves+1,done:pool.length===0}}}

function linkNext(s){if(!s.done)return {state:s,error:"NOT_DONE"};const n=linkStart(s.seed,s.round+1);return{state:{...n,score:s.score,round:s.round+1}}}

function bubbleStart(seed=125){let board=Array(77).fill(-1),rng=seed>>>0||1;for(let row=0;row<4;row++)for(let c=0;c<7;c++){const d=drawNum(rng,5);rng=d.state;board[row*7+c]=d.n}let queue=[];for(let k=0;k<3;k++){const d=drawNum(rng,5);rng=d.state;queue.push(d.n)}return{kind:"bubble",seed:rng,board,queue,score:0,moves:0,round:1,done:false,lost:false}}

function bubbleNeighbors(i){const r=Math.floor(i/7),c=i%7;const delta=r%2===0?[[-1,-1],[-1,0],[0,-1],[0,1],[1,-1],[1,0]]:[[-1,0],[-1,1],[0,-1],[0,1],[1,0],[1,1]];return delta.map(([dr,dc])=>[r+dr,c+dc]).filter(([rr,cc])=>rr>=0&&rr<11&&cc>=0&&cc<7).map(([rr,cc])=>rr*7+cc)}

function bubbleShoot(old,aim=0){if(old.lost||old.done)return{state:old,error:"RUN_FINISHED"};if(!Number.isInteger(aim)||aim< -16||aim>16)return{state:old,error:"INVALID_ANGLE"};
 const b=old.board.slice();let x=3.0,y=10.35,dx=aim/11,dy=-1/Math.sqrt(1+dx*dx);dx/=Math.sqrt(1+(aim/11)**2);
 let hit=-1,ceil=false;
 for(let step=0;step<4000;step++){x+=dx*0.04;y+=dy*0.04;if(x<0){x=-x;dx=-dx}if(x>6.5){x=13-x;dx=-dx}if(y<=0){ceil=true;break}
  for(let i=0;i<b.length;i++)if(b[i]>=0){const row=Math.floor(i/7),col=i%7,px=col+(row%2)*.5,py=row*.8660254;if((x-px)**2+(y-py)**2<0.90**2){hit=i;break}}if(hit!==-1)break;
 }let spots=[];
 if(ceil){for(let c=0;c<7;c++)if(b[c]===-1)spots.push(c)}
 else if(hit!==-1)spots=bubbleNeighbors(hit).filter(i=>b[i]===-1);
 if(!spots.length)return{state:{...old,lost:true},event:"NO_SPACE"};
 spots.sort((a,z)=>{let ra=Math.floor(a/7),ca=a%7,rz=Math.floor(z/7),cz=z%7;return ((ca+(ra%2)*.5-x)**2+(ra*.8660254-y)**2)-((cz+(rz%2)*.5-x)**2+(rz*.8660254-y)**2)||a-z});
 const pos=spots[0],color=old.queue[0];b[pos]=color;
 const component=[pos],seen=new Set([pos]);for(let k=0;k<component.length;k++)for(const n of bubbleNeighbors(component[k]))if(b[n]===color&&!seen.has(n)){seen.add(n);component.push(n)}
 let popped=0,fallen=0;if(component.length>=3){popped=component.length;for(const i of component)b[i]=-1;
 const anch=[],keep=new Set();for(let i=0;i<7;i++)if(b[i]>=0){anch.push(i);keep.add(i)}
 for(let j=0;j<anch.length;j++)for(const v of bubbleNeighbors(anch[j]))if(b[v]>=0&&!keep.has(v)){keep.add(v);anch.push(v)}
 for(let i=0;i<b.length;i++)if(b[i]>=0&&!keep.has(i)){b[i]=-1;fallen++}}
 let rng=old.seed;const d=drawNum(rng,5);rng=d.state;const queue=old.queue.slice(1).concat(d.n);const moves=old.moves+1;
 let clear=b.every(v=>v<0),lost=false,board=b,round=old.round,score=old.score+popped*10+fallen*30;
 if(clear){score+=50;const next=bubbleStart(rng);board=next.board;rng=next.seed;queue.splice(0,queue.length,...next.queue);round++;clear=false}
 else if(moves%12===0){const next=Array(77).fill(-1);for(let i=0;i<70;i++)next[i+7]=board[i];for(let i=0;i<7;i++){const n=drawNum(rng,5);rng=n.state;next[i]=n.n}board=next}
 if(board.slice(63).some(v=>v>=0))lost=true;
 return{state:{...old,board,seed:rng,queue,moves,round,score,lost},event:popped?"POPPED":"ATTACHED",popped,fallen,pos}
}

function jewelMatches(b){const x=new Set();for(let r=0;r<7;r++)for(let c=0;c<7;){let k=c+1;while(k<7&&b[r*7+k]===b[r*7+c])k++;if(b[r*7+c]>=0&&k-c>=3)for(let j=c;j<k;j++)x.add(r*7+j);c=k}for(let c=0;c<7;c++)for(let r=0;r<7;){let k=r+1;while(k<7&&b[k*7+c]===b[r*7+c])k++;if(b[r*7+c]>=0&&k-r>=3)for(let j=r;j<k;j++)x.add(j*7+c);r=k}return[...x].sort((a,b)=>a-b)}

function jewelLegal(b){for(let a=0;a<49;a++){for(const z of [a+1,a+7]){if(z>=49||(z===a+1&&a%7===6))continue;[b[a],b[z]]=[b[z],b[a]];const ok=jewelMatches(b).length>0;[b[a],b[z]]=[b[z],b[a]];if(ok)return[a,z]}}return null}

function jewelMake(seed){let rng=seed>>>0||1;for(let tries=0;tries<60;tries++){const b=Array(49).fill(-1);for(let i=0;i<49;i++){let legal=[];for(let v=0;v<5;v++){if(i%7>=2&&b[i-1]===v&&b[i-2]===v)continue;if(i>=14&&b[i-7]===v&&b[i-14]===v)continue;legal.push(v)}const z=drawNum(rng,legal.length);rng=z.state;b[i]=legal[z.n]}if(jewelLegal(b))return {board:b,seed:rng}}
 throw Error("NO_JEWEL_START")}

function jewelStart(seed=987){const x=jewelMake(seed);return{kind:"jewel",board:x.board,seed:x.seed,moves:0,score:0,bestWindow:0,windowScore:0,round:1,done:false}}

function jewelSwap(old,a,z){if(!Number.isInteger(a)||!Number.isInteger(z)||a<0||z<0||a>=49||z>=49||!(Math.abs(a-z)===7||(Math.abs(a-z)===1&&Math.floor(a/7)===Math.floor(z/7))))return {state:old,error:"NOT_ADJACENT"};
 let b=old.board.slice();[b[a],b[z]]=[b[z],b[a]];if(!jewelMatches(b).length)return{state:old,error:"NO_MATCH"};
 let rng=old.seed,add=0,depth=0;for(;depth<70;depth++){const matches=jewelMatches(b);if(!matches.length)break;add+=matches.length*10*(depth+1);for(const i of matches)b[i]=-1;for(let c=0;c<7;c++){const kept=[];for(let r=6;r>=0;r--)if(b[r*7+c]>=0)kept.push(b[r*7+c]);let r=6;for(const val of kept)b[r--*7+c]=val;while(r>=0){const d=drawNum(rng,5);rng=d.state;b[r--*7+c]=d.n}}}
 if(depth===70)return{state:old,error:"CASCADE_BOUND"};
 if(!jewelLegal(b)){const next=jewelMake(rng);b=next.board;rng=next.seed}
 const moves=old.moves+1,round=Math.floor(moves/40)+1,windowScore=round===old.round?old.windowScore+add:0,bestWindow=Math.max(old.bestWindow,old.windowScore+(round===old.round?add:0));return{state:{...old,board:b,seed:rng,score:old.score+add,moves,round,windowScore,bestWindow},event:"MATCH",cleared:add,depth}}
export {linkVariedBoard,next32,drawNum,shuffled,linkStart,linkRoute,linkAvailable,linkMatch,linkRearrange,linkNext,bubbleStart,bubbleNeighbors,bubbleShoot,jewelMatches,jewelLegal,jewelMake,jewelStart,jewelSwap};
