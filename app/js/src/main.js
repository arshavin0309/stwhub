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

const offsets = {
    'analytics': 85,
    'start': 215,    // 130 + 85
    'platform': 85,
    'contacts': 215  // 130 + 85
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            e.preventDefault();

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offset = offsets[targetID] || 0;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});