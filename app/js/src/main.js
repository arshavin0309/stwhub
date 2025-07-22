let mainChooseSwiper = new Swiper(".main-choose__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
        }
    }
});