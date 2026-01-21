// ===============================
// Current Year
// ===============================
(function () {
  var el = document.querySelector("#displayYear");
  if (el) {
    el.innerHTML = new Date().getFullYear();
  }
})();


// ===============================
// Google Map (safe guard)
// ===============================
function myMap() {
  var mapEl = document.getElementById("googleMap");
  if (!mapEl || typeof google === "undefined") return;

  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18
  };

  new google.maps.Map(mapEl, mapProp);
}
