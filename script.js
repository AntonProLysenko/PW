let mainSwiper = new Swiper('.parent-slider', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    }
}) 

new Swiper(".project-slider", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    noSwiping: false,
    pagination: '.swiper-pagination-child',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

