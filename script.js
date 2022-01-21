const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const headerClose = document.querySelector('.header__close');
const body = document.querySelector('body');
    burger.addEventListener('click', function() {
        menu.classList.add('active');
        disableScroll();
    })
    headerClose.addEventListener('click', function(e) {
        menu.classList.remove('active');
        addScroll();
    })
const swiperFinding = new Swiper('.finding__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1.3,
        }
    },
    navigation: {
        nextEl: '.slider__arrow--next',
        prevEl: '.slider__arrow--prev',
    },
    scrollbar: {
        el: '.slider__scrollbar',
    },
    });
const swiperCities = new Swiper('.cities__slider', {
    // Optional parameters
    direction: 'horizontal',
    autoHeight: false,
    height: 208,
    loop: false,
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.slider__arrow--next',
        prevEl: '.slider__arrow--prev',
    },
    scrollbar: {
        el: '.slider__scrollbar',
    },
    });
    

    const openEntrance = document.querySelectorAll('.entrance__open');
    const closeEntry = document.querySelectorAll('.entry__close');
    const entry = document.querySelector('.entry');
    const entryToggle = document.querySelector('.entry__toggle');
    const entryLogin = document.querySelector('.entry__login');
    const entryRegister = document.querySelector('.entry__register');

    openEntrance.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            entry.classList.toggle('active');
            disableScroll();
        })
    })
    closeEntry.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            entry.classList.remove('active');
            addScroll();
        })
    })
    entryToggle.addEventListener('click', function(e) {
        entryLogin.classList.toggle('active');
        entryRegister.classList.toggle('active');
        entryToggle.classList.toggle('active');
    })

    function disableScroll() {
        body.style.overflow = 'hidden';
    }
    function addScroll() {
        body.style.overflow = 'auto';
    }
    function test(a, b) {
        console.log(a, b)
    }