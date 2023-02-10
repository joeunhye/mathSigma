gsap.registerPlugin(ScrollTrigger);
const $bodyEl = document.querySelector('body');

//Section Gsap Common Control
const anySectionEls = gsap.utils.toArray("section");
anySectionEls.forEach((el, i) => {
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
});

//Section3 Gsap Control
gsap.timeline({
	scrollTrigger: {
		trigger: ".sec03",
		start: "top bottom",
		end: "top top",
		scrub: 3,
		pin: false,
		// markers: true,
	},
})
	.from(".sec03 .anyText", {
		y: innerHeight * 1,
		autoAlpha: 0,
		duration: 2,
		stagger: {
			amount: 0.7,
		},
	})
	.from(".sec03 .img-wrap img", {
		y: innerHeight * 3,
		autoAlpha: 0,
		duration: 2,
		stagger: {
			amount: 0.7,
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
		start: "top bottom",
		end: "top top",
		scrub: 3,
		pin: false,
	},
})
	// .from(".sec04 .line-bg", {
	//     y: innerHeight * 1,
	//     opacity: 0,
	// })
	.from(".sec04 .anyText", {
		y: innerHeight * 1,
		autoAlpha: 0,
		duration: 2,
		stagger: {
			amount: 0.5,
		},
	})
	.from(".sec04 .img-wrap img", {
		y: innerHeight * 3,
		duration: 1,
		stagger: {
			amount: 0.7,
		},
	});

//Section5 Gsap Control
ScrollTrigger.create({
	trigger: ".sec05",
	// markers: true,
	start: "top center",
	end: "top top",
	onEnter : function() {
		$bodyEl.classList.add('reversal')
	},
	onLeaveBack : function() {
		$bodyEl.classList.remove('reversal')
	}
});
gsap.timeline({
	scrollTrigger: {
		trigger: ".sec05",
		start: "top bottom",
		end: "top top",
		scrub: 3,
		pin: false,
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
		opacity: 0,
		y: innerHeight * 1,
	});
