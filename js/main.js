/* --- FLOATING SHAPES --- */
const shapesCount = 15;
for(let i=0;i<shapesCount;i++){
  const shape = document.createElement('div');
  shape.classList.add('shape');
  shape.style.width = `${Math.random()*30+10}px`;
  shape.style.height = `${Math.random()*30+10}px`;
  shape.style.top = `${Math.random()*100}%`;
  shape.style.left = `${Math.random()*100}%`;
  shape.style.animationDuration = `${Math.random()*20+10}s`;
  document.body.appendChild(shape);
}

/* --- SCROLL FADE-IN --- */
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerPoint) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

/* --- BACK TO TOP --- */
const backBtn = document.getElementById('backToTop');
if(backBtn){
  backBtn.addEventListener('click', ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

/* --- CONTACT FORM --- */
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    form.reset();
    const msg = document.getElementById('successMessage');
    msg.classList.add('show');
    setTimeout(()=>{msg.classList.remove('show');},3000);
  });
}
