const links=[['index.html','Accueil'],['a-propos.html','À propos'],['domaines.html','Domaines'],['projets.html','Projets'],['impact.html','Impact'],['publications.html','Publications'],['actualites.html','Actualités'],['partenaires.html','Partenaires']];
const current=location.pathname.split('/').pop()||'index.html';
const mark=`<svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="18" fill="#176b4d"/><circle cx="32" cy="27" r="11" fill="#e9c777"/><path d="M0 47 Q17 35 34 45 T64 41 V64 H0Z" fill="#0c3324"/><path d="M0 54 Q20 46 38 53 T64 50 V64 H0Z" fill="#d5a94d" opacity=".85"/></svg>`;
const brand=`<a class="brand" href="index.html" aria-label="Mission Sahel, accueil">${mark}<span><b>Mission Sahel</b><small>SOLIDARITÉ · DÉVELOPPEMENT · IMPACT</small></span></a>`;
function header(){return `<div id="progress"></div><div class="top"><div class="container"><span>Agir avec les communautés pour un développement durable</span><span>Organisation non gouvernementale · Mali</span></div></div><header><div class="container nav">${brand}<button class="toggle" id="toggle" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Navigation principale">${links.map(([u,t])=>`<a href="${u}" class="${current===u?'active':''}">${t}</a>`).join('')}<a href="contact.html" class="navcta${current==='contact.html'?' active':''}">Contact</a></nav></div></header>`}
function footer(){return `<footer><div class="container"><div class="footgrid"><div>${brand}<p style="margin-top:1.2rem">Une organisation engagée aux côtés des communautés pour des initiatives locales, inclusives et durables.</p><p class="small">Les contenus doivent être validés par l’organisation avant publication.</p></div><div><h3>Découvrir</h3><div class="flinks"><a href="a-propos.html">Qui sommes-nous ?</a><a href="domaines.html">Domaines</a><a href="projets.html">Projets</a><a href="impact.html">Impact</a></div></div><div><h3>Ressources</h3><div class="flinks"><a href="publications.html">Publications</a><a href="actualites.html">Actualités</a><a href="partenaires.html">Partenaires</a><a href="confidentialite.html">Confidentialité</a></div></div><div><h3>Contact</h3><p>Coordonnées officielles à confirmer.</p><a class="btn gold" href="contact.html">Écrire à l’équipe</a></div></div><div class="bottom"><span>© ${new Date().getFullYear()} ONG Mission Sahel</span><span>Site institutionnel · Mali</span></div></div></footer><button class="back" id="back" aria-label="Retour en haut">↑</button><div class="toast" id="toast" role="status"></div>`}

document.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.classList.add('js');
  document.getElementById('header').innerHTML=header();
  document.getElementById('footer').innerHTML=footer();
  const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
  const nav=$('#nav'),tg=$('#toggle');
  tg.onclick=()=>{const o=nav.classList.toggle('open');tg.setAttribute('aria-expanded',o)};
  const hd=$('header'),bar=$('#progress'),back=$('#back'),layers=$$('[data-speed]');
  let tick=false;
  function onScroll(){
    const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
    hd.classList.toggle('scrolled',y>20);bar.style.transform=`scaleX(${max>0?y/max:0})`;back.classList.toggle('show',y>500);
    if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&y<1200)layers.forEach(l=>l.style.transform=`translate3d(0,${y*l.dataset.speed}px,0)`);
    tick=false}
  addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
  back.onclick=()=>scrollTo({top:0,behavior:'smooth'});

  // Apparition au défilement
  [['.section .head','up'],['.grid2 > div:first-child','left'],['.grid2 > .art,.grid2 > .card,.grid2 > ul','right'],['.grid3 > *','up'],['.grid4 > *','up'],['.stat','up'],['.cta','zoom'],['.contactgrid > *','up'],['.section > .container > .notice','up'],['.timeline > div','up']].forEach(([s,t])=>$$(s).forEach((el,i)=>{if(el.hasAttribute('data-reveal'))return;el.setAttribute('data-reveal',t);el.style.setProperty('--i',i%4)}));
  const count=el=>{const t=el.textContent.trim();if(!/^\d{1,3}$/.test(t)||el.closest('[data-static]'))return;const n=+t;let s=null;const d=1800;const f=ts=>{s=s||ts;const p=Math.min((ts-s)/d,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};el.textContent='0';requestAnimationFrame(f)};
  const els=$$('[data-reveal]'),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(!('IntersectionObserver' in window)||reduce){els.forEach(e=>e.classList.add('in'))}
  else{const io=new IntersectionObserver(en=>en.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');const s=e.target.querySelector('strong');if(e.target.classList.contains('stat')&&s)count(s);io.unobserve(e.target)}),{threshold:.15,rootMargin:'0px 0px -5% 0px'});els.forEach(e=>io.observe(e))}

  // Formulaires de démonstration
  const toast=$('#toast');
  $$('[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();toast.textContent='Formulaire de démonstration : connectez-le à une adresse officielle ou à un service d’envoi avant publication.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),5200);f.reset()}));
});
