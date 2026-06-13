const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add("active");
}

function restart() {
  slides[currentSlide].classList.remove("active");
  currentSlide = 0;
  slides[currentSlide].classList.add("active");
}