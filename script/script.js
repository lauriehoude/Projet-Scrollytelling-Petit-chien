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

