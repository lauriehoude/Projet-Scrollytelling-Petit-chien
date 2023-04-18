let fleche = gsap
    .to(".fleche", { x: "0vmin", y: "6vmin", ease: "none", repeat: -1 });

let chapitre1 = gsap.timeline();
chapitre1.to(".personnage-fatigue", { y: `-30vh`, x: `20vh`, duration: 3 });
chapitre1.to(".personnage-fatigue", { x: `100vw`, duration: 4 });
chapitre1.to(".tombeau", { opacity: "0%", duration: 2 }, ">");

let chapitre2 = gsap.timeline();
chapitre2.to(".chien-courone", { y: "90vh", duration: 2, delay: 3 });
chapitre2.to(".courone", { x: "30vw", duration: 3, rotate: "360" }, "<")

let chapitre3 = gsap.timeline();
chapitre3.to(".personnage", { x: "20vw", duration: 2, opacity: 0, scale: 1, delay: 6 }, )
chapitre3.to(".personnage", { x: "100vw", opacity: 100, duration: 1, scale: 2 })

let chapitre4 = gsap.timeline();
chapitre4.to(".chien-nage", { x: "10vw", duration: 2, scale: 1, delay: 8 }, )
chapitre4.to(".chien-nage", { x: "100vw", duration: 1, scale: 2, })

let chapitre6 = gsap.fromTo(".nuage", { x: "20vw", duration: 2 });
chapitre6.to(".nuage", { x: "40vw", duration: 3, rotate: "360" })






let myMinuteur;
let anim = gsap
    .to(".fleche", { x: "0vmin", y: "6vmin", ease: "none", repeat: -1 });
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