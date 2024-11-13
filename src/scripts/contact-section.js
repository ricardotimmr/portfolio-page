// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Select the contact section
const contactSection = document.querySelector(".contact-section");

// ScrollTrigger for showing/hiding the contact section
ScrollTrigger.create({
  trigger: ".project-section",
  start: "bottom+=900 bottom", // Trigger 200px after scrolling past the bottom of .project-section
  end: "bottom+=900 top",      // End when bottom of .project-section is 200px above the top of viewport
  toggleClass: {targets: contactSection, className: "visible"},
  onEnter: () => showContactSection(),
  onLeaveBack: () => hideContactSection(),
});

// Show animation
function showContactSection() {
  gsap.fromTo(contactSection, 
    { opacity: 0, y: "100%" },  // Start from below the viewport
    { opacity: 1, y: "0%", duration: 1, ease: "power4.out" } // Animate to fully visible
  );
}

// Hide animation
function hideContactSection() {
  gsap.to(contactSection, 
    { opacity: 0, y: "100%", duration: 1, ease: "power4.in" } // Animate downwards and fade out
  );
}
