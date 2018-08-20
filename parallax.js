//get variables from the index to apply the parallax effect

let showcase = document.querySelector('#showcase') , 
showcase__content = document.querySelector('#showcase__content') ;

//declare to window a event listener scroll and a function called parallaxEffect

window.addEventListener('scroll' , parallaxEffect);


function parallaxEffect(e){
let scrollEvent = window.pageYOffset;
showcase.style.top = Math.round(scrollEvent/2)+'px';
}
