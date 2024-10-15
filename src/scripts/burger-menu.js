const burgerMenu = document.querySelector('.burger-menu');
const navElements = document.querySelector('.nav-elements');
const dropdownBackground = document.querySelector('.dropdown-background');
const navbar = document.querySelector('nav');
const navbarPlaceholder = document.querySelector('.navbar-placeholder'); // Select the placeholder
const stickyScrollThreshold = 200; // Adjust this as needed
let lastScrollTop = 0;

// Toggle burger menu and dropdown
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navElements.classList.toggle('active');
    dropdownBackground.classList.toggle('active');
});

// Function to handle the sticky navbar behavior with animation
function stickyNavbar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only show sticky navbar when scrolling down past the threshold and it's not already sticky
    if (scrollTop > stickyScrollThreshold && !navbar.classList.contains("sticky")) {
        navbar.classList.add("sticky");
        navbar.classList.remove("hide"); // Remove hide to ensure it's visible
        navbarPlaceholder.style.display = "block"; // Show the placeholder to prevent jump
    }

    // Hide the sticky navbar only when scrolling back to the top, and it's currently sticky
    else if (scrollTop <= stickyScrollThreshold && navbar.classList.contains("sticky")) {
        navbar.classList.add("hide"); // Apply the slide-up hide animation
        setTimeout(() => {
            navbar.classList.remove("sticky", "hide"); // Remove both classes after the animation
            navbarPlaceholder.style.display = "none"; // Hide the placeholder when not sticky
        }, 500); // Match the animation duration (0.5s)
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Run the function when the page is scrolled
window.onscroll = function () {
    stickyNavbar();
};