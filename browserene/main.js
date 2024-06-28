window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scroll", window.scrollY > 0);
});

// JavaScript for image zooming
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("zoomed")) {
      item.classList.remove("zoomed");
    } else {
      item.classList.add("zoomed");
    }
  });
});

let currentSlide = 1;

function changeSlide(n) {
  showSlides((currentSlide += n));
}

function showSlides(n) {
  const testimonials = document.querySelectorAll(".testimonial");
  if (n > testimonials.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = testimonials.length;
  }
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });
  testimonials[currentSlide - 1].style.display = "block";
}

// Show the first slide initially
showSlides(currentSlide);

function toggleZoom(element) {
  element.classList.toggle("zoomed");
}

// JavaScript for header color change on scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor =
      "#fff"; /* Change to grey when scrolling down */
  } else {
    header.style.backgroundColor =
      "#f4f4f4"; /* Change back to black when at the top */
  }
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
