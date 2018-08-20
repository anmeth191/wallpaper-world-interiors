
//header functions animatios

let header = document.querySelector('#header');
let navbar = document.querySelector('#navbar');
//sidenav variable for sidenav active

let sidenav = document.querySelector('#sidenav'),
sidenavcontainer = document.querySelector('#sidenav-container');

//button burger for side navbar
let burger = document.querySelector('#burger');

burger.addEventListener('click',()=> {
 burger.classList.toggle('class');
 //sidenav.classList.remove('close');
 //sidenav.classList.add('open');

 if(burger.classList == 'showcase__header__navbar--burger'){
    
  
    sidenavcontainer.style.display="none";
    sidenav.classList.remove('close');
    sidenav.classList.add('close');
}
else  if(burger.classList =='showcase__header__navbar--burger class'){
    {
    sidenav.classList.remove('close');
    sidenav.classList.add('open');
    sidenavcontainer.style.display="grid";
    sidenavcontainer.style.animationName="fadeIn";
}
}
})



//story section variables
let story__content= document.querySelector('#story__content') , 
story__image = document.querySelector('#story__image'), 

//Unique section variables 
unique__content = document.querySelector('#unique__content'),
unique__image = document.querySelector('#unique__image');


//services section variables

let services = document.querySelector('#services') , 
services__flooring = document.querySelector('#services__flooring'),
services__window = document.querySelector('#services__window'),
services__wallpaper = document.querySelector('#services__wallpaper');


//span variables 

let messageCompany = document.querySelector('#messageCompany');


window.onscroll = function(){
     
    if(this.pageYOffset > 10 ){
        header.style.height="6rem"; 
        header.style.zIndex="200";     
    
    }
    else {
        header.style.height="8rem";
    }


    //our story section animations Names
    if((pageYOffset + 850)> story__content.offsetTop)
    {
        story__content.style.animationName="moveIn";
        story__image.style.animationName="fadeIn";
    }

   //unique section animations Names 
    if((this.pageYOffset + 750) > unique__content.offsetTop)
    {
       unique__image.style.animationName="fadeIn";
       unique__content.style.animationName="moveRight";

    }

    //services section animations name
     
    if((this.pageYOffset + 600) > services.offsetTop)
    {
        services__flooring.style.animationName="inUp";
        services__window.style.animationName="inUp";
        services__window.style.animationDelay="0.5s";
        services__wallpaper.style.animationName="inUp";
        services__wallpaper.style.animationDelay="1s";
        
    }


    //span section animations names

    if((this.pageYOffset + 600) > messageCompany.offsetTop){


       messageCompany.style.animationName="fadeIn";

    }
}

///////Form Contact Validations

//variables c

let name = document.querySelector('#name'),
address = document.querySelector('#address'),
phone = document.querySelector('#phone'),
email = document.querySelector('#email'),
comments = document.querySelector('#comments'),
//button


button = document.querySelector('#button_form'),//button where click validate and send the form
span = [...document.querySelectorAll('.span_form')];//message below each form field 

button.addEventListener('click' , validateForm);

function validateForm(){
//validate the name if the user in the form
if(name.value.length== 0){
    span[0].innerHTML="Name is required";
    span[0].style.color="orangered";
    span[0].classList.add('span_animation_error');

    name.style.borderLeft="7px solid orangered"}

//validate the address of the user in the form

if(address.value.length== 0){
    span[1].innerHTML="Address is required";
    span[1].style.color="orangered";
    span[1].classList.add('span_animation_error');

    address.style.borderLeft="7px solid orangered"}
    
   

//validate the phone number of the user 

if(phone.value.length == 0){
    span[2].innerHTML="Phone number is required";
    span[2].style.color="orangered";
    span[2].classList.add('span_animation_error');

     phone.style.borderLeft="7px solid orangered";}

    
//validate email field of the user 

if(email.value.length == 0){
    span[3].innerHTML="Email is required";
    span[3].style.color="orangered";
    span[3].classList.add('span_animation_error');

    email.style.borderLeft="7px solid orangered";}


//validate the comments field of the user 
if(comments.value.length == 0){
    span[4].innerHTML="Message is required";
     span[4].style.color="orangered";
     span[4].classList.add('span_animation_error');

     comments.style.borderLeft="7px solid orangered";
    }

}


