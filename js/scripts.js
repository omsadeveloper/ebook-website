const navbar = document.querySelector(".navbar");
// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
});

function checkNavbarBackground() {
  
  if (window.innerWidth < 700) {
    navbar.classList.add("navbar-sticky");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("navbar-sticky");
    navbar.classList.remove("bg-dark");
  }
}

// Check the width on page load


function userScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("navbar-sticky");
      navbar.classList.remove("bg-dark");
    }
  });
}

window.addEventListener("DOMContentLoaded", checkNavbarBackground);
document.addEventListener("DOMContentLoaded", userScroll);

// Check the width whenever the window is resized
window.addEventListener("resize", checkNavbarBackground);

