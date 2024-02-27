const tt = gsap.timeline();

tt.from("#pt",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tt.from(".title",{
    x:200,
    opacity:0,
    duration:0.7,
})
tt.from("img",{
    y:-500,
    opacity:0,
    duration:1.2,
    stagger:0.3,
})
tt.from("#msg",{
    x:100,
    opacity:0,
    duration:0.5,
})
tt.from(".pfix",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tt.from("#social",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tt.from("#centre",{
    y:100,
    opacity:0,
    duration:0.5,
})




// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#wrapper'),
//     smooth: true
// });