gsap.timeline({
  scrollTrigger: {
    trigger: ".glock",
    start: "center bottom",
    end: "top top",
    scrub: true
  }
})
.to(".slide",  { yPercent: -40 }, 0)
.to(".barrel", { yPercent:  45 }, 0)
.to(".spring", { yPercent: 170 }, 0)
.to(".base",   { yPercent:  35 }, 0)