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
    nav: true,
    autoplay: true,
    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
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

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/* =========================================
   Scroll Reveal Animations (Premium Polish)
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(function (el) {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  // Run on load
  revealOnScroll();

  // Run on scroll
  window.addEventListener("scroll", revealOnScroll);
});

/* =========================================
   Simulated Social Proof (Homepage Only)
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {


  const cities = [
    "Atlanta, GA",
    "Dallas, TX",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Los Angeles, CA",
    "Newark, NJ",
    "Columbus, OH"
  ];

  const counts = ["7+", "9+", "12+", "15+", "18+"];

  const toast = document.getElementById("socialProof");
  const text = document.getElementById("socialProofText");

  if (!toast || !text) return;

  function showSocialProof() {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const count = counts[Math.floor(Math.random() * counts.length)];

    text.innerText = `${count} people from ${city} are viewing this page`;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 6000);
  }

  // Delay first appearance
  setTimeout(showSocialProof, 3500);

  // Repeat occasionally (not annoying)
  setInterval(showSocialProof, 45000);
});
