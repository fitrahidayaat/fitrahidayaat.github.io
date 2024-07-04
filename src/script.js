gsap.from("#name", { y: -50, duration: 1 });

gsap.from("#about-description", {y: 50, duration: 1});

gsap.from("#about-image", {x: 150, duration: 1});

// GSAP Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("#algorithms-visualizer", {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#algorithms-visualizer",
        start: "top 80%", // Trigger animation when top of element is 80% in view
        end: "bottom 20%", // Trigger animation when bottom of element is 20% out of view
        toggleActions: "play none none reverse", // How to toggle animation play and reverse
    }
});

gsap.from("#genius", {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#genius",
        start: "top 80%", // Trigger animation when top of element is 80% in view
        end: "bottom 20%", // Trigger animation when bottom of element is 20% out of view
        toggleActions: "play none none reverse", // How to toggle animation play and reverse
    }
});