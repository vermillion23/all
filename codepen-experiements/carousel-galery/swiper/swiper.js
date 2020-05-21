$(function() {

    var mySwiper = new Swiper('.carousel-gallery .swiper-container', {

        // effect: 'slide',
        // speed: 900,
        slidesPerView: 3,
        spaceBetween: 10,
        // simulateTouch: true,
        // height: 640,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    /*http://idangero.us/swiper/api/*/


});