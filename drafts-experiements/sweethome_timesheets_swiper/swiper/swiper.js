/*http://idangero.us/swiper/api/*/

const slider = document.querySelector('.swiper-container');
let mySwiper;

// $(document).ready(
function mobileSlider() {

    if (window.innerWidth <= 1124 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper('.swiper-container', {
            // loopAdditionalSlides: 3,
            // loopedSlides: 3,
            slidesPerGroup: 1,
            slidesPerView: 'auto',
            // watchSlidesVisibility: true,
            spaceBetween: 30,
            loop: true,
            slideClass: 'swiper-slide',
            centeredSlides: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // 8000: {
                //     slidesPerView: 3,
                //     slidesPerGroup: 3,
                //     spaceBetween: 0,
                // },
                // 1800: {
                //     slidesPerView: 3,
                //     spaceBetween: 0,
                // },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 75,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    centeredSlides: false,
                }
            }

        });

        slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 1124) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        };
    }

};

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});

// $(document).ready(function() {
//     var mySwiper = new Swiper('.swiper-container', {
//         direction: 'horizontal',
//         loop: true,
//         slidesPerView: 'auto',
//         breakpoints: {
//             360: {
//                 spaceBetween: 5
//             },
//             768: {
//                 spaceBetween: 10
//             },
//             1024: {
//                 spaceBetween: 20,
//             }
//         }
//     })

// });