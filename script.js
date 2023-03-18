// import { sobaka } from "./sobaka";

let nav = ['Home', 'About', 'Works', "Connect"]
let icons = ['<i class="fa-sharp fa-solid fa-house"></i>','<i class="fa-solid fa-address-card"></i>','<i class="fa-solid fa-layer-group"></i>','<i class="fa-solid fa-comments"></i>']


//Swiper
let mainSwiper = new Swiper('.parent-slider', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    allowTouchMove:true,
    effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
        renderBullet:(index, className)=>{
          return '<span class="' + className + '">' + (nav[index]) + '</span>';
        }
    }

 
}) 

let mainTitleDescription = document.querySelector(".main-title-description");
let secondWelcoming = document.getElementById('line-2')
let firstWelcoming = document.getElementById('line-1')
let scrollArrows = document.getElementById('line-3');
let myPicture = document.querySelector('.profile-pic')
let navLinks = document.querySelectorAll('.swiper-pagination-bullet')
let modal = document.querySelector(".modal");


// navLinks.forEach((link,idx)=>{
//   link.addEventListener("click",(evt)=>{
//     // evt.stopPropagation()
//     link.innerHTML = icons[idx]
//   })
// })




function mobileView() {
  if(window.innerWidth <= 1200){    
    scrollArrows.style.visibility = "hidden";   
    mainTitleDescription.innerHTML = "</br> Software Engineer"
    mainTitleDescription.style.marginRight = "50px"
    secondWelcoming.style.fontSize = "1rem" 
    // firstWelcoming.style.fontSize = "1rem"
    secondWelcoming.style.width = "50vw" 

    secondWelcoming.innerText = "Please Swipe Down to see more"
 
//Changing icons on window size
    navLinks.forEach((link,idx)=>{
        link.innerHTML = icons[idx]
        link.style.fontSize = "x-large"
      })

     
    }else{
//Showing arrows with delay
    setTimeout(function(){
      scrollArrows.style.visibility = "visible";
        },4700);
      //Swaping nav to text
    navLinks.forEach((link,idx)=>{
      link.innerHTML = nav[idx]
    })
  }
}

mobileView();
window.addEventListener("resize", mobileView);

//prevent swiping when modal is open
      if ((modal.style.display == "block")) {
        mainSwiper.allowTouchMove = false;
        mainSwiper.mousewheel = false;
      }
//Modal


let overlay = document.querySelector(".overlay")

let closeButton = document.querySelector(".close")
let openButton = document.querySelector(".open")

openButton.addEventListener("click", openHandler)
closeButton.addEventListener("click", closeHandler)
overlay.addEventListener("click",closeHandler)

function openHandler(evt){

  modal.style.display = "block"
  overlay.style.display = "block"
}

  function closeHandler(evt){
    if (evt.target == overlay || evt.target == closeButton || evt.target == navLinks){
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  }







  










//Sending Email
const btn = document.getElementById('email-form-button');
const frm = document.querySelector('#form')
const emailBox = document.querySelector('.email')

 frm.addEventListener('submit', function(event) {
  
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ryfc24s';
   const templateID = 'template_g9yxsbq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      frm.reset();
      emailBox.innerHTML = "<p>Thank You For Reaching Out to Me!</p><p>I’ll Get Back to You As Soon as I Read Your Emai1</p>"
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});