/* Signature V3: particle depth field, opening sequence, scene markers and motion control. */
(()=>{'use strict';
const canvas=document.getElementById('ambientCanvas'),intro=document.getElementById('introScreen'),toggle=document.getElementById('motionToggle'),scene=document.getElementById('cinema');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;let enabled=!reduced,raf=0,w=0,h=0,dpr=1,particles=[],last=0;
const ctx=canvas?.getContext('2d',{alpha:true});
function resize(){if(!ctx)return;dpr=Math.min(devicePixelRatio||1,1.7);w=innerWidth;h=innerHeight;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:Math.min(110,Math.max(25,Math.floor(w*h/14500)))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.5+.3,v:Math.random()*.35+.08,a:Math.random()*.45+.12}))}
function draw(t){raf=0;if(!enabled||!ctx)return;ctx.clearRect(0,0,w,h);const dt=Math.min(2,(t-last)/16.7||1);last=t;const yShift=scrollY*.035;for(const p of particles){p.y-=p.v*dt;if(p.y<0){p.y=h;p.x=Math.random()*w}const x=p.x+Math.sin(t*.00015+p.y*.005)*9;ctx.beginPath();ctx.fillStyle=`rgba(95,175,255,${p.a})`;ctx.arc(x,(p.y+yShift)%h,p.r,0,Math.PI*2);ctx.fill()}raf=requestAnimationFrame(draw)}
function start(){if(!ctx||!enabled)return;cancelAnimationFrame(raf);raf=requestAnimationFrame(draw)}
function stop(){cancelAnimationFrame(raf);raf=0;ctx?.clearRect(0,0,w,h)}
if(ctx){resize();window.addEventListener('resize',()=>{resize();start()});document.addEventListener('visibilitychange',()=>document.hidden?stop():start());start()}
if(intro){if(reduced)intro.remove();else{setTimeout(()=>intro.classList.add('dismissed'),1900);setTimeout(()=>intro.remove(),3100)}}
function syncToggle(){document.body.classList.toggle('effects-paused',!enabled);toggle.querySelector('span').textContent=enabled?'EFEITOS ON':'EFEITOS OFF';toggle.setAttribute('aria-label',enabled?'Pausar efeitos visuais':'Ativar efeitos visuais');enabled?start():stop()}
toggle?.addEventListener('click',()=>{enabled=!enabled;syncToggle()});
const labels=[...document.querySelectorAll('.scene-index span')];let pending=false;function update(){pending=false;if(!scene)return;const rect=scene.getBoundingClientRect(),travel=Math.max(1,scene.offsetHeight-innerHeight),p=Math.max(0,Math.min(1,-rect.top/travel)),idx=Math.min(3,Math.floor(p*4));labels.forEach((el,i)=>el.classList.toggle('active',i===idx))}
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});update();
})();
