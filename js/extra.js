(()=>{
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const R=matchMedia('(prefers-reduced-motion: reduce)').matches,D=document.documentElement;
const g=k=>{try{return localStorage.getItem(k)}catch(e){return null}},s=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
// Sonido (apagado por defecto)
let on=g('sfx')==='1',ac;
const bp=(f,d=.07)=>{if(!on)return;try{ac=ac||new AudioContext();const o=ac.createOscillator(),v=ac.createGain();o.type='square';o.frequency.value=f;v.gain.value=.04;o.connect(v);v.connect(ac.destination);o.start();v.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+d);o.stop(ac.currentTime+d)}catch(e){}};
const sn=$('#sn'),lbl=()=>{sn.textContent=on?'♪ on':'♪ off';sn.setAttribute('aria-pressed',on)};
sn.onclick=()=>{on=!on;s('sfx',on?1:0);lbl();bp(990)};lbl();
document.addEventListener('click',e=>{if(e.target.closest('a,button'))bp(660)});
$$('nav a').forEach(a=>a.addEventListener('pointerenter',()=>bp(880,.04)));
// Color de acento
const AC=['','cyan','violet'];let ai=Math.max(0,AC.indexOf(g('accent')||''));
const ab=$('#ac'),sa=()=>{D.dataset.accent=AC[ai];ab.textContent='◐ '+(ai+1)};
ab.onclick=()=>{ai=(ai+1)%AC.length;s('accent',AC[ai]);sa()};sa();
// Scramble de texto
const G='ABCDEF0123456789#$%&<>/';
function scr(el){if(R||el._s)return;const f=el.textContent,n=f.length;let i=0;el._s=1;
const iv=setInterval(()=>{el.textContent=f.split('').map((c,k)=>k<i||c===' '?c:G[Math.random()*G.length|0]).join('');i+=Math.max(1,n/14|0);if(i>n){clearInterval(iv);el.textContent=f;el._s=0}},35)}
$$('nav a,.card h3,h2').forEach(e=>e.addEventListener('mouseenter',()=>scr(e)));
setTimeout(()=>$$('h1.glitch').forEach(scr),$('#boot')?3000:300);
// Cursor con halo
if(matchMedia('(pointer:fine)').matches&&!R){const c=document.createElement('div');c.id='cur';document.body.append(c);let x=0,y=0,tx=-99,ty=-99;
addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY});(function f(){x+=(tx-x)*.18;y+=(ty-y)*.18;c.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(f)})();
document.addEventListener('pointerover',e=>c.classList.toggle('big',!!e.target.closest('a,button,.card,input')))}
// Transición entre páginas
const w=document.createElement('div');w.id='wipe';document.body.append(w);
addEventListener('pageshow',e=>{if(e.persisted)w.className=''});
if(!R)$$('a[href$=".html"]').forEach(a=>a.addEventListener('click',e=>{if(a.target||e.ctrlKey||e.metaKey||a.getAttribute('aria-current'))return;e.preventDefault();w.className='go';setTimeout(()=>location.href=a.href,380)}));
// HUD del hero
const h=$('.hero');if(h)h.insertAdjacentHTML('afterbegin','<svg class="hud" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="90" fill="none" stroke="var(--b)" stroke-dasharray="4 8"/><circle class="r2" cx="100" cy="100" r="72" fill="none" stroke="var(--a)" stroke-width="2" stroke-dasharray="60 20 10 20"/><path d="M100 10v18M100 172v18M10 100h18M172 100h18" stroke="var(--c)" stroke-width="2"/></svg>');
// Volver arriba
const up=$('#up');up.onclick=()=>scrollTo({top:0});addEventListener('scroll',()=>up.classList.toggle('show',scrollY>600),{passive:true});
// Easter egg: ↑↑↓↓←→←→BA
const K=[38,38,40,40,37,39,37,39,66,65];let ki=0;
addEventListener('keydown',e=>{ki=e.keyCode===K[ki]?ki+1:(e.keyCode===K[0]?1:0);if(ki===K.length){ki=0;
D.classList.add('od');const m=document.createElement('div');m.id='toast';m.textContent=D.lang==='en'?'SYNC RATE 400% · OVERDRIVE':'SINCRONIZACIÓN 400% · OVERDRIVE';document.body.append(m);bp(220,.4);setTimeout(()=>{D.classList.remove('od');m.remove()},6000)}});
})();
