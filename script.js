let nav = ['Home', 'About', 'Works', "Connect"]
let icons = ['<i class="fa-sharp fa-solid fa-house"></i>','<i class="fa-solid fa-address-card"></i>','<i class="fa-solid fa-layer-group"></i>','<i class="fa-solid fa-comments"></i>']


//Swiper
let mainSwiper = new Swiper('.parent-slider', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
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


let secondWelcoming = document.getElementById('line-2')
let firstWelcoming = document.getElementById('line-1')
let scroll = document.getElementById('line-3')
let myPicture = document.querySelector('.profile-pic')
let navLinks = document.querySelectorAll(".swiper-pagination-bullet")






function mobileView() {
  if(window.innerWidth <= 1200){
    scroll.style.visibility = "hidden";   
    secondWelcoming.style.fontSize = "1rem" 
    firstWelcoming.style.fontSize = "1rem"
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
      scroll.style.visibility = "visible";
        },9000);
      //Swaping nav to text
    navLinks.forEach((link,idx)=>{
      link.innerHTML = nav[idx]
    })
  }
}

mobileView();
window.addEventListener("resize", mobileView);








  










//Sending Email
const btn = document.getElementById('email-form-button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ryfc24s';
   const templateID = 'template_g9yxsbq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});