import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

function init() {

    if (typeof Swiper === 'function') {
        var swiper = new Swiper(".carousel", {
          centeredSlides: true,
          slidesPerView: 3,
          spaceBetween: 0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            821: {
              slidesPerView: 3
            }
          }
        });
    };
}

init();

// var meta = document.createElement('meta');
// meta.httpEquiv = "X-UA-Compatible";
// meta.content = "IE=edge";
// document.head.appendChild(meta);