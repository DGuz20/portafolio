(()=>{
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const R=matchMedia('(prefers-reduced-motion: reduce)').matches;
const g=k=>{try{return localStorage.getItem(k)}catch(e){return null}},s=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let lang=g('lang')||(navigator.language.startsWith('en')?'en':'es'),theme=g('theme')||'dark';
const t=k=>I18N[lang][k]||k,page=document.body.dataset.page;
function setTheme(v){theme=v;s('theme',v);document.documentElement.dataset.theme=v;$('#th').textContent=v==='dark'?'☾ Dark':'☀ Light'}
function setLang(v){lang=v;s('lang',v);document.documentElement.lang=v;$$('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
$('#lg').textContent=v==='es'?'ES | en':'es | EN';document.title=t('nav.'+page)+' · DGuz20';type()}
let tk=0;
function type(){const el=$('#typed');if(!el)return;const id=++tk,ph=t('hero.typed').split('|');if(R){el.textContent=ph[0];return}
let i=0,j=0,d=false;(function st(){if(id!==tk)return;const p=ph[i];el.textContent=p.slice(0,j);
if(!d&&j===p.length){d=true;return setTimeout(st,1400)}if(d&&j===0){d=false;i=(i+1)%ph.length}j+=d?-1:1;setTimeout(st,d?25:55)})()}
$('#th').onclick=()=>setTheme(theme==='dark'?'light':'dark');
$('#lg').onclick=()=>setLang(lang==='es'?'en':'es');
setTheme(theme);setLang(lang);
const cv=$('#bg'),cx=cv.getContext('2d');let W,H,P=[],mx=-999,my=-999;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(90,W/14|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6}))}
addEventListener('resize',rs);addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});rs();
const col=n=>getComputedStyle(document.documentElement).getPropertyValue(n);
function dr(){cx.clearRect(0,0,W,H);const A=col('--a'),B=col('--b');
P.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;const dx=p.x-mx,dy=p.y-my;if(dx*dx+dy*dy<14000){p.x+=dx*.02;p.y+=dy*.02}
cx.fillStyle=i%3?B:A;cx.fillRect(p.x,p.y,2.5,2.5);
for(let k=i+1;k<P.length;k++){const q=P[k],a=p.x-q.x,b=p.y-q.y,d=a*a+b*b;if(d<12000){cx.strokeStyle=i%3?B:A;cx.globalAlpha=1-d/12000;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke();cx.globalAlpha=1}}});
if(!R)requestAnimationFrame(dr)}dr();
const pg=$('#prog');addEventListener('scroll',()=>{pg.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight||1)*100+'%'},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e));
if(!R)$$('.card').forEach(c=>{c.onpointermove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`};c.onpointerleave=()=>c.style.transform=''});
const bt=$('#boot');if(bt){let seen=false;try{seen=sessionStorage.getItem('boot')}catch(e){}
if(seen||R)bt.remove();else{const L=['> MAGI-LINK.......OK','> PISTIL/STAMEN SYNC.......OK','> KERNEL LOADING: LINUX','> TARGET: DGuz20','> SYNC RATE: 100%'],bl=$('#bl'),bar=$('#bar i');let n=0;
const end=()=>{bt.classList.add('out');try{sessionStorage.setItem('boot',1)}catch(e){}setTimeout(()=>bt.remove(),700)};bt.onclick=end;
const iv=setInterval(()=>{if(n<L.length){bl.textContent+=L[n++]+'\n'}bar.style.width=n/L.length*100+'%';if(n>=L.length){clearInterval(iv);setTimeout(end,500)}},380)}}
const out=$('#out');if(out){const inp=$('#cmd'),hs=[];let hi=0;
const pr=(x,c='')=>{const d=document.createElement('div');d.className=c;d.textContent=x;out.append(d);out.scrollTop=out.scrollHeight};
const C={help:()=>t('term.help'),whoami:()=>'Gustavo / DGuz20',about:()=>t('about.p1')+'\n'+t('about.p2'),
skills:()=>'HTML, CSS, JavaScript, PHP, SQL, Python',neofetch:()=>'DGuz20@sync\n-----------\nOS: Linux, Windows\nLevel: '+t('about.lv')+'\nStack: HTML, CSS, JS, PHP, SQL, Python\nTools: VS Code, Git\nCTF: TryHackMe',date:()=>new Date().toString(),tools:()=>'VS Code, Git, Linux, Windows',ctf:()=>'TryHackMe',projects:()=>t('proj.note'),
social:()=>$$('footer .social a').map(a=>a.textContent+': '+a.href).join('\n'),ls:()=>'about.txt  skills.txt  tools.txt  projects/  social.txt',
lang:()=>{setLang(lang==='es'?'en':'es');return 'lang = '+lang},theme:()=>{setTheme(theme==='dark'?'light':'dark');return 'theme = '+theme},
sudo:()=>'DGuz20 is not in the sudoers file. This incident will be reported.',clear:()=>{out.textContent='';return ''}};
pr(t('term.hint'));
inp.onkeydown=e=>{if(e.key==='Tab'){e.preventDefault();const m=Object.keys(C).find(k=>inp.value&&k.startsWith(inp.value.toLowerCase()));if(m)inp.value=m;return}if(e.key==='Enter'){const v=inp.value.trim();inp.value='';if(!v)return;hs.push(v);hi=hs.length;pr('dguz20@sync:~$ '+v,'u');const c=v.split(' ')[0].toLowerCase();if(C[c]){const r=C[c]();if(r)pr(r)}else pr(t('term.nf'),'e')}
else if(e.key==='ArrowUp'&&hi>0)inp.value=hs[--hi];else if(e.key==='ArrowDown')inp.value=hs[++hi]||''};
$('.win').onclick=()=>inp.focus()}
})();
