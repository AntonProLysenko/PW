import projects_info from './assets/project_info.js';


//Showing Loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".arrows").style.visibility="hidden"
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("#contactPhone").href="tel:5182322116"
    document.querySelector("#contactPhoneMobile").href="tel:5182322116"
    let arrows = document.querySelector(".arrows");
     if(window.innerWidth >= 541){
        setTimeout(function () {
          arrows.style.visibility = "visible";
        }, 2900);;
      }else{
         arrows.style.visibility = "hidden";
      }
  }
};





let nav = ['Home', 'About', 'Works', "Contact"]
let icons = ['<i class="fa-sharp fa-solid fa-house"></i>','<i class="fa-solid fa-address-card"></i>','<i class="fa-solid fa-layer-group"></i>','<i class="fa-solid fa-comments"></i>']


//Swiper
let mainSwiper = new Swiper(".parent-slider", {
  direction: "vertical",
  touchStartPreventDefault: false,//for alowing mouse up/down events
  sliderPerView: 1,
  spaceBetween: 0,
  speed: 300,
  mousewheel: {
    invert: false,
    sensitivity: 0.5,
    thresholdTime: 900,//time in ms how long to apply scroll to jump to the next slide, since sensitivity doesn't work on touchPads
    // thresholdDelta:9000000000,
    // releaseOnEdges: true,
  },
  parallax: true,

  effect: "creative",
  creativeEffect: {
    prev: {
      // directions of slide dissapiring[x,y,z]
      translate: [50, -400, -300],
    },
    next: {
      // directions of appearing the slide[x,y,z]
      translate: ["-10%", "100%", 0],
    },
  },
  //navbar
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '" index="' + index + '">' + nav[index] + "</span>";
    },
  },
}); 

// mainSwiper.simulateTouch = false;
// mainSwiper.touchStartPreventDefault = false

let mainTitleDescription = document.querySelector(".main-title-description");
let secondWelcoming = document.getElementById('line-2')
let firstWelcoming = document.getElementById('line-1')
let scrollArrows = document.getElementById('line-3');
let myPicture = document.querySelector('.profile-pic')
let navLinks = document.querySelectorAll('.swiper-pagination-bullet')
let navContainer = document.querySelector(".swiper-pagination");


let dragable = document.querySelector(".profile-pic")
  let ImageDefaultTop = getComputedStyle(dragable).top;
  let ImageDefaultLeft = getComputedStyle(dragable).left;

let aboutText = document.querySelector(".about-text")
let universeSpan = document.querySelector("#universe")

//changing link to icon
// navLinks.forEach((link,idx)=>{
//   link.addEventListener("click",(evt)=>{
//     // evt.stopPropagation()
//     link.innerHTML = icons[idx]
//   })
// })



//Reseting image position when the Home navLink is not active
let imagePositionreset = new MutationObserver(function() {
        if(!navLinks[0].classList.contains('swiper-pagination-bullet-active')){
          //added timeout until animation finished
          setTimeout(function() {
            dragable.style.top = ImageDefaultTop
            dragable.style.left = ImageDefaultLeft;
          }, 250);
        }
});
imagePositionreset.observe(navLinks[0],  {attributes: true});


//Mobile views
function mobileView() {
  if(window.innerWidth <= 1200){
    scrollArrows.style.visibility = "hidden";
    mainTitleDescription.innerHTML = "</br> Software Developer";
    mainTitleDescription.style.marginRight = "50px";
    secondWelcoming.style.fontSize = "1rem";
    // firstWelcoming.style.fontSize = "1rem"
    secondWelcoming.style.width = "50vw";

    secondWelcoming.innerText = "Please Swipe Up to See More";

    //Changing icons on window size
    navLinks.forEach((link, idx) => {
      link.innerHTML = icons[idx];
      link.style.fontSize = "x-large";
    });

  }else{
//Showing arrows with delay
    
      //Swaping nav to text
    navLinks.forEach((link,idx)=>{
      link.innerHTML = nav[idx]
    })
  }
}

mobileView();
window.addEventListener("resize", mobileView);



