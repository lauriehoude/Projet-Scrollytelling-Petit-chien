/*let chientombe = document.querySelector(".personnage-fatigue")
animchientombe= gsap
.timeline()
  .fromTo((".personnage-fatigue", 
  { y: "0%"}, {
    y: "-30%",  ease: "none", duration:2,yoyo:true,
  }))
  .to((chien_tombe, {x:"50%", ease: "none", duration:2,yoyo:true,}))

*/
var tl = gsap.timeline();
tl.to(".personnage-fatigue", {y: `-30vh`,x:`20vh`, duration: 3});
tl.to(".personnage-fatigue", {x:`100vw`, duration: 4});
tl.to(".tombeau",{opacity:"0%", duration: 2},">");


let myMinuteur;
let anim = gsap
.to(".fleche", { x: "0vmin", y:"6vmin", ease: "none", repeat:-1 });
let sprite=document.querySelector(".sprite")
let body = document.querySelector("body")


document.body.classList.remove('is-scrolling');

window.addEventListener('scroll',(myMinuteur) => {
    clearTimeout(myMinuteur);
    body.classList.add('is-scrolling');
    myMinuteur = setTimeout(function(){body.classList.remove('is-scrolling');
},1000);
   
});



