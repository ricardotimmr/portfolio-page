const burgerMenu = document.querySelector('.burger-menu');
const navElements = document.querySelector('.nav-elements');
const dropdownBackground = document.querySelector('.dropdown-background');
const stickyNavbar = document.createElement('nav'); // Create a separate sticky navbar
const navbar = document.querySelector('nav');
const navbarPlaceholder = document.querySelector('.navbar-placeholder'); // Select the placeholder
const stickyScrollThreshold = 200; // Adjust this as needed

let lastScrollTop = 0;
let isFirstViewComplete = false; // Track when the first-view animation is complete

// Copy navbar content for the sticky navbar
stickyNavbar.innerHTML = navbar.innerHTML;
stickyNavbar.classList.add('sticky', 'hide');
document.body.appendChild(stickyNavbar);

// Toggle burger menu and dropdown for both regular and sticky navbars
function toggleBurgerMenu(menu, elements, background) {
    menu.classList.toggle('active');
    elements.classList.toggle('active');
    background.classList.toggle('active');
}

burgerMenu.addEventListener('click', () => {
    toggleBurgerMenu(burgerMenu, navElements, dropdownBackground);
});

stickyNavbar.querySelector('.burger-menu').addEventListener('click', () => {
    const stickyBurgerMenu = stickyNavbar.querySelector('.burger-menu');
    const stickyNavElements = stickyNavbar.querySelector('.nav-elements');
    const stickyDropdownBackground = stickyNavbar.querySelector('.dropdown-background');
    toggleBurgerMenu(stickyBurgerMenu, stickyNavElements, stickyDropdownBackground);
});

// Function to handle the sticky navbar behavior with animation
function handleStickyNavbar() {
    // Only check if first-view animation has completed
    if (!isFirstViewComplete) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > stickyScrollThreshold && !stickyNavbar.classList.contains("visible")) {
        stickyNavbar.classList.add("visible");
        stickyNavbar.classList.remove("hide"); // Show the sticky navbar
    } else if (scrollTop <= stickyScrollThreshold && stickyNavbar.classList.contains("visible")) {
        stickyNavbar.classList.add("hide"); // Trigger the slide-up animation
        setTimeout(() => {
            stickyNavbar.classList.remove("visible"); // Remove visibility only after animation ends
        }, 500); // Match the animation duration
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Delay the sticky navbar behavior until the first-view animation is complete
setTimeout(() => {
    isFirstViewComplete = true; // Allow sticky navbar to appear after this
}, 4000); // Adjust this to match the duration of the first-view animation (4 seconds in your example)

// Run the function when the page is scrolled
window.onscroll = function () {
    handleStickyNavbar();
};