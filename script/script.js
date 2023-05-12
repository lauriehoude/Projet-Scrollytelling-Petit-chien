gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);





/*---Animation Header---*/

let fleche = gsap.to(".fleche", {
    x: "0vmin",
    y: "6vmin",
    ease: "none",
    repeat: -1,
});

let header = gsap.timeline({
    scrollTrigger: {
        markers: true,
        start: "10% 50%",
        end: "50% top",
        trigger: "header",
        scrub: 1
    },
});

header.to(".lucky", { x: "10vh", duration: 5 });
header.to(".cerceau", { x: "20vh", duration: 5 }, "<");
header.to(".cerceau", { y: "-10vh", duration: 5, ease: true, rotate: "360" });
header.to(".cerceau", { scaleY: 3, duration: 5, rotate: "360", y: "-40vh" },
    "<"

);
header.to("h3", { scale: 5 }, "<");

/*---Animation chapitre 1---*/
let chapitre01 = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        markers: true,
        start: "center center",
        end: "center top",
        trigger: "#chapitre1",


    },
});
gsap.from(
"#cloud", {

 drawSVG: "0 50%",
duration: 10,
}

);

gsap.to("#ampoule", {

 morphSVG: "#maison",
 duration: 16,
ease: "slow",

});


gsap.to("#chapitre1", {
    backgroundPosition: "50% 100%",
    scrollTrigger: {
        trigger: "#chapitre1",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        markers: true
    }
});
gsap.to(".text-chapitre1", {
    xPercent: 200,
    ease: "none",
    scrollTrigger: {
        trigger: "#chapitre1",
        start: "center bottom",
        end: "100% top",
        scrub: 3,
    }
});
gsap.to(".nuage", {
    xPercent: 200,
    scrollTrigger: {
        trigger: "#chapitre1",
        start: "center bottom",
        end: "100% top",
        scrub: 1,
        markers: true
    }
});


chapitre01.to(".pensee", { y: `-10vw`, duration: 5 });
chapitre01.to(".pensee", { x: `50vw`, delay: 4 });


/*---Animation chapitre 2---*/

let chapitre2 = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        markers: true,
        start: "50% 0%",
        end: "center bottom",
        trigger: "#chapitre2",

    },
});
gsap.to(".text-chapitre2", {
    scrollTrigger: {
        trigger: ".text-chapitre2",
        markers: true,
        start: "center 85%",
        end: "25% 10%",
        toggleActions: "restart complete reverse reset",
    },
    x: "100%",
    duration: 2,
});


chapitre2.to(".chien-courone", { y: "50vh", duration: 2, delay: 3 });
chapitre2.to(".courone", { x: "30vw", duration: 3, rotate: "360" }, "<");


/*---Animation Chapitre 3---*/


let chapitre3 = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        markers: true,
        start: "center center",
        end: "center top",
        trigger: "#chapitre3",


    },
});
chapitre3.to(".personnage", {
    x: "5vw",
    duration: 6,
    opacity: 0,
    scale: 1,
    delay: 1,
});
chapitre3.to(".personnage", {
    x: "40vw",
    opacity: 100,
    duration: 16,
    scale: 2,

});
gsap.to(".text-chapitre3", {
    scrollTrigger: {
        trigger: ".text-chapitre3",
        markers: true,
        start: "center 85%",
        end: "25% 10%",
        toggleActions: "restart complete reverse reset",
    },
    x: "100%",
    duration: 2,
});

motionPath


gsap.to('#vent', {
motionPath: {
align: "#trace",
    path: '#trace',
start: 0,
 end: 1.25,

 },
  duration: 16,
 scale: 2,

}, )


/*---Animation chapitre 4 ---*/


let chapitre4 = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        markers: true,
        start: "50% 0%",
        end: "center top",
        trigger: "#chapitre4",
        toggleActions: "restart complete reverse reset",

    },
});

chapitre4.to(".chien-nage", { x: "10vw", duration: 7, scale: 1,  });
chapitre4.to(".chien-nage", { x: "100vw", duration: 7, scale: 2,  });


gsap.to(".text-chapitre4", {
    scrollTrigger: {
        trigger: ".text-chapitre4",
        markers: true,
        start: "center 85%",
        end: "25% 10%",
        toggleActions: "restart complete reverse reset",
    },
    x: "100%",
    duration: 2,
});

/*---Animation chapitre 5---*/

let chapitre5 = gsap.timeline({
    scrollTrigger: {

        markers: true,
        pin: true,
        start: "75% 0%",
        end: "center top",
        trigger: "#chapitre5",
        scrub: 1,
        toggleActions: "restart complete reverse reset",
    },
});
chapitre5.to(".roche01", { y: "-10vh", duration: 2, ease: true });
chapitre5.to(".roche01", { x: "70vw", duration: 2, ease: true });

gsap.to(".text-chapitre5", {
    scrollTrigger: {
        trigger: ".text-chapitre5",
        markers: true,
        start: "center 85%",
        end: "25% 10%",
        toggleActions: "restart complete reverse reset",
    },
    x: "100%",
    duration: 2,
});



/*---Animation chapitre 6---*/


let chapitre6 = gsap.timeline({
    scrollTrigger: {

        markers: true,
        pin: true,
        start: "center 50%",
        end: "25% 10%",
        trigger: "#chapitre6",
        toggleActions: "restart complete reverse reset",

    },
});
chapitre6.to(".nuage", { x: "0vw", duration: 2, ease: true, repeat: -1 });
chapitre6.to(".nuage", { x: "3vw", duration: 3, repeat: -1 }, "<");
chapitre6.to(".nuage", { x: "0vw", duration: 3, repeat: -1 }, "<")
chapitre6.to(".paradis", { x: "30vw", duration: 1, ease: true });
chapitre6.to(".paradis", {
    y: "-15vh",
    duration: 2,
    ease: true,
    opacity: 100,
    repeat: -1

}, "+=");
chapitre6.to(".paradis", {
    y: "-40vh",
    duration: 2,
    ease: true,
    opacity: 0,
    repeat: -1

});
gsap.to(".text-chapitre6", {
    scrollTrigger: {
        trigger: ".text-chapitre6",
        markers: true,
        start: "center 85%",
        end: "25% 10%",
        pin: true,
        toggleActions: "restart complete reverse reset",
    },
    x: "100%",
    duration: 2,
});

/*---animation spritesheet---*/

let myMinuteur;

let sprite = document.querySelector(".sprite");
let body = document.querySelector("body");

document.body.classList.remove("is-scrolling");

window.addEventListener("scroll", (myMinuteur) => {
    clearTimeout(myMinuteur);
    body.classList.add("is-scrolling");
    myMinuteur = setTimeout(function() {
        body.classList.remove("is-scrolling");
    }, 1000);
});