function validateKeys(){


    validateKeys.prototype.nameUser = function(){
//validate name of the user keypressed
    if(name.value.length < 2 ){
        span[0].innerHTML ="At least 2 characters";
        span[0].style.color="orangered";
        span[0].style.backgroundColor="#333";
        span[0].classList.remove('span_animation_good');
        span[0].classList.add('span_animation_error');
        

        name.style.borderLeft="7px solid orangered";
    }
    
    else if(name.value.length > 30){
        span[0].innerHTML = "30 characters maximun";
        span[0].style.color="orangered";
        span[0].style.backgroundColor="#333";
        span[0].classList.remove('span_animation_good');
        span[0].classList.add('span_animation_error');
        
        name.style.borderLeft="7px solid orangered";
    }
    
    else {
        span[0].innerHTML="correct";
        span[0].style.color="#4db6ac";
        span[0].style.backgroundColor="#333";
        span[0].classList.add('span_animation_good');
         name.style.borderLeft="7px solid #4db6ac"}  
    }

    validateKeys.prototype.addressUser = function() {
//validate address of the user
if(address.value.length < 3 ){
    span[1].innerHTML ="At least 3 characters";
    span[1].style.color="orangered";
    span[1].style.backgroundColor="#333";
    span[1].classList.remove('span_animation_good');
    span[1].classList.add('span_animation_error');


    address.style.borderLeft="7px solid orangered";}
    
else if(address.value.length > 50){
    span[1].innerHTML = "50 characters maximun";
     span[1].style.color="orangered";
     span[1].classList.remove('span_animation_good');
     span[1].classList.add('span_animation_error');

     address.style.borderLeft="7px solid orangered"
    }else {
        span[1].innerHTML="correct";
        span[1].style.color="#4db6ac";
        span[1].style.backgroundColor="#333";
        span[1].classList.add('span_animation_good');


        address.style.borderLeft="7px solid #4db6ac"
    } 
    }


    //validate phone number of the user

    validateKeys.prototype.phoneUser = function(){
if(!phone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
    span[2].innerHTML="Invalid phone number";
    span[2].style.color="orangered";
    span[2].style.backgroundColor="#333";
    span[2].classList.remove('span_animation_good');
    span[2].classList.add('span_animation_error');


    phone.style.borderLeft="7px solid orangered"}

    else{span[2].innerHTML="correct";
    span[2].style.color="#4db6ac";
    span[2].style.backgroundColor="#333";
    span[2].classList.add('span_animation_good');
    phone.style.borderLeft="7px solid #4db6ac";
   }
    }
   //validate emails of the user 
   
   validateKeys.prototype.emailUser = function(){

   if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    span[3].innerHTML="Invalid email Address";
    span[3].style.color="orangered";
    span[3].style.backgroundColor="#333";
    span[3].classList.remove('span_animation_good');
    span[3].classList.add('span_animation_error');


    email.style.borderLeft="7px solid orangered";}

    else{ span[3].innerHTML="correct";
          span[3].style.color="#4db6ac";
          span[3].style.backgroundColor="#333";
          span[3].classList.add('span_animation_good');

          email.style.borderLeft="7px solid #4db6ac"
}
   }

   //validate comments of the user 
   validateKeys.prototype.commentsUser = function(){
if(comments.value.length == 0){
    span[4].innerHTML="Message is required";
     span[4].style.color="orangered";
     span[4].style.backgroundColor="#333";
     span[4].classList.remove('span_animation_good');
     span[4].classList.add('span_animation_error');


     comments.style.borderLeft="7px solid orangered";
    }else{
    span[4].innerHTML="correct";
     span[4].style.color="#4db6ac";
     span[4].style.backgroundColor="#333";
     span[4].classList.add('span_animation_good');


     comments.style.borderLeft="7px solid #4db6ac"
    }
}
}//end of the function  validateKeys

let instanceValidateKeys = new validateKeys();

name.addEventListener('keyup', instanceValidateKeys.nameUser);
address.addEventListener('keyup', instanceValidateKeys.addressUser);
phone.addEventListener('keyup', instanceValidateKeys.phoneUser);
email.addEventListener('keyup', instanceValidateKeys.emailUser);
comments.addEventListener('keyup' , instanceValidateKeys.commentsUser);

//focus field functions for every field 


name.addEventListener('focus' , focusField);
name.addEventListener('blur' , blurField);

address.addEventListener('focus' , focusField);
address.addEventListener('blur' , blurField);


phone.addEventListener('focus' , focusField);
phone.addEventListener('blur' , blurField);


email.addEventListener('focus' , focusField);
email.addEventListener('blur' , blurField);


comments.addEventListener('focus' , focusField);
comments.addEventListener('blur' , blurField);

function focusField(e){ 
    e.target.previousElementSibling.style.fontSize="1rem";
 }

function blurField(e){
   e.target.previousElementSibling.style.fontSize="1.5rem";
}