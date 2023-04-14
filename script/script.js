let myMinuteur;
let anim = gsap
.to(".fleche", { x: "0vmin", y:"6vmin", ease: "none", repeat:-1 });
let sprite=document.querySelector(".sprite")

let timerEnd= clearTimeout(function(){
    document.body.classList.remove('.is-scrolling');
})
myMinuteur = setTimeout(timeEnd,10000);
document.body.classList.add('.is-scrolling');

window.addEventListener('scroll',(myMinuteur) => {
    document.body.classList.add('.is-scrolling');
  
   
});