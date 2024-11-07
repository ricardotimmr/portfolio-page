// Ensure GSAP and ScrollTrigger are available
gsap.registerPlugin(ScrollTrigger);

// Select the card elements and the container
const cards = gsap.utils.toArray(".project-wrapper");
const cardsContainer = document.querySelector(".projects-container");

gsap.to(cardsContainer, {
  x: () => -(cardsContainer.scrollWidth - window.innerWidth + 180), // Adjust final offset for last card
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".project-section",
    start: "top-=130 top",
    end: () => `+=${cardsContainer.scrollWidth - window.innerWidth + cards[0].offsetWidth + 100}`, // Adjust end dynamically
    pin: true,
    scrub: 0.75,
    markers: false, // for debugging, can be removed when done
    invalidateOnRefresh: true,
    onLeave: () => {
      // Trigger the contact section animation when scrolling past the project section
      window.dispatchEvent(new CustomEvent("projectSectionScrolled"));
    },
    onEnterBack: () => {
      // Reverse the contact section animation when scrolling back to the project section
      window.dispatchEvent(new CustomEvent("projectSectionReentered"));
    }
  }
});