//Draggable Picture
dragElement(dragable);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  if (document.getElementById(elmnt.idnm)) {
    // console.dir(elmnt)
    /* if present, the header is where you move the DIV from:*/
    elmnt.addEventListener("mousedown", dragMouseDown)
    elmnt.addEventListener("touchstart", dragMouseDown)
    // elmnt.ontouchstart = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    // pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag

    
  }

  function elementDrag(e) {    
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    if( e.clientX) {
      pos1 = pos3 - e.clientX;
      pos3 = e.clientX
    }else{
      // let yscroll = e.clientY
      // let posy = yscroll - e.touches[0].clientY
      // console.log('POSY', window.scrollY);
      // console.log('YSCROLL', pos2);
      // console.log('e.touches[0]', e.touches[0]);
      pos2 = pos4 - e.touches[0].clientY;
      pos4 = e.touches[0].clientY;
      // console.log('YSCROLL', pos4);
      if (pos2 <=-1.7 && pos2 >=1.7){
        pos1 = 0
        // pos3 = null
      }else{
        pos1 = pos3 - e.touches[0].clientX;
        pos3 = e.touches[0].clientX ;
      }

    }
    
    // pos2 = pos4 - e.clientY;
    // pos4 = e.clientY;
    // set the element's new position:
    // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
  }
}




//Toggling universe galaxy background
aboutText.addEventListener('mouseover', function(event) {
  universeSpan.classList.add("galaxy-font")
})
aboutText.addEventListener('mouseleave', function(event) {
  universeSpan.classList.remove("galaxy-font")
})





//Modals
let aboutOverlay = document.querySelector(".about-overlay")
let aboutModal = document.querySelector(".about-modal");
let closeButton = document.querySelectorAll(".close")
let openButton = document.querySelector(".open")

let projectOpenBtn = document.querySelectorAll(".project-open")
let projectsOverlay = document.querySelector(".projects-overlay")
let projectModal = document.querySelector(".projects-modal")



projectOpenBtn.forEach((btn)=>{
  // btn.style.display = "none"
  btn.addEventListener("click", openHandler) //openHandler)
})
//projectOpenBtn.addEventListener("click", openHandler)


closeButton.forEach((btn)=>{
  btn.addEventListener("click", closeHandler)
})

openButton.addEventListener("click", openHandler)
aboutOverlay.addEventListener("click",closeHandler)
projectsOverlay.addEventListener("click",closeHandler)

