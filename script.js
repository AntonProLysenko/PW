let nav = ['Home', 'About', 'Works', "Connect"]

let icons = ['<i class="fa-sharp fa-solid fa-house"></i>','<i class="fa-solid fa-address-card"></i>','<i class="fa-solid fa-layer-group"></i>','<i class="fa-regular fa-comments"></i>']



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
          return '<span id = "smth" class="' + className + '">' + (nav[index]) + '</span>';
        }
    }

 
}) 

let navLinks = document.querySelectorAll(".swiper-pagination-bullet")

navLinks.forEach((link,idx)=>{
  link.addEventListener("click",(evt)=>{
    // evt.stopPropagation()
    link.innerHTML = icons[idx]
    console.log(evt.target);
  })
})



// let activeNav = document.querySelector(".swiper-pagination-bullet-active")

// // 
// activeNav.innerHTML = icons[0]
// console.log( activeNav)
// activeNav.innerHtml='<i class="fa-sharp fa-solid fa-house"></i>'

// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   duration: 1200
// })



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