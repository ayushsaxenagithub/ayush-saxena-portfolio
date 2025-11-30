document.getElementById('y').textContent = new Date().getFullYear();

// Navbar Scroll Effect
const nav = document.getElementById('topnav');
function handleNav() {
  if (window.scrollY > 50) {
    nav.classList.add('shadow-lg');
    nav.style.background = 'rgba(5, 5, 5, 0.9) !important';
  } else {
    nav.classList.remove('shadow-lg');
    nav.style.background = 'rgba(5, 5, 5, 0.7) !important';
  }
}
window.addEventListener('scroll', handleNav);

// Nav Height Variable
function setNavH() {
  const h = nav ? nav.offsetHeight : 76;
  document.documentElement.style.setProperty('--nav-h', h + 'px');
  const spy = bootstrap.ScrollSpy.getInstance(document.body);
  if (spy) spy.dispose();
  new bootstrap.ScrollSpy(document.body, { target: '#topnav', offset: h + 1 });
}
setNavH();
window.addEventListener('resize', setNavH);
window.addEventListener('load', setNavH);

// Back to Top Button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => { toTop.style.display = window.scrollY > 400 ? 'inline-flex' : 'none'; });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Skill Bars Animation
const bars = document.querySelectorAll('#skills .progress-bar');
const barIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.getAttribute('data-value') + '%';
      barIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => barIO.observe(b));

// Number Counter Animation
const nums = document.querySelectorAll('.num');
const numIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target; const target = +el.dataset.target; let cur = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    function tick() {
      cur += step;
      if (cur >= target) { el.textContent = target; }
      else { el.textContent = cur; requestAnimationFrame(tick); }
    }
    requestAnimationFrame(tick);
    numIO.unobserve(el);
  });
}, { threshold: 0.8 });
nums.forEach(n => numIO.observe(n));

// Project Filtering
const pills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.project-card');
function applyFilter(val) {
  cards.forEach(c => {
    const show = val === 'all' || c.dataset.tags.split(' ').includes(val);
    c.style.display = show ? 'block' : 'none';
    setTimeout(() => {
        c.style.opacity = show ? '1' : '0';
        c.style.transform = show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)';
    }, 10);
  });
}
pills.forEach(p => p.addEventListener('click', () => {
  pills.forEach(x => x.classList.remove('active'));
  p.classList.add('active');
  applyFilter(p.dataset.filter);
}));
applyFilter('all');

// Initialize AOS
AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic', offset: 100 });

// 3D Tilt Effect Logic
const tiltElements = document.querySelectorAll('.glass-card');

tiltElements.forEach(card => {
  card.classList.add('tilt-card');

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (-10 to 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// Typewriter Effect for Name
const nameSpan = document.querySelector('.hero-title span');
if (nameSpan) {
    const originalName = nameSpan.innerText;
    nameSpan.innerText = '';
    let i = 0;
    function typeWriter() {
      if (i < originalName.length) {
        nameSpan.innerText += originalName.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    setTimeout(typeWriter, 500);
}
