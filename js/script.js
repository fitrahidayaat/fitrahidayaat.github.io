gsap.from("#about-description", {x: -150, duration: 1});

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

gsap.from("#computing-lab", {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#computing-lab",
        start: "top 80%", // Trigger animation when top of element is 80% in view
        end: "bottom 20%", // Trigger animation when bottom of element is 20% out of view
        toggleActions: "play none none reverse", // How to toggle animation play and reverse
    }
});

gsap.from("#proclub", {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#proclub",
        start: "top 80%", // Trigger animation when top of element is 80% in view
        end: "bottom 20%", // Trigger animation when bottom of element is 20% out of view
        toggleActions: "play none none reverse", // How to toggle animation play and reverse
    }
});

gsap.from("#lecturer-assistant", {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#lecturer-assistant",
        start: "top 80%", // Trigger animation when top of element is 80% in view
        end: "bottom 20%", // Trigger animation when bottom of element is 20% out of view
        toggleActions: "play none none reverse", // How to toggle animation play and reverse
    }
});