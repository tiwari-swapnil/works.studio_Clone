var tl = gsap.timeline();

tl.to(".yellow-div1",{
    y:"-100%",
    duration:.7,
    delay:4,
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



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let elem = document.querySelectorAll(".elem");
let page2 = document.querySelector(".page2");

elem.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        let img = e.getAttribute("data-img");
        page2.style.background = `url(${img})`
    })
})

document.querySelector(".upper-footer h1").addEventListener("click",()=>{
    scroll.scrollTo(0);
})

document.querySelector(".ri-arrow-down-s-line").addEventListener("click",()=>{
    scroll.scrollTo(".page2");
})

window.onload = function(){
    let navright = document.querySelector(".nav-right");
    let btn = document.querySelector(".clickme");

    btn.addEventListener("click",()=>{
        navright.classList.toggle("open");
        btn.classList.toggle("rotate")
    })
}

