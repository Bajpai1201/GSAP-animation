// gsap.to("#box", {
//     x:300,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// })

// gsap.from("#box", {
//     x:300,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// })

// GSAP INTRO DONE--------

//ADVANCE GSAP
// Initial(to) to FInal(from) stages-------
// gsap.to("#box1", {
//     x:800,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:1
// })

// gsap.from("#box2", {
//     x:700,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:1
// })

// gsap.to("#box3", {
//     x:800,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:1.5
// })

// TIMELINE TOPIC--------
// var tl = gsap.timeline()

// tl.to("#box1", {
//     x: 600,
//     rotate:360,
//     scale:0.5,
//     duration:2
// })

// tl.to("#box2", {
//     x:600,
//     rotate:360,
//     scale:0.5,
//     duration:2
// })

// tl.to("#box3", {
//     x:600,
//     rotate:360,
//     scale:0.5,
//     duration:2
// })
let tl = gsap.timeline()
tl.from("#nav h3", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

tl.from("#main h1", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})

tl.from("img", {
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})