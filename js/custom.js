// ===============================
// Current Year
// ===============================
function getYear() {
  var el = document.querySelector("#displayYear");
  if (el) {
    el.innerHTML = new Date().getFullYear();
  }
}
getYear();


// ===============================
// Initialize Testimonials AFTER full load
// ===============================
window.addEventListener("load", function () {
  var $carousel = $(".testimonial-carousel");

  if ($carousel.length) {
    $carousel.owlCarousel({
      loop: true,
      margin: 25,
      autoplay: true,
      autoplayTimeout: 0,
      autoplaySpeed: 6000,
      smartSpeed: 6000,
      slideTransition: "linear",
      dots: false,
      nav: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      freeDrag: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 3 }
      }
    });
  } else {
    console.warn("testimonial-carousel not found in DOM");
  }
});


// ===============================
// Google Map
// ===============================
function myMap() {
  var mapEl = document.getElementById("googleMap");
  if (!mapEl) return;

  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18
  };

  new google.maps.Map(mapEl, mapProp);
}
