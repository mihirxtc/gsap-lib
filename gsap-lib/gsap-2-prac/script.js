let tl = gsap.timeline()

tl.from("#navbar h1", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5
})

tl.from("#navbar h4", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
})

tl.from(".hero-text", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2
})

gsap.to("#page2 h1", {
    transform: "translateX(-155%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        scrub: 2,
        pin: true
    }
})