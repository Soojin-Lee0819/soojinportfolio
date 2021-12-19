const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.fromTo(".cardBack", { opacity: 0 }, { opacity:1, duration: 1 });
tl.fromTo(".cardBack", { rotateY: 0}, { rotateY: 360, duration: 2 });
tl.fromTo(".cardBack", { opacity: 1 }, { opacity: 0, duration: 0.3});
tl.fromTo(".left", {  x: "-120%" }, { x: "0",duration: 0.3});
tl.fromTo("#soojinprofile", { opacity:0 }, { opacity:1,duration: 1} );
tl.fromTo("#text1, #text2", {  opacity:0 }, { opacity:1,duration: 1}, "-=1");