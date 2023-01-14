let nav = ['Home', 'About', 'Works', "Connect"]
// var mySwiper = new Swiper ('.swiper-container', {
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
// 			clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (menu[index]) + '</span>';
//         },
//     },
//   })








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
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (nav[index]) + '</span>';
        },
    }
}) 




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