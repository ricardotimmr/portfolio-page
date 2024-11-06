document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector(".project-section");
    const projectsContainer = document.querySelector(".projects-container");

    // Set starting position and scroll width dynamically on load and resize
    function setScrollBoundaries() {
        const sectionTop = projectSection.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = projectSection.clientHeight;
        const horizontalScrollWidth = projectsContainer.scrollWidth - window.innerWidth;

        return {
            sectionTop,
            scrollEnd: sectionTop + sectionHeight + horizontalScrollWidth
        };
    }

    let { sectionTop, scrollEnd } = setScrollBoundaries();

    // Recalculate boundaries on window resize
    window.addEventListener("resize", () => {
        ({ sectionTop, scrollEnd } = setScrollBoundaries());
    });

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Only scroll horizontally if within the project section scroll range
        if (currentScroll >= sectionTop && currentScroll <= scrollEnd) {
            projectSection.style.position = "sticky";
            projectSection.style.top = "0";

            // Map vertical scroll to horizontal scroll
            const horizontalScroll = currentScroll - sectionTop;
            projectsContainer.style.transform = `translateX(-${horizontalScroll}px)`;
        } else {
            // Reset to initial position when outside the section's range
            projectSection.style.position = "relative";
            projectsContainer.style.transform = "translateX(0)";
        }
    });
});