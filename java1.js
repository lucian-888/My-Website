const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Toggle hamburger menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
    // Remove active class from all links
    navLinks.forEach(navLink => navLink.classList.remove("active"));
    
    // Add active class to clicked link
    this.classList.add("active");
  });
});

// Optional: Set initial active state based on current URL
function setInitialActiveState() {
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', setInitialActiveState);

