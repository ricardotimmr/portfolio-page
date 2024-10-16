// Make sure to include GSAP and ScrollTrigger in your HTML file
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

// Select the contact section and about-me section
const contactSection = document.querySelector('.contact-section');
const aboutMeSection = document.querySelector('.about-me-section');

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

// Custom resistance effect variables
let resistanceActive = false;  // Tracks whether resistance is active
const resistanceAmount = 50;  // Number of pixels the resistance "bumps" back
const resistanceDuration = 0.2;  // Duration of the bump animation

// ScrollTrigger for the main animation of the contact section
ScrollTrigger.create({
  trigger: aboutMeSection,
  start: 'bottom+=100 bottom', // Allow user to scroll 100px past the end of about-me
  end: 'bottom+=300 bottom', // Add 200px buffer for resistance
  onEnter: () => contactTimeline.play(), // Play the contact section animation
  onLeaveBack: () => contactTimeline.reverse(), // Reverse animation when scrolling back up
  scrub: true, // Sync with scroll progress
  markers: false // Set to true to see markers in development
});

// Apply the resistance effect when scrolling near the trigger
ScrollTrigger.create({
  trigger: aboutMeSection,
  start: 'bottom+=100 bottom', // Resistance starts 100px after about-me section ends
  end: 'bottom+=200 bottom', // End resistance effect after 100px
  onEnter: () => {
    if (!resistanceActive) {
      resistanceActive = true; // Mark resistance as active

      // Push the scroll back slightly for the "resistance" feel
      gsap.to(window, {
        scrollTo: { y: window.scrollY - resistanceAmount },  // Push scroll back
        duration: resistanceDuration,
        ease: 'power2.out',
        onComplete: () => {
          resistanceActive = false;  // Reset resistance flag after the effect
        }
      });
    }
  },
  scrub: true // Smooth effect
});

// Apply similar resistance when scrolling back up from the contact section
ScrollTrigger.create({
  trigger: contactSection,
  start: 'top top', // Trigger when the contact section is at the top of the viewport
  end: 'top+=200 top', // Add buffer to simulate resistance on scroll back up
  onLeaveBack: () => {
    if (!resistanceActive) {
      resistanceActive = true; // Mark resistance as active
      
      // Push the scroll forward slightly for the "resistance" feel when scrolling back up
      gsap.to(window, {
        scrollTo: { y: window.scrollY + resistanceAmount },  // Push scroll forward
        duration: resistanceDuration,
        ease: 'power2.out',
        onComplete: () => {
          resistanceActive = false;  // Reset resistance flag after the effect
        }
      });
    }
  },
  scrub: true // Smooth effect
});
