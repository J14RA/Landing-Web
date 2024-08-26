var swiper1 = new Swiper('.swiper1', {
    loop: true, // Enable looping through slides
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    pagination: {
        el: '.swiper-pagination1', // Pagination element
        clickable: true, // Make pagination bullets clickable
    },
    slidesPerView: 3, // Adjust based on the number of slides to show at once
    spaceBetween: 20, // Space between slides
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


var swiper2 = new Swiper('.swiper2', {
    loop: true, // Enable looping through slides
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2', // Pagination element
        clickable: true, // Make pagination bullets clickable
    },
    slidesPerView: 4, // Adjust based on the number of slides to show at once
    spaceBetween: 20, // Space between slides
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
