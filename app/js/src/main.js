let mainChooseSwiper = new Swiper(".main-choose__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },

    pagination: {
        el: '.main-choose__pagination',
    },
});

let mainWhatSwiper = new Swiper(".main-what__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        393: {
            slidesPerView: 'auto',
        },
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.main-what__pagination',
    },
});

let offsets = {};

function updateOffsets() {
    if (window.innerWidth > 1200) {
        offsets = {
            'analytics': 85,
            'start': 215, // 130 + 85
            'platform': 85,
            'contacts': 215 // 130 + 85
        };
    } else {
        offsets = {
            'analytics': 52,
            'start': 132, // 130 + 52
            'platform': 52,
            'contacts': 132 // 130 + 52
        };
    }
}

// начальное определение
updateOffsets();

// пересчитываем при изменении размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateOffsets, 150);
});

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
