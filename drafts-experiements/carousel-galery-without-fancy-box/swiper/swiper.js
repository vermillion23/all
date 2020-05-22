/*http://idangero.us/swiper/api/*/


// });
$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 1,
        breakpoints: {
            360: {
                // slidesPerView: 1,
                spaceBetween: 5
            },
            768: {
                // slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                // slidesPerView: 3,
                spaceBetween: 20
            }
        }
    })

});