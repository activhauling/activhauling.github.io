// ==============================
// Display current year in footer
// ==============================
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var yearEl = document.querySelector("#displayYear");
    if (yearEl) {
        yearEl.innerHTML = currentYear;
    }
}

getYear();


// ==============================
// Generic Owl Carousel
// (EXCLUDES testimonials)
// ==============================
$(".owl-carousel").not(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});


// ==============================
// Continuous Testimonial Carousel
// ==============================
$(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 0,          // no pauses
    autoplaySpeed: 6000,         // constant speed
    smartSpeed: 6000,
    slideTransition: "linear",   // smooth continuous motion
    dots: false,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


// ==============================
// Google Map
// ==============================
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18
    };

    var mapEl = document.getElementById("googleMap");
    if (mapEl) {
        new google.maps.Map(mapEl, mapProp);
    }
}
