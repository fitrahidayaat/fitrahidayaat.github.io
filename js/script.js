gsap.from("#about-description", {x: -150, duration: 1});

gsap.from("#about-image", {x: 150, duration: 1});

// GSAP Animation
gsap.registerPlugin(ScrollTrigger);

const generateAnimation = (selector, fromX) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: "top 90%", // Trigger animation when top of element is 80% in view
            end: "bottom 80%", // Trigger animation when bottom of element is 20% out of view
            scrub: 1, // Smoothly scrub through animation
            // refreshPriority: 'high' // Ensure high refresh priority for smoother animation
        }
    });

    timeline.from(selector, {
        x: fromX,
        opacity: 0,
        duration: 1,
    });
}

generateAnimation("#investment-calculator", -200);
generateAnimation("#tic-tac-toe", -200);
generateAnimation("#algorithms-visualizer", -200);
generateAnimation("#genius", -200);
generateAnimation("#computing-lab", -200);
generateAnimation("#proclub", -200);
generateAnimation("#lecturer-assistant", -200);
generateAnimation("#icpc-2023", -200);
generateAnimation("#gemastik", -200);
generateAnimation("#hology", -200);
generateAnimation("#icpc-2022", -200);
generateAnimation("#shopee-code-league", -200);
generateAnimation("#innovatif", -200);
generateAnimation("#ccp", -200);