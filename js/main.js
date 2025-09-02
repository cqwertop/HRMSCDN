/* --- TYPEWRITER EFFECT --- */
function typeWriter(elementId, text, speed=100){
  let i=0;
  const element=document.getElementById(elementId);
  function type(){
    if(i<text.length){
      element.textContent+=text.charAt(i);
      i++;
      setTimeout(type,speed);
    }
  }
  type();
}

/* --- SCROLL ANIMATIONS --- */
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', ()=>{
  const trigger = window.innerHeight*0.85;
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top<trigger){
      sec.style.opacity='1';
      sec.style.transform='translateY(0)';
    }
  });

  // Show back-to-top button
  const btn=document.getElementById('backToTop');
  if(window.scrollY>300){ btn.style.display='block'; } 
  else { btn.style.display='none'; }
});

/* --- BACK TO TOP BUTTON --- */
const backBtn=document.getElementById('backToTop');
if(backBtn){
  backBtn.addEventListener('click', ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

/* --- BUTTON FUN ANIMATION --- */
document.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const orig=btn.textContent;
    btn.textContent="🚀 Let's Code!";
    setTimeout(()=>{btn.textContent=orig;},1000);
  });
});

/* --- CONTACT FORM --- */
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    form.reset();
    const msg=document.getElementById('successMessage');
    msg.classList.add('show');
    setTimeout(()=>{msg.classList.remove('show');},3000);
  });
}

/* --- FLOATING SHAPES --- */
const shapesCount = 10;
for(let i=0;i<shapesCount;i++){
  const shape=document.createElement('div');
  shape.classList.add('shape');
  shape.style.width=`${Math.random()*30+10}px`;
  shape.style.height=`${Math.random()*30+10}px`;
  shape.style.top=`${Math.random()*100}%`;
  shape.style.left=`${Math.random()*100}%`;
  shape.style.animationDuration=`${Math.random()*20+10}s`;
  document.body.appendChild(shape);
}

/* --- OPTIONAL EASTER EGG --- */
document.addEventListener('keydown', e=>{
  if(e.key==='c'){ // Press 'c' to trigger fun animation
    alert("🎉 Secret coding power unlocked!");
  }
});
