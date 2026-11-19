// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>q.parentElement.classList.toggle('open'));
});
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='none';io.unobserve(e.target);}
}),{threshold:.1});
document.querySelectorAll('.pcard,.cat,.fcard,.tcard,.intro-card,.stat,.vm,.values li').forEach(el=>{
  el.style.opacity=0;el.style.transform='translateY(24px)';el.style.transition='.6s ease';io.observe(el);
});
// inject "تواصل معنا" into the mobile menu (hidden on desktop via CSS)
const menuEl=document.querySelector('.menu');
if(menuEl && !menuEl.querySelector('.menu-contact')){
  const a=document.createElement('a');
  a.href='contact.html';a.className='menu-contact';
  a.innerHTML='<i class="fa-solid fa-envelope"></i> تواصل معنا';
  menuEl.appendChild(a);
}
// mobile menu toggle
const burger=document.querySelector('.burger'),menu=document.querySelector('.menu');
if(burger&&menu){burger.addEventListener('click',()=>{
  menu.style.display=menu.style.display==='flex'?'none':'flex';
  menu.style.flexDirection='column';menu.style.position='absolute';menu.style.top='74px';
  menu.style.left='0';menu.style.right='0';menu.style.background='#fff';menu.style.padding='18px 20px';
  menu.style.boxShadow='var(--shadow)';menu.style.gap='14px';
});}
