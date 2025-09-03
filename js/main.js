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

/* --- CONTACT FORM (EmailJS Integrated) --- */
const form=document.getElementById('contactForm');
const successMsg=document.getElementById('successMessage');

if(form){
  // ✅ Init EmailJS
  (function(){
    emailjs.init("9qtUx-hXl_3qISvOg"); // Replace with your EmailJS Public Key
  })();

  form.addEventListener('submit', e=>{
    e.preventDefault();

    emailjs.sendForm("service_i6ml25q", "template_ev1ji8s", form)
      .then(()=>{
        successMsg.classList.add('show');
        setTimeout(()=>{successMsg.classList.remove('show');},4000);
        form.reset();
      },(err)=>{
        alert("❌ Failed to send message. Try again later.");
        console.error("EmailJS Error:", err);
      });
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
