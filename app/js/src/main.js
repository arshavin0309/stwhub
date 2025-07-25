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

const OFFSET = 130 + 85; // сдвиг вверх на 130 пикселей

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            e.preventDefault();

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - OFFSET;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});