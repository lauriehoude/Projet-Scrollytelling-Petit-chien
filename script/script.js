gsap.registerPlugin(ScrollTrigger);


gsap.to('.text-chapitre1', {
    scrollTrigger: {
        trigger: '.text-chapitre1',
        markers: true,
        start: 'center 35%',
        end: '75% 10%',
        toggleActions: 'restart complete reverse reset',

    },
    x: '100%',
    duration: 2,
});
gsap.to('.text-chapitre2', {
    scrollTrigger: {
        trigger: '.text-chapitre2',
        markers: true,
        start: 'center 85%',
        end: '25% 10%',
        toggleActions: 'restart complete reverse reset',
    },
    x: '100%',
    duration: 2,
});
gsap.to('.text-chapitre3', {
    scrollTrigger: {
        trigger: '.text-chapitre3',
        markers: true,
        start: 'center 85%',
        end: '25% 10%',
        toggleActions: 'restart complete reverse reset',
    },
    x: '100%',
    duration: 2,
});
gsap.to('.text-chapitre4', {
    scrollTrigger: {
        trigger: '.text-chapitre4',
        markers: true,
        start: 'center 85%',
        end: '25% 10%',
        toggleActions: 'restart complete reverse reset',
    },
    x: '100%',
    duration: 2,
});
gsap.to('.text-chapitre5', {
    scrollTrigger: {
        trigger: '.text-chapitre5',
        markers: true,
        start: 'center 85%',
        end: '25% 10%',
        toggleActions: 'restart complete reverse reset',
    },
    x: '100%',
    duration: 2,
});
gsap.to('.text-chapitre6', {
    scrollTrigger: {
        trigger: '.text-chapitre6',
        markers: true,
        start: 'center 85%',
        end: '25% 10%',
        toggleActions: 'restart complete reverse reset',
    },
    x: '100%',
    duration: 2,
});




let fleche = gsap
    .to(".fleche", { x: "0vmin", y: "6vmin", ease: "none", repeat: -1 });

let header = gsap.timeline();
scrollTrigger: {
    header.to(".lucky", { x: "10vh", duration: 1, repeat: -1 })
    header.to(".cerceau", { x: "20vh", duration: 1, repeat: -1 }, "<")
    header.to(".cerceau", { y: "-10vh", duration: 1, ease: true, rotate: "360", repeat: -1 })
    header.to(".cerceau", { scaleY: 3, duration: 2, rotate: "360", y: "-40vh", repeat: -1 }, "<")
}

let chapitre1 = gsap.timeline();
chapitre1.to(".personnage-fatigue", { y: `-30vh`, x: `20vh`, duration: 3, repeat: -1 });
chapitre1.to(".personnage-fatigue", { x: `100vw`, duration: 4, repeat: -1 });
chapitre1.to(".tombeau", { opacity: "0%", ease: true, duration: 2, repeat: -1 }, ">");

let chapitre2 = gsap.timeline();
chapitre2.to(".chien-courone", { y: "50vh", duration: 2, delay: 3, repeat: -1 });
chapitre2.to(".courone", { x: "30vw", duration: 3, rotate: "360", repeat: -1 }, "<")

let chapitre3 = gsap.timeline();
chapitre3.to(".personnage", { x: "20vw", duration: 2, opacity: 0, scale: 1, delay: 1, repeat: -1 }, )
chapitre3.to(".personnage", { x: "100vw", opacity: 100, duration: 1, scale: 2, repeat: -1 })

let chapitre4 = gsap.timeline();
chapitre4.to(".chien-nage", { x: "10vw", duration: 2, scale: 1, delay: 8, repeat: -1 }, )
chapitre4.to(".chien-nage", { x: "100vw", duration: 1, scale: 2 })

let chapitre6 = gsap.timeline()
chapitre6.to(".nuage", { x: "0vw", duration: 2, ease: true, repeat: -1 });
chapitre6.to(".nuage", { x: "3vw", duration: 3, repeat: -1 }, "<")
chapitre6.to(".nuage", { x: "0vw", duration: 3, repeat: -1 }, "<")
chapitre6.to(".chien-paradis", { duration: 1, ease: true, rotate: "-5", repeat: -1 }, "<")
chapitre6.to(".chien-paradis", { x: "10vh", duration: 2, ease: true, rotate: "10", repeat: -1 })
chapitre6.to(".chien-paradis", { x: "30vw", duration: 1, ease: true, repeat: -1 })
chapitre6.to(".chien-paradis", { y: "-15vh", duration: 2, ease: true, opacity: 100, repeat: -1 })
chapitre6.to(".chien-paradis", { y: "-40vh", duration: 2, ease: true, opacity: 0, repeat: -1 })







let myMinuteur;


let sprite = document.querySelector(".sprite")
let body = document.querySelector("body")


document.body.classList.remove('is-scrolling');

window.addEventListener('scroll', (myMinuteur) => {
    clearTimeout(myMinuteur);
    body.classList.add('is-scrolling');
    myMinuteur = setTimeout(function() {
        body.classList.remove('is-scrolling');
    }, 1000);

});