// Advanced Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        createParticles();
        animateSkills();
      }, 500);
    }, 1000);
  });
  
  // Quantum Scroll Effects
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (currentScroll > lastScroll) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  
    // Parallax Elements
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax);
      el.style.transform = `translateY(${currentScroll * speed}px)`;
    });
  });
  
  // Holographic Timeline Observer
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelector('.timeline-icon').style.animation = 
          'iconPulse 1s ease-out';
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
  });
  
  // Neural Network Skill Animation
  function animateSkills() {
    const skills = ['Python', 'AWS', 'Django', 'React', 'ML', 'Docker'];
    const container = document.createElement('div');
    container.className = 'skills-container';
    document.body.appendChild(container);
  
    skills.forEach((skill, index) => {
      const bubble = document.createElement('div');
      bubble.className = 'skill-bubble';
      bubble.textContent = skill;
      bubble.style.left = `${Math.random() * 90}%`;
      bubble.style.top = `${Math.random() * 90}%`;
      bubble.style.animationDelay = `${index * 0.2}s`;
      container.appendChild(bubble);
      
      setTimeout(() => {
        bubble.style.opacity = '1';
        bubble.style.transform = 'scale(1)';
      }, index * 100);
    });
  }
  
  // Particle Physics Simulation
  function createParticles() {
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      document.querySelector('.particles').appendChild(particle);
    }
  }
  
  // Quantum Entanglement Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset;
      const startPos = window.pageYOffset;
      const distance = targetPos - startPos;
      const duration = 1000;
      let startTime = null;
  
      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      }
  
      requestAnimationFrame(animation);
    });
  });
  
  // AI-Powered Form Interaction
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        body: formData
      });
      // Handle quantum response...
    });
  }
  
  // Initialize Animate On Scroll
  AOS.init({
    disable: 'mobile',
    duration: 1200,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom'
  });
  
  // Holographic Console Effect
  if (window.console) {
    const styles = [
      'color: #fff',
      'background: #2c3e50',
      'font-size: 18px',
      'padding: 12px',
      'border-radius: 5px'
    ].join(';');
    console.log('%c🚀 Welcome to My Quantum Portfolio!', styles);
  }


  // Hero Section Animations
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });
  
  // Smooth Scroll for CTA Button
  document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });



  // Skill Radial Animation
document.querySelectorAll('.skill-radial').forEach(radial => {
    const percent = radial.dataset.percent;
    radial.style.setProperty('--percent', percent);
});

// Tech Card Hover Effect
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.expertise-item, .tech-card').forEach(el => {
    observer.observe(el);
});

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});





// Quantum Interactions
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    // Neural Network Inspired Menu
    const navbar = document.querySelector('.navbar');
    const menuItems = document.querySelectorAll('.nav-link');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
    });

    // Quantum Entanglement Effect
    menuItems.forEach(item => {
      item.addEventListener('touchstart', () => {
        menuItems.forEach(link => {
          if (link !== item) {
            link.style.transform = `translateX(${Math.random() * 20 - 10}px)
                                   translateY(${Math.random() * 20 - 10}px)`;
          }
        });
      });

      item.addEventListener('touchend', () => {
        menuItems.forEach(link => {
          link.style.transform = '';
        });
      });
    });

    // Holographic Image Interaction
    const heroImage = document.querySelector('.hero-image');
    let touchStartTime = 0;

    heroImage.addEventListener('touchstart', () => {
      touchStartTime = Date.now();
      heroImage.style.transform = 'scale(0.95)';
    });

    heroImage.addEventListener('touchend', () => {
      const touchDuration = Date.now() - touchStartTime;
      if (touchDuration < 200) {
        heroImage.animate([
          { transform: 'scale(1)', filter: 'brightness(1)' },
          { transform: 'scale(1.2)', filter: 'brightness(1.2)' },
          { transform: 'scale(1)', filter: 'brightness(1)' }
        ], { duration: 600, easing: 'ease-out' });
      }
      heroImage.style.transform = '';
    });

    // Quantum Scroll Physics
    let scrollVelocity = 0;
    let lastTouchY = 0;
    let isDecelerating = false;

    window.addEventListener('touchstart', e => {
      lastTouchY = e.touches[0].clientY;
      isDecelerating = false;
    });

    window.addEventListener('touchmove', e => {
      const deltaY = e.touches[0].clientY - lastTouchY;
      scrollVelocity = deltaY * 1.5;
      lastTouchY = e.touches[0].clientY;
    });

    const quantumScroll = () => {
      if (!isDecelerating && Math.abs(scrollVelocity) > 0) {
        window.scrollBy(0, scrollVelocity);
        scrollVelocity *= 0.95;
        requestAnimationFrame(quantumScroll);
      }
    };

    window.addEventListener('touchend', () => {
      isDecelerating = true;
      requestAnimationFrame(quantumScroll);
    });

    // Neural Particle Effect
    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(#3b82f6, #ffd700);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(${x}px, ${y}px);
      `;
      
      document.body.appendChild(particle);
      
      particle.animate([
        { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
        { transform: `translate(${x + Math.random() * 100 - 50}px, 
          ${y + Math.random() * 100 - 50}px) scale(0)`, opacity: 0 }
      ], { duration: 1000, easing: 'ease-out' });
      
      setTimeout(() => particle.remove(), 1000);
    };

    document.addEventListener('touchstart', e => {
      for (let i = 0; i < 15; i++) {
        createParticle(e.touches[0].clientX, e.touches[0].clientY);
      }
    });
  }

  // Quantum Resonance Initializer
  AOS.init({
    disable: window.innerWidth > 768,
    duration: 1000,
    once: true,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    mirror: false,
    anchorPlacement: 'top-bottom'
  });
});