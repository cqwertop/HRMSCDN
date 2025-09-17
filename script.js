// Particle Background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 80;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = "rgba(56, 189, 248, 0.7)";
    ctx.fill();
  }
}

for(let i=0; i<particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Typewriter Effect
const heroText = "Welcome to Coding Club!";
let index = 0;

function typeWriter() {
  if (index < heroText.length) {
    document.getElementById("heroText").innerHTML += heroText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();
