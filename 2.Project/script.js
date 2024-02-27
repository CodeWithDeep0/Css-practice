// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#wrapper'),
//     smooth: true
// });

const t1 = gsap.timeline();
t1.from("#nav",{
    y:-150,
    opacity:0,
    duration:1.5,
    stagger:0.3
})
t1.from("#intro",{
    x:1100,
    opacity:0,
    duration:0.4,
})
t1.from("#intro h1",{
    x:100,
    opacity:0,
    duration:1,
})
t1.from("#place",{
    y:100,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})
t1.from("#hero",{
    y:-100,
    opacity:0,
    duration:1.2,
})
// name
gsap.to("#name h2",{
    transform:"translateX(-215%)",
    scrollTrigger:{
        trigger:"#name",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})
//  About Section
gsap.from("#about h2",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.3,
    scrollTrigger:{
        trigger:"#about",
        top:"top -20%",
        scroller:"body",
    }
})
gsap.from("#about-2 h3",{
    y:-100,
    opacity:0,
    duration:1.8,
    delay:0.3,
    scrollTrigger:{
        trigger:"#about",
        top:"top -20%",
        scroller:"body",
    }
})
gsap.from("#icons",{
    y:100,
    opacity:0,
    duration:1.8,
    delay:0.3,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#about",
        top:"top -20%",
        scroller:"body",
    }
})
// Work Section
gsap.from("#work1 h3 ",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.6,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
    }
})

gsap.from("#work1 i",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.6,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
    }
})

gsap.from(".elem h4",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.9,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
    }
})

gsap.from(".elem p",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.9,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
    }
})
// Deatils Section
gsap.from("#img1",{
    y:-100,
    duration:4,
    opacity:0,
    scrollTrigger:{
        trigger:".mwrk",
        scroller:"body",
    }
})
gsap.from(".dleft h1",{
    x:-100,
    duration:2,
    delay:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
    }
})
gsap.from(".dright h2",{
    x:-100,
    duration:2,
    delay:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
    }
})
gsap.from(".dright, .btn",{
    y:100,
    duration:2,
    delay:0.4,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
    }
})
gsap.from("#img2",{
    y:-100,
    duration:4,
    opacity:0,
    scrollTrigger:{
        trigger:".dd1",
        scroller:"body",
    }
})
gsap.from(".left2",{
    x:-100,
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".dd1",
        scroller:"body",
    }
})
gsap.from(".right2",{
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:".dd1",
        scroller:"body"
    },
})
gsap.from(".btn2",{
    y:100,
    duration:2,
    delay:0.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:".dd1",
        scroller:"body",
    }
})

gsap.from("#img3",{
    y:-100,
    duration:4,
    opacity:0,
    scrollTrigger:{
        trigger:".dd2",
        scroller:"body",
    }
})
gsap.from(".left2",{
    x:-100,
    duration:2,
    delay:0.6,
    scrollTrigger:{
        trigger:".dd2",
        scroller:"body",
    }
})
gsap.from(".right3",{
    duration:2,
    delay:0.6,
    scrollTrigger:{
        trigger:".dd2",
        scroller:"body"
    },
})
gsap.from(".btn3",{
    y:100,
    duration:2,
    delay:0.6,
    stagger:0.8,
    scrollTrigger:{
        trigger:".dd2",
        scroller:"body",
    }
})
//  Clients Section
gsap.from("#cwork1 h3 ",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.6,
    scrollTrigger:{
        trigger:".dd3",
        scroller:"body",
    }
})

gsap.from("#cwork1 i",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.6,
    scrollTrigger:{
        trigger:".dd3",
        scroller:"body",
    }
})


gsap.from(".elem2 h4",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.9,
    scrollTrigger:{
        trigger:".dd3",
        scroller:"body",
    }
})
gsap.from(".cinfo h3",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.9,
    scrollTrigger:{
        trigger:".dd3",
        scroller:"body",
    }
})
gsap.from(".clogo",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.9,
    scrollTrigger:{
        trigger:".dd3",
        scroller:"body",
    }
})

gsap.from(".elem2 p",{
    x:100,
    opacity:0,
    duration:1.8,
    delay:0.9,
    scrollTrigger:{
        trigger:".dd3",
        scroller:"body",
    }
})

// footer Section

gsap.from("#footer-header h3",{
    x:100,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".c4",
        scroller:"body",
    }
})
gsap.from("#footer-header h1",{
    x:-200,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".c4",
        scroller:"body",
    }
})
gsap.from("#footer-header button",{
    x:100,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".c4",
        scroller:"body",
    }
})

gsap.from(".link",{
    x:100,
    opacity:0,
    duration:2,
    delay:0.7,
    stagger:0.8,
    scrollTrigger:{
        trigger:"#footer-header button",
        scroller:"body",
    }
})
gsap.from("#footerbuttom",{
    y:200,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#footer-header button",
        scroller:"body",
    }
})
