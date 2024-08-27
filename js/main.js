function toggleDropdown() {
    const navbar = document.getElementById('navbar');
    const searchBar = document.getElementById('search-bar');
    const userActions = document.getElementById('user-actions');
    navbar.classList.toggle('active');
    searchBar.classList.toggle('active');
    userActions.classList.toggle('active');
}

const swiper1 = new Swiper('.swiper1', {
    loop: true,
    navigation: {
        nextEl: '.swiper1 .swiper-button-next',
        prevEl: '.swiper1 .swiper-button-prev',
    },
    pagination: {
        el: '.swiper1 .swiper-pagination',
        clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});

// Initialize the second Swiper instance
const swiper2 = new Swiper('.swiper2', {
    loop: true,
    navigation: {
        nextEl: '.swiper2 .swiper-button-next',
        prevEl: '.swiper2 .swiper-button-prev',
    },
    pagination: {
        el: '.swiper2 .swiper-pagination',
        clickable: true,
    },
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

