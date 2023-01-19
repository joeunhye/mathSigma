gsap.registerPlugin(ScrollTrigger);

//Section Gsap Common Control
const anySectionEls = gsap.utils.toArray('section');
anySectionEls.forEach((el,i)=>{
    ScrollTrigger.create({
        trigger:el,
        toggleClass:'active',
        start:"top 90%",
        end:"bottom 10%",
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
gsap.timeline({
	scrollTrigger: {
		trigger: ".sec04",
		start: "center center",
		end: "bottom top",
		scrub: 1,
		pin: true,
	},
})
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

// const anim5 = gsap.to(".sec05 .box", {
// 	y: -100,
// 	rotation: 360,
// 	duration: 1,
// 	stagger: 0.25,
// });

// ScrollTrigger.create({
// 	trigger: ".sec05",
// 	animation: anim5,
// 	toggleActions: "restart pause restart pause",
// 	// markers: true,
// });



// gsap.to(".cont-title2", {y: -60, opacity:1, duration: 1});
// gsap.to('.sec02 .cont-title3', {
//     y: -60,
//     opacity:1, 
//     duration: 1,
//     // rotation: 360,
//     scrollTrigger: {
//         trigger: '.cont-title3',
//         start: '0 70%',
//         end: '100% 0',
//         toggleClass: 'opacity',
//         toggleActions: "restart none reverse none",
//         markers: true,
//     }
// })

// gsap.utils.toArray("section").forEach(section => {
//     gsap.from(section.querySelectorAll("i, h3, p"), {
//       scrollTrigger: section,
//       autoAlpha: 0,
//       y: 25,
//       duration: 0.75,
//       stagger: 0.25
//     });
// });

// gsap.from('.line-1', {
//     scrollTrigger: {
//         trigger: '.line-1',
//         scrub: true,
//         start: 'top bottom',
//         end: 'top top',
//         //markers: true
//     },
//     scaleX: 0,
//     transformOrigin: "left center", 
//     ease: "none"
// })

// gsap.to(".sigma-items li", {duration: 1, y: -260, stagger: 1.5});

// gsap.from('.sigma-items li', {
//     scrollTrigger: {
//         y: -260,
//         duration: 1,
//         stagger: 1.5,
//         trigger: '.sigma-items li',
//         // scrub: true,
//         start: 'top bottom',
//         end: 'top top',
//         //markers: true
//     },
//     scaleX: 0,
//     transformOrigin: "left center", 
//     ease: "none"
// })

// gsap.to('.sigma-items li', {
//     y: -60,
//     autoAlpha: 1,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: '.sigma-items li',
//         toggleActions: "restart pause resume pause",
//         start: 'top bottom',
//         end: 'top top',
//         // start: '0 70%',
//         // end: '100% 0',
//         // scrub: true,
//         markers: true,
//     },
// })