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
    duration: 4,
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
    .to(".fleche", { x: "0vmin", y: "6vmin", ease: "none",repeat:-1 });

let header = gsap.timeline({
    scrollTrigger: {
        scrub: 0.5,
        markers: true,
           start: '0% 50%',
        end: '50% top',
        trigger: '.is-scrolling',
      }
    })

    header.to(".lucky", { x: "10vh", duration: 5, })
    header.to(".cerceau", { x: "20vh", duration: 5, }, "<")
    header.to(".cerceau", { y: "-10vh", duration: 5, ease: true, rotate: "360",  })
    header.to(".cerceau", { scaleY: 3, duration: 5, rotate: "360", y: "-40vh",  }, "<")


let chapitre1 = gsap.timeline({

scrollTrigger: {
    scrub: true,
    markers: true,
    start: '0% 70%',
    end: 'center top',
    trigger: '#chapitre1',
}
});

chapitre1.to(".personnage-fatigue", { y: `-30vw`, x: `20vh`, duration: 3,  });
chapitre1.to(".personnage-fatigue", {y: `30vw`, x: `80vw`, delay:4,  });
chapitre1.to(".tombeau", { opacity: "100%", ease: true, duration: 5,  }, ">");
chapitre1.to(".tombeau", { opacity: "50%", ease: true, duration: 5,  }, ">");




let chapitre2 = gsap.timeline({



scrollTrigger: {
    scrub: true,
    markers: true,
    start: '50% 0%',
    end: 'center bottom',
    trigger: '#chapitre2',
}
});
chapitre2.to(".chien-courone", { y: "50vh", duration: 2, delay: 3,  });
chapitre2.to(".courone", { x: "30vw", duration: 3, rotate: "360",  }, "<")

let chapitre3 = gsap.timeline({


scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'center 85%',
    end: '25% 10%',
    trigger: '#chapitre3',
}
});
chapitre3.to(".personnage", { x: "20vw", duration: 2, opacity: 0, scale: 1, delay: 1,  }, )
chapitre3.to(".personnage", { x: "100vw", opacity: 100, duration: 1, scale: 2, })

let chapitre4 = gsap.timeline({

scrollTrigger: {
    scrub: true,
    markers: true,
    start: '75% 0%',
    end: 'center top',
    trigger: '#chapitre4',
}
});

chapitre4.to(".chien-nage", { x: "10vw", duration: 7, scale: 1, }, )
chapitre4.to(".chien-nage", { x: "100vw", duration: 7, scale: 2 })

let chapitre5=gsap.timeline({
scrollTrigger: {
    scrub: true,
    markers: true,
    pin:true,
    start: '75% 0%',
    end: 'center top',
    trigger: '#chapitre5',
}
});
chapitre5.to(".roche01",{ y: "-10vh", duration: 2, ease: true,  })
chapitre5.to(".roche01",{ x: "70vw", duration: 2, ease: true,  })

let chapitre6 = gsap.timeline({
scrollTrigger: {
    scrub: true,
    markers: true,
    pin:true,
    start: 'center 50%',
    end: '25% 10%',
    trigger: '#chapitre6',
    toggleActions: 'restart complete reverse reset',
}
});
chapitre6.to(".nuage", { x: "0vw", duration: 2, ease: true,  });
chapitre6.to(".nuage", { x: "3vw", duration: 3,  }, "<")
chapitre6.to(".nuage", { x: "0vw", duration: 3,  }, "<")
chapitre6.to(".chien-paradis", { duration: 1, ease: true, rotate: "-5",  }, "<")
chapitre6.to(".chien-paradis", { x: "10vh", duration: 2, ease: true, rotate: "10",  })
chapitre6.to(".chien-paradis", { x: "30vw", duration: 1, ease: true,  })
chapitre6.to(".chien-paradis", { y: "-15vh", duration: 2, ease: true, opacity: 100,  })
chapitre6.to(".chien-paradis", { y: "-40vh", duration: 2, ease: true, opacity: 0, })
chapitre6.to(".montagne", { y: "0vh", duration: 2, ease: true,scale:1,  })
chapitre6.to(".montagne", { y: "20vh", duration: 2, ease: true,scale:0.8,  })







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