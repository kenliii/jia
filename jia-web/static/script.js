document.addEventListener("DOMContentLoaded", (event) => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
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

    if (scrollDistance <= fadeStart) {
      opacity = 1;
    } else if (scrollDistance <= fadeUntil) {
      opacity = 1 - (scrollDistance - fadeStart) / (fadeUntil - fadeStart);
    } else {
      opacity = 0;
    }

    mainContent.style.opacity = opacity;
  });
});
