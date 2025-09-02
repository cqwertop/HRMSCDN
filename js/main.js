/* --- TYPEWRITER EFFECT --- */
function typeWriter(elementId, text, speed=100) {
    let i = 0;
    const element = document.getElementById(elementId);
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

/* --- SMOOTH SCROLL FOR ANCHORS --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

/* --- ANIMATIONS ON SCROLL --- */
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

/* --- BUTTON ANIMATION --- */
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = "🚀 Let's Code!";
        setTimeout(()=>{btn.textContent = "Join Now";},1000);
    });
});

/* --- CONTACT FORM SUBMISSION --- */
const form = document.getElementById('contactForm');
if(form){
    form.addEventListener('submit', e=>{
        e.preventDefault();
        form.reset();
        const msg = document.getElementById('successMessage');
        msg.classList.add('show');
        setTimeout(()=>{ msg.classList.remove('show'); },3000);
    });
}
