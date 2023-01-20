gsap.registerPlugin(ScrollTrigger);

//Section Gsap Common Control
const anySectionEls = gsap.utils.toArray('section');
anySectionEls.forEach((el,i)=>{
    ScrollTrigger.create({
        trigger:el,
        toggleClass:'active',
        // start:"top 90%",
        // end:"bottom 10%",
        start: "center center",
		end: "bottom top",
        // markers: true,
        // scrub:true,
    });
});

//Section2 Gsap Control
const anim = gsap.to(".sec02 .cont-sub-text, .sec02 h3, .sec02 .cont-text, .sec02 .sigma-items li", {
    y: 0,
    autoAlpha: 1,
    duration: 1,
    stagger: 0.25,
});

ScrollTrigger.create({
    trigger: ".sec02",
    animation: anim,
    toggleActions: "restart pause restart pause",
    // markers: true,
});


//Section3 Gsap Control
gsap.timeline({
	scrollTrigger: {
		trigger: ".sec03",
		start: "center center",
		end: "bottom top",
		scrub: 1,
		pin: true,
	},
})
.from(".sec03 .anyText", {
    y: innerHeight * 1,
    stagger: {
        amount: 0.5,
    },
})
.from(".sec03 .img-wrap img", {
    y: innerHeight * 1,
    stagger: {
        amount: 0.5,
    },
});

//Section4 Gsap Control
const lineAny = gsap.to(".sec04 .line-bg", {
    y: -20,
    autoAlpha: 1,
    duration: 1,
});

gsap.timeline({
	scrollTrigger: {
		trigger: ".sec04",
		start: "center center",
		end: "bottom top",
		scrub: 1,
        toggleClass:'on',
		pin: true,
        
	},
})
// .from(".sec04 .line-bg", {
//     y: innerHeight * 1,
//     opacity: 0,
// })
.from(".sec04 .anyText", {
    y: innerHeight * 1,
    stagger: {
        amount: 0.5,
    },
})
.from(".sec04 .img-wrap img", {
    y: innerHeight * 1,
    stagger: {
        amount: 0.5,
    },
});

//Section5 Gsap Control
gsap.timeline({
	scrollTrigger: {
		trigger: ".sec05",
		start: "center center",
		end: "bottom top",
		scrub: 1,
		pin: true,
	},
})
.from(".sec05.dark", {
    opacity: 0,
})
.from(".sec05 .anyText", {
    y: innerHeight * 1,
    stagger: {
        amount: 0.5,
    },
})
.from(".sec05 .img-wrap", {
    y: innerHeight * 1,
});