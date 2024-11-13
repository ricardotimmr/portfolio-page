// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Select the keep scrolling section and project section
const keepScrollingSection = document.querySelector('.keep-scrolling-section');
const projectSection = document.querySelector('.project-section');

// Use ScrollTrigger to show/hide the keep scrolling message based on the project section visibility
ScrollTrigger.create({
  trigger: projectSection,
  start: 'top center+=100', // Message will appear 100px after the top of the project section reaches the center of the viewport
  onEnter: () => {
    // When entering the middle of the project section, show the "keep scrolling" message
    gsap.to(keepScrollingSection, { opacity: 1, visibility: 'visible', duration: 0.5 });
  },
  onLeave: () => {
    // When leaving the middle of the project section, hide the "keep scrolling" message
    gsap.to(keepScrollingSection, { opacity: 0, visibility: 'hidden', duration: 0.5 });
  },
  onEnterBack: () => {
    // When re-entering the middle of the project section, show the "keep scrolling" message
    gsap.to(keepScrollingSection, { opacity: 1, visibility: 'visible', duration: 0.5 });
  },
  onLeaveBack: () => {
    // When leaving the middle of the project section while scrolling back up, hide the "keep scrolling" message
    gsap.to(keepScrollingSection, { opacity: 0, visibility: 'hidden', duration: 0.5 });
  }
});
