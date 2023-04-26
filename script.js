// import { sobaka } from "./sobaka";

let nav = ['Home', 'About', 'Works', "Contact"]
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

let mainTitleDescription = document.querySelector(".main-title-description");
let secondWelcoming = document.getElementById('line-2')
let firstWelcoming = document.getElementById('line-1')
let scrollArrows = document.getElementById('line-3');
let myPicture = document.querySelector('.profile-pic')
let navLinks = document.querySelectorAll('.swiper-pagination-bullet')
let activeNav = document.querySelector(".swiper-pagination");
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
    mainTitleDescription.innerHTML = "</br> Software Engineer";
    mainTitleDescription.style.marginRight = "50px";
    secondWelcoming.style.fontSize = "1rem";
    // firstWelcoming.style.fontSize = "1rem"
    secondWelcoming.style.width = "50vw";

    secondWelcoming.innerText = "Please Swipe Down to see more";

    //Changing icons on window size
    navLinks.forEach((link, idx) => {
      link.innerHTML = icons[idx];
      link.style.fontSize = "x-large";
    });

  }else{
//Showing arrows with delay
    setTimeout(function(){
      scrollArrows.style.visibility = "visible";

      // console.log("here");
      
        },4700);
      //Swaping nav to text
    navLinks.forEach((link,idx)=>{
      link.innerHTML = nav[idx]
    })
  }
}

mobileView();
window.addEventListener("resize", mobileView);

let checkr = false
document.addEventListener("click", (evt)=>{
  //  navLinks[1] === evt.target || navLinks[1].firstChild === evt.target;
  

   navLinks.forEach((link)=>{
      if(link === evt.target || link.firstChild === evt.target){
        return checkr = true
      }
      
   })

  //  console.log(checkr);
   
})
checkr = false


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
  mainSwiper.allowTouchMove = false;
  mainSwiper.mousewheel = false;
}


function closeHandler(evt){
  if (evt.target == overlay || evt.target == closeButton || evt.target == navLinks){
    modal.style.display = "none";
    overlay.style.display = "none";
  }
    mainSwiper.allowTouchMove = true;
    mainSwiper.mousewheel = true;
}









//Sending Email
const btn = document.getElementById('email-form-button');
const frm = document.querySelector('#form')
const emailBox = document.querySelector('.email')

 frm.addEventListener('submit', function(event) {
  
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = "default_service";
   const templateID = "template_qrke2c8";

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      frm.reset();
      emailBox.innerHTML = "<p>Thank You For Reaching Out to Me!</p><p>I’ll Get Back to You As Soon as I Read Your Emai1</p>"
    }, (err) => {
      btn.value = 'Send Email';
      emailBox.innerHTML ="<p>Ooops...!</p><p>Seems like an error on my side, please email me <a href='mailto:mail@antonlys.com'>mail@antonlys.com</a></p>";
      alert(JSON.stringify(err));
    });
});

//animation dellay for connect page
let animText = document.querySelector(".contact-purpose")

const connectObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle("line-4", entry.isIntersecting);
  })
  console.log(entries);
  
})

connectObserver.observe(animText)














// //timeline

// const line = document.querySelector(".timeline-innerline");

// let i = 0;
// let i2 = 1;
// let target1 = document.querySelector(".timeline ul");
// let target2 = document.querySelectorAll(".timeline ul li");

// const timeline_events = document.querySelectorAll("ul li");

// function showTime(e) {
//   e.setAttribute("done", "true");
//   e.querySelector(".timeline-point").style.background = "blue";
//   e.querySelector(".date").style.opacity = "100%";
//   e.querySelector("p").style.opacity = "100%";
//   e.querySelector("p").style.transform = "translateY(0px)";
// }

// function hideTime(e) {
//   e.removeAttribute("done");
//   e.querySelector(".timeline-point").style.background = "rgb(228, 228, 228)";
//   e.querySelector(".date").style.opacity = "0%";
//   e.querySelector("p").style.opacity = "0%";
//   e.querySelector("p").style.transform = "translateY(-10px)";
// }

// function slowLoop() {
//   setTimeout(function () {
//     showTime(timeline_events[i]);
//     timelineProgress(i + 1);
//     i++;
//     if (i < timeline_events.length) {
//       slowLoop();
//     }
//   }, 800);
// }

// function timelineProgress(value) {
//   let progress = `${(value / timeline_events.length) * 100}%`;
//   if (window.matchMedia("(min-width: 728px)").matches) {
//     line.style.width = progress;
//     line.style.height = "4px";
//   } else {
//     line.style.height = progress;
//     line.style.width = "4px";
//   }
// }

// let observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > 0.9) {
//         if (window.matchMedia("(min-width: 728px)").matches) {
//           slowLoop();
//         } else {
//           showTime(entry.target);
//           timelineProgress(i2);
//           i2++;
//         }
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 1, rootMargin: "0px 0px -50px 0px" }
// );

// if (window.matchMedia("(min-width: 728px)").matches) {
//   observer.observe(target1);
// } else {
//   target2.forEach((t) => {
//     observer.observe(t);
//   });
// }

// timeline_events.forEach((li, index) => {
//   li.addEventListener("click", () => {
//     if (li.getAttribute("done")) {
//       timelineProgress(index);

//       // hide all timeline events from last upto the point clicked
//       timeline_events.forEach((ev, idx) => {
//         if (idx >= index) {
//           hideTime(ev);
//         }
//       });
//     } else {
//       timelineProgress(index + 1);
//       // show all timeline events from first upto the point clicked
//       timeline_events.forEach((ev, idx) => {
//         if (idx <= index) {
//           showTime(ev);
//         }
//       });
//     }
//   });
// });

// let doit;
// window.addEventListener("resize", () => {
//   clearTimeout(doit);
//   doit = setTimeout(resizeEnd, 1200);
// });

// function resizeEnd() {
//   i = 0;
//   slowLoop();
// }
