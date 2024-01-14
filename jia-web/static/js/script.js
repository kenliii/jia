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

  var picker = new Pikaday({
    field: document.getElementById("reservation-date"),
  });

  document
    .getElementById("increase-party-size")
    .addEventListener("click", function () {
      var partySizeInput = document.getElementById("party-size");
      var currentSize = parseInt(partySizeInput.value, 10);
      partySizeInput.value = currentSize + 1 <= 10 ? currentSize + 1 : 10;
    });

  document
    .getElementById("decrease-party-size")
    .addEventListener("click", function () {
      var partySizeInput = document.getElementById("party-size");
      var currentSize = parseInt(partySizeInput.value, 10);
      partySizeInput.value = currentSize - 1 >= 1 ? currentSize - 1 : 1;
    });
});
