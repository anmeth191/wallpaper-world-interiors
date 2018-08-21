//get variables from the index to apply the parallax effect

let showcase = document.querySelector('#showcase') , 
showcase__content = document.querySelector('#showcase__content') ,
spanC = document.querySelector('#span') , 
limitSpan = spanC.offsetTop + spanC.scrollHeight;



//declare to window a event listener scroll and a function called parallaxEffect

window.addEventListener('scroll' , parallaxEffect);


function parallaxEffect(e){
let scrollEvent = window.pageYOffset;

showcase.style.top = (scrollEvent/2)+'px';

if(pageYOffset > (spanC.offsetTop-1000) && pageYOffset < (limitSpan+500))
{
    spanC.style.backgroundPositionY = (scrollEvent*1.1)+'px';
}
else
{
    spanC.style.backgroundPositionY="0";
}


}