function imgFullScreenHandler(image){
  if (document.fullscreenElement){
    document.exitFullscreen()
  }else{
    // Request fullscreen mode for the image
    if (image.requestFullscreen) {
      image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) { // For Safari
      image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { // For IE11
      image.msRequestFullscreen();
    }
  }
}

function openHandler(evt){

  if (evt.target.dataset.target == "about-more"){
    aboutModal.style.display = "flex"
    aboutOverlay.style.display = "block"
  }else if(evt.target.dataset.target == "project-more"){

    console.log("open modal fired", evt.target.dataset.subtarget)
    choseDisplayContent(evt.target.dataset.subtarget)
    projectsOverlay.style.display = "block"
    projectModal.style.display = "flex"

    //Setting Screenshot slider Height depending on tile's width 
    const screenshotTile = document.querySelector(".screenshot");
    const sliderContainer = screenshotTile.querySelector(".project-screenshots-slider-container");
    const screenshotWidth = sliderContainer.getBoundingClientRect().width;

    sliderContainer.style.height = `${screenshotWidth / 1.787}px`;
    screenshotTile.style.height = `${(screenshotWidth / 1.787)}px`;
    screenshotTile.style.width = `${screenshotWidth}px`;
    // console.log(`Slider height set to ${screenshotWidth / 1.5}px`);


    //Image Full screen On Click
    const screenshotImg = sliderContainer.querySelectorAll('img'); 
    screenshotImg.forEach((image)=>{
      image.addEventListener('click', () => {
        imgFullScreenHandler(image)
    })
    image.addEventListener('touchStart', () => {
      imgFullScreenHandler(image)
  })
  });
  }
  
  mainSwiper.allowTouchMove = false;
  mainSwiper.mousewheel.disable()
  navContainer.style.visibility= "hidden"
}


function closeHandler(evt){  
  const  projectScreenshotsSlider = document.querySelector(".project-screenshots-slider");
  if (evt.target === aboutOverlay || evt.target.className === "close" || evt.target === projectsOverlay){
    projectScreenshotsSlider.scrollTo({
      left: 0,
      behavior: "instant",
    });
    aboutModal.style.display = "none";
    aboutOverlay.style.display = "none";
    projectsOverlay.style.display = "none";
    projectModal.style.display = "none";
    navContainer.style.visibility= "visible"
    mainSwiper.allowTouchMove = true;
    mainSwiper.mousewheel.enable()


  }
}

const toggleButton = document.querySelector(".toggle-button") ;
const navbarLinks = document.querySelector(".header-navigation") ;

toggleButton.addEventListener("click", toggleMobileHeader);

function toggleMobileHeader () {
  navbarLinks.classList.toggle("active-links");
  toggleButton.classList.toggle("active-navbar")
}

const projectInfonavLinks = document.querySelectorAll(".nav-item")
projectInfonavLinks.forEach((navLink)=>{
  navLink.addEventListener("click", goToTile)
})

function goToTile(evt){
  let target = evt.target.dataset.target
  let tile = document.querySelector(`.${target}`)
  //Hiding the navbar if it was opened before
  if (navbarLinks.classList.contains("active-links")){
    toggleMobileHeader()
  }
  //Parent Element
  let infoTilesContainer = document.querySelector(".tiles-wrapper");
  //Each time the scroll heighth has to be resetet to not break the slider
  infoTilesContainer.scroll(0, 0);
  let yTarget = GetScrollCoordinate(target, "tiles-wrapper")
  infoTilesContainer.scroll(0, yTarget);

  // console.log(yTarget);  
  glowUpElement(tile)

  // if(yTarget > 100){
  //   let projectHeader = document.querySelector(".project-modal-header")
  //   projectHeader.style.minWidth = "80%"
  //   projectHeader.style.minHeight = "20px"
  // }
}

function GetScrollCoordinate(targetClassName, parentClassName){
  let parentDiv = document.querySelector(`.${parentClassName}`);
  let tile = document.querySelector(`.${targetClassName}`);

  let parentInfo = parentDiv.getBoundingClientRect()
  let tileInfo =  tile.getBoundingClientRect()

  let relativePos = tileInfo.y - parentInfo.y;

  //for showing element at the middle, not on top 
  if (targetClassName !== "screenshot"){
    relativePos -= tileInfo.height/3
  }
  return relativePos
}


function glowUpElement(element){
  const boxLightUp = [
    { boxShadow: "0 0 50px 2px #edb15d", offset: 0.5}
  ];

  const GlowTiming = {
    duration: 1500,
    iterations: 1,
  };


  element.animate(boxLightUp, GlowTiming)
}











//painting underline
let skillsContainer = document.querySelector("#skills-container")
let underline = document.querySelector(".underline")
skillsContainer.addEventListener("mouseenter", ()=>{underline.style.backgroundPosition="left bottom"})
skillsContainer.addEventListener("mouseleave", ()=>{underline.style.backgroundPosition="right bottom"})




let singleSkills = document.querySelectorAll(".skill")
singleSkills.forEach((skill)=>{

  //underline element
  let skillUnderline = skill.lastElementChild.lastElementChild
  let skillText = skill.lastElementChild.firstElementChild.lastElementChild
  skill.addEventListener("mouseenter", ()=>{skillUnderline.style.backgroundPosition="left bottom"; skillText.style.color="#edb15d"})
  skill.addEventListener("mouseleave", ()=>{skillUnderline.style.backgroundPosition="right bottom"; skillText.style.color="#ffffff"})
})
















//Project Slider
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const  slider = document.querySelector(".slider");

function scrollRight(sliderElement) {
  if ((sliderElement.scrollWidth - sliderElement.clientWidth) <= sliderElement.scrollLeft) {//added -20 for more stable scrolling statement(each browser measures with in own way)
    sliderElement.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    sliderElement.scrollBy({
      left: sliderElement.clientWidth,//again aded 20 since browsers measures width on own secret conditions//issue appears in safari
      behavior: "smooth",
    });
  }
}

function scrollLeft(sliderElement) {
  sliderElement.scrollBy({
    left: -sliderElement.clientWidth,//sama thing, Safari
    behavior: "smooth",
  });
}

// Auto slider
// let timerId = setInterval(scrollRight, 7000);

// function resetTimer() {
//   clearInterval(timerId);
//   timerId = setInterval(scrollRight, 7000);
// }

// Scroll Events
slider.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft(slider);
    // resetTimer();
  }
});

slider.addEventListener("click", function (ev) {
  if (ev.target === rightArrow) {
    scrollRight(slider);
    // resetTimer();
  }
});




//Projects Modal Display 
function choseDisplayContent(target){  
  let data = projects_info.projects

  if (target == "Apartments"){
    filloutProjectModalTiles(data.apartmentWebsite)
  }else if (target == "Coinbase"){   
    filloutProjectModalTiles(data.coinbaseClone) 
  }else if (target == "Trello"){
    filloutProjectModalTiles(data.agileBoard) 
  }else if (target =="Trivia"){    
    filloutProjectModalTiles(data.triviaGame) 
  }else if (target == "Frog"){
    filloutProjectModalTiles(data.TheFrogGame) 
  }else if (target == "FlyMeToTheMoon"){
    filloutProjectModalTiles(data.FlyMeToTheMoon) 
  }   
}

