// Ensure GSAP and ScrollTrigger are available
gsap.registerPlugin(ScrollTrigger);

// Select the contact section and project section
const contactSection = document.querySelector('.contact-section');
const projectSection = document.querySelector('.project-section');

// Create a GSAP timeline for animating the contact section
const contactTimeline = gsap.timeline({
  paused: true // Initially paused, will play on trigger
});

// Add animations to the timeline for the contact section appearance
contactTimeline
  .to(contactSection, { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
    ease: 'power3.out' // Smooth easing
  })
  .to('.contact-content', { 
    opacity: 1, 
    y: 0, 
    duration: 0.7, 
    ease: 'power3.out' 
  }, '-=0.5'); // Start this animation 0.5 seconds before the previous one ends

// Add animations to hide the contact section when scrolling back to the project section
const hideContactTimeline = gsap.timeline({
  paused: true // Initially paused, will play on reverse trigger
});

// Add animations to the hide timeline for the contact section
hideContactTimeline
  .to('.contact-content', { 
    opacity: 0, 
    y: 50, 
    duration: 0.5, 
    ease: 'power2.out' 
  })
  .to(contactSection, { 
    y: 50, 
    opacity: 0, 
    duration: 0.5, 
    ease: 'power2.out' 
  }, '-=0.3'); // Start this animation 0.3 seconds before the previous one ends

// Listen for the custom event that signals the project section is fully scrolled
window.addEventListener("projectSectionScrolled", () => {
  // Trigger the contact section animation when the event is fired
  contactTimeline.play();
});

// Listen for the custom event that signals the project section is re-entered
window.addEventListener("projectSectionReentered", () => {
  // Reverse the animation to hide the contact section when the user scrolls back up to the project section
  hideContactTimeline.play();
});

// Create ScrollTrigger for the project section
ScrollTrigger.create({
  trigger: projectSection,
  start: "bottom+=100 top", // Customize start point for entering project section
  end: "bottom+=300 bottom", // Customize end point for resistance buffer
  onEnter: () => {
    // Trigger the contact section animation when the user has fully scrolled through the project section
    contactTimeline.play();
  },
  onLeaveBack: () => {
    // Reverse the animation to hide the contact section when the user scrolls back up to the project section
    hideContactTimeline.play();
  },
  scrub: true, // Sync with scroll progress
  markers: false // Set to true for debugging
});