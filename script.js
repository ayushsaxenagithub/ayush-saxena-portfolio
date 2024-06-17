document.addEventListener("DOMContentLoaded", function () {
  // Set dark mode by default
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
  document.getElementById('toggle-icon').classList.remove('fa-moon-o');
  document.getElementById('toggle-icon').classList.add('fa-sun-o');

  // Display the welcome notice
  const welcomeNotice = document.getElementById("welcome-notice");

  // Hide the welcome notice after 3 seconds
  setTimeout(() => {
      welcomeNotice.style.opacity = "0";
      setTimeout(() => {
          welcomeNotice.style.display = "none";
          showHeader();
      }, 500);
  }, 1000);

  function showHeader() {
      document.querySelector(".header").style.opacity = "1";
      document.querySelector(".header").style.transform = "translateY(0)";
  }

  const sections = document.querySelectorAll(".section");
  let currentSection = 0;

  function showSection(index) {
      sections.forEach((section, i) => {
          if (i === index) {
              section.style.display = "block";
              setTimeout(() => {
                  section.style.opacity = "1";
                  section.style.transform = "translateY(0)";
              }, 50);
          } else {
              section.style.opacity = "0";
              section.style.transform = "translateY(20px)";
              setTimeout(() => {
                  section.style.display = "none";
              }, 500);
          }
      });
  }

  document.addEventListener("scroll", function () {
      const triggerHeight = window.innerHeight / 3;

      sections.forEach((section, index) => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= triggerHeight && sectionTop >= 0) {
              showSection(index);
          }
      });
  });

  document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          currentSection = (currentSection + 1) % sections.length;
          showSection(currentSection);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          currentSection = (currentSection - 1 + sections.length) % sections.length;
          showSection(currentSection);
      }
  });

  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute('data-section');
          const sectionIndex = Array.from(sections).findIndex(section => section.id === sectionId);
          showSection(sectionIndex);
          // Collapse the navbar in mobile view
          if (window.innerWidth < 992) {
              $('.navbar-collapse').collapse('hide');
          }
      });
  });

  document.querySelector('.navbar-brand').addEventListener('click', (e) => {
      e.preventDefault();
      showSection(0); // Show the "About" section
      // Collapse the navbar in mobile view
      if (window.innerWidth < 992) {
          $('.navbar-collapse').collapse('hide');
      }
  });

  // Initial section display
  showSection(currentSection);

  // Dark mode toggle function
  window.toggleMode = function() {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
      const toggleIcon = document.getElementById('toggle-icon');
      if (document.body.classList.contains("dark-mode")) {
          toggleIcon.classList.remove('fa-moon-o');
          toggleIcon.classList.add('fa-sun-o');
      } else {
          toggleIcon.classList.remove('fa-sun-o');
          toggleIcon.classList.add('fa-moon-o');
      }
      showSection(0); // Ensure it navigates to the "About" section
  };

  // Scroll functionality for mouse wheel
  document.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
          currentSection = (currentSection + 1) % sections.length;
      } else {
          currentSection = (currentSection - 1 + sections.length) % sections.length;
      }
      showSection(currentSection);
  });

  // Ensure cards are clickable and expandable
  document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
          const cardBody = card.querySelector('.card-body');
          card.classList.toggle('expanded');
          if (card.classList.contains('expanded')) {
              cardBody.style.display = 'block';
          } else {
              cardBody.style.display = 'none';
          }
      });

      // Initially hide card bodies
      const cardBody = card.querySelector('.card-body');
      cardBody.style.display = 'none';
  });
});
