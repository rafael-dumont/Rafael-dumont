gsap.registerPlugin(ScrollTrigger);
gsap.from(".fade-in", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
