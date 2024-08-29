function toggleDropdown() {
    const navbar = document.getElementById('navbar');
    const searchBar = document.getElementById('search-bar');
    const userActions = document.getElementById('user-actions');
    navbar.classList.toggle('active');
    searchBar.classList.toggle('active');
    userActions.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.getElementsByClassName("dropdown-btn");

    // Function to control the display of the links based on window width
    function updateLinksDisplay() {
        var links = document.querySelectorAll(".footer-col .links");
        var windowWidth = window.innerWidth;

        links.forEach(function (link) {
            if (windowWidth > 600) {
                link.style.display = "block"; // Show links if the viewport width is above 600px
            } else {
                link.style.display = "none"; // Hide links if the viewport width is 600px or below
            }
        });
    }

    // Event listener for window resize to dynamically update the display of links
    window.addEventListener("resize", updateLinksDisplay);

    // Initial call to set display based on current window width
    updateLinksDisplay();

    // Event listeners for dropdown button clicks
    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            var dropdownContent = this.nextElementSibling;

            // Toggle the display of links only if the window width is above 600px
            if (window.innerWidth > 600) {
                this.classList.toggle("active");
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            }
        });
    }
});




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

