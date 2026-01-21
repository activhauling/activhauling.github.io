// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 0,          // KEY: no pauses
  autoplaySpeed: 8000,         // controls scroll speed
  smartSpeed: 8000,
  slideTransition: "linear",   // KEY: continuous motion
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


//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
