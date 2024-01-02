document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  window.addEventListener("scroll", function () {
    var mainContent = document.querySelector(".main-content");
    var scrollDistance = window.scrollY;
    var fadeStart = 100; // Start fade at 100px scroll distance
    var fadeUntil = 500; // End fade at 500px scroll distance
    var opacity = 1;
    if (scrollDistance >= fadeStart) {
      opacity = 1 - (scrollDistance - fadeStart) / (fadeUntil - fadeStart);
    }
    opacity = Math.max(opacity, 0); // Ensure opacity is not negative
    mainContent.style.opacity = opacity;
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("is-active");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });
});
