// ===============================
// Current Year
// ===============================
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var el = document.querySelector("#displayYear");
  if (el) el.innerHTML = currentYear;
}
getYear();


// ===============================
// TESTIMONIAL CAROUSEL (ONLY ONE INIT)
// ===============================
$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
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
});


// ===============================
// Google Map
// ===============================
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18
  };
  new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
