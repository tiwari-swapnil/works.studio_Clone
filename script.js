var tl = gsap.timeline();

tl.to(".yellow-div1",{
    y:"-100%",
    duration:.7,
    delay:.5,
    ease:"expo.out"
})
tl.from(".yellow-div2",{
    y:"100%",
    duration:.7,
    delay:.6,
    ease:"expo.out"
}, "anim")
tl.to(".loader h1",{
    delay:.6,
    duration:.1,
    color:"Black"
}, "anim")
tl.to(".loader",{
    opacity:0,
    display:"none"
})