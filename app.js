
var animation = true;
var done = false;
if (animation && !done){

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.fromTo(".name1", { rotateY: 0}, { rotateY: 0, duration: 0.5});
tl.fromTo(".name1", { rotateY: 0}, { rotateY: 360, duration: 1});
tl.fromTo(".name2", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name3", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name4", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name5", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name6", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name7", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name8", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".name9", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
tl.fromTo(".cardBack", { opacity:1}, { opacity:0, duration: 0.1});
tl.fromTo(".cardBack", { x: "0%" }, { x: "-300%", duration: 0.001});
tl.fromTo(".introduction", {opacity:0 }, { opacity:1, duration: 0.01});
tl.fromTo("#myCanvas", {opacity:0 }, { opacity:1, duration: 0.0001});
tl.fromTo(".arrow", {opacity:0 }, { opacity:1, duration: 0.0001});
tl.fromTo("#soojinprofile", { opacity:0 }, { opacity:1,duration: 0.3});
tl.fromTo(".circle", {  y: "12%" }, { y: "0",duration: 1});
tl.fromTo(".circle", {   opacity:0 }, { opacity:1,duration: 1},"-=1");
tl.fromTo(".source", {  opacity:0 }, { opacity:1,duration: 0.3},"-=1");
tl.fromTo("#text1, #text2", {  opacity:0 }, { opacity:1,duration: 0.3},"-=0.3");
done = true;

tl.fromTo(".span1",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1});

tl.fromTo(".span2",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span3",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span4",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span5",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span6",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span7",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span8",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");

tl.fromTo(".span9",{yPercent:-30, ease:Power2.easeInOut}, {yPercent:0, ease:Power2.easeInOut, duration: 1},"-=0.9");
};



const t4 = gsap.timeline({ defaults: { ease: "power1.out" } });
t4.fromTo(".ima1", { rotateY: 0}, { rotateY: 0, duration: 0.5});
t4.fromTo(".ima1", { rotateY: 0}, { rotateY: 360, duration: 1});
t4.fromTo(".ima2", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
t4.fromTo(".ima3", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
t4.fromTo(".ima4", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
t4.fromTo(".ima5", { rotateY: 0}, { rotateY: 360, dusration: 1},"-=0.95");
t4.fromTo(".ima6", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
t4.fromTo(".ima7", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
t4.fromTo(".ima8", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");
t4.fromTo(".ima9", { rotateY: 0}, { rotateY: 360, duration: 1},"-=0.95");




const t2 = gsap.timeline({ defaults: { ease: "power1.out" } });

t2.fromTo(".soojin", {  y: "-40%" }, { y: "0",ease:Power2.easeInOut,duration: 1});
t2.fromTo(".soojin", { opacity:0.6}, {  opacity: 1,ease:Power2.easeInOut,duration: 1},"-=1");




const t3 = gsap.timeline({ defaults: { ease: "power1.out" } });

t3.fromTo(".projectimg", { y:"-10%", opacity:0}, { y:"0%", opacity:1, ease:Power2.easeInOut,duration: 1});
t3.fromTo(".yellowimg", {opacity:0}, {opacity:1, ease:Power2.easeInOut,duration: 1});



const t0 = gsap.timeline({ defaults: { ease: "power1.out" } });

t0.fromTo(".soojinlogo", {  opacity:0}, { opacity: 1,ease:Power2.easeInOut,duration: 1});
t0.fromTo(".soojinlogo", {  y: "-50%" }, { y: "-5%",ease:Power2.easeInOut,duration: 2},"-0.5");
t0.fromTo(".soojinlogo", {   opacity:1}, { opacity: 0,ease:Power2.easeInOut,duration: 1});
t0.fromTo(".about", { opacity:0}, {  opacity: 1,ease:Power2.easeInOut,duration: 1});




function name1() {
  document.getElementById("text2").innerHTML = "also a playful person specializing in having fun, creating delightful experiences, and sharing with others."
}

function name2() {
  document.getElementById("text2").innerHTML = "An Interactive designer/developer specializing in providing technology-powered design solutions to complex problems."
}

var element = document.querySelector('h1');


element.addEventListener('mouseover', onMouseOver);



function onMouseOver(event) {
    var trg = event.target;

    if(trg.tagName.toLowerCase() === 'span') {


        var tl = new TimelineLite();
        
        tl.to(trg, 1, {yPercent:-30, ease:Power2.easeInOut});
        tl.to(trg, 1, {yPercent:0, ease:Power2.easeInOut});
    }
}

