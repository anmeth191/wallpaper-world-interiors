//get variables from the index to apply the parallax effect

let showcase = document.querySelector('#showcase') , 
showcase__content = document.querySelector('#showcase__content');


//declare to window a event listener scroll and a function called parallaxEffect

window.addEventListener('scroll' , parallaxEffect);


function parallaxEffect(e){

let scrollEvent = window.pageYOffset;

showcase.style.top = (scrollEvent/2)+'px';
showcase__content.style.top = 376-(scrollEvent * 0.1)+'px';
}
