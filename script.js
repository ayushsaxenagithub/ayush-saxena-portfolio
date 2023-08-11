// Toggle navigation menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
    });
}




// Image rotation on hover
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'rotate(360deg)';
});
profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'rotate(0deg)';
});

// Run initialization code when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the menu toggle button
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);

    // Add event listener to scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top-button');
    scrollTopButton.addEventListener('click', () => {
        smoothScroll('body');
    });

    // Add event listener to expand and collapse content
    const expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const content = e.target.nextElementSibling;
            content.classList.toggle('expanded');
        });
    });
});


// Toggle navigation menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  
  // Smooth scrolling
  function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
  
  // Scroll to section on menu item click
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      smoothScroll(target);
  
      // Close the menu after clicking a menu item (for responsive navigation)
      const menu = document.querySelector('.menu');
      menu.classList.remove('active');
    });
  });
  
  // Image rotation on hover
  const profileImage = document.querySelector('.profile-image');
  profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'rotate(360deg)';
  });
  profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'rotate(0deg)';
  });
  
  // Run initialization code when the document is ready
  document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the menu toggle button
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);
  
    // Add event listener to scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top-button');
    scrollTopButton.addEventListener('click', () => {
      smoothScroll('body');
    });
  
    // Add event listener to expand and collapse content
    const expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const content = e.target.nextElementSibling;
        content.classList.toggle('expanded');
      });
    });
  });
  
  // Check if the viewport width changes and close the menu (for responsive navigation)
  window.addEventListener('resize', () => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });
  