function filloutProjectModalTiles(objProject){

  let navTitle = document.querySelector("#project-nav-title")
  let navCodeLink = document.querySelector("#project_nav_code")
  let overview = document.querySelector("#overview_text")
  let toolsTitle = document.querySelector("#tools-tile-list")
  let highlightTile =document.querySelector("#highlights_text")
  let screenshotSlider = document.querySelector(".project-screenshots-slider")
  let sliderInnerHtml = ""
  let toolsInnerHtml = ""
  let highlightsInnerHtml = ""

  //header
  navTitle.textContent = objProject.title
  navCodeLink.href = objProject.codeLink

  //tiles
  //overview
  overview.textContent = objProject.overview



  //highlights
  highlightsInnerHtml+="<ul>"
  objProject.highlights.forEach((highlightTitle)=>{
    const title = Object.keys(highlightTitle)[0];
    highlightsInnerHtml+=`<li class="parent-list-item">${title}</li>`
    highlightsInnerHtml+='<ul>'
    highlightTitle[title].forEach((highlight)=>{
      highlightsInnerHtml+=`<li class="child-list-item">${highlight}</li>`
      })
      highlightsInnerHtml+='</ul>'
  })

  highlightTile.innerHTML = highlightsInnerHtml



  //tools
  toolsInnerHtml+="<ul>"
  objProject.tools.forEach((toolType)=>{
    const type = Object.keys(toolType)[0];
    toolsInnerHtml+=`<li class="parent-list-item">${type}</li>`
    toolsInnerHtml+='<ul>'
      toolType[type].forEach((tool)=>{
        toolsInnerHtml+=`<li class="child-list-item">${tool}</li>`
      })
     toolsInnerHtml+='</ul>'
  })
  
  toolsInnerHtml+="</ul>"
  console.log(toolsInnerHtml)
  toolsTitle.innerHTML = toolsInnerHtml


  //Screenshots Slider
  objProject.images.forEach((imgSrc)=>{
    sliderInnerHtml+= `<div class="project-screenshots-slider__slide"> <div class="project-screenshots-slide_content"> <img src="${imgSrc}"  alt="${objProject.title} Screenshot"></div></div>`
  })
  //Adding arrows since they got deleted inside the loop
  sliderInnerHtml += '<div class="project-screenshots-left-arrow"></div> <div class="project-screenshots-right-arrow"></div> '
  screenshotSlider.innerHTML = sliderInnerHtml

  //Since regenerated arrows, they need scroll event too
  const projectScreenshotsLeftArrow = document.querySelector(".project-screenshots-left-arrow")
  const projectScreenshotsRightArrow = document.querySelector(".project-screenshots-right-arrow")
  const  projectScreenshotsSlider = document.querySelector(".project-screenshots-slider");
  
  // Scroll Events
  projectScreenshotsSlider.addEventListener("click", function (ev) {
    if (ev.target === projectScreenshotsLeftArrow) {
      scrollLeft(projectScreenshotsSlider);
    // resetTimer();
    }
  });

  projectScreenshotsSlider.addEventListener("click", function (ev) {
    if (ev.target === projectScreenshotsRightArrow) {
      scrollRight(projectScreenshotsSlider);
    // resetTimer();
    }
  });
}







//animation dellay for connect page
let animText = document.querySelectorAll(".contact-purpose")

const connectObserver2 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle("line-5", entry.isIntersecting);
     if (entry.isIntersecting) {
       connectObserver2.unobserve(entry.target);
     }
  })
})

const connectObserver1 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle("line-4", entry.isIntersecting);

    if(entry.isIntersecting){ 
      connectObserver1.unobserve(entry.target);
     
      
    }
  })
},{
  threshold:0,
})


connectObserver1.observe(animText[0])
connectObserver2.observe(animText[1])




//Sending Email
const btn = document.getElementById('email-form-button');
const frm = document.querySelector('#form')
const emailBox = document.querySelector('.email')

 frm.addEventListener('submit', function(event) {
  
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = "service_o03tfmk";
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




//Loading the whole page
// const page = document.querySelector(".parent-slider");
// const images = document.querySelectorAll("img")
// const slides = document.querySelectorAll(".swiper-slide")



// // images.forEach(img=>{
// //   img.addEventListener("load", ()=>{
// //     // page.style.visibility="visible"
// //       // alert(`slides are loaded`);
// //   })
// //   img.addEventListener("unload",()=>{
// //     alert("not loaded")
// //   })
// // })

// // const sliderContent = document.querySelectorAll(".slide_content");
// // sliderContent.forEach(slide=>{
// //   slide.addEventListener("load",()=>{
// //     alert(`slides are loaded`);
// //   })
// // })

// const salem = document.querySelector("#salem")
// const salemBg = salem.style.backgroundImage;
// // console.log(salem.style.backgroundImage);

// // console.log(images);

// // console.log(page);

// page.addEventListener("load", ()=>{
//   console.log("loaded page")
// })




 








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
