gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".fade-in").forEach(elem => {
  gsap.from(elem, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});