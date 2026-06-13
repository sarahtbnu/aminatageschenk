const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide(withSparkle = false) {
  slides[currentSlide].classList.remove("active");
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add("active");

  if (withSparkle) {
    sparkle();
  }
}

function restart() {
  slides[currentSlide].classList.remove("active");
  currentSlide = 0;
  slides[currentSlide].classList.add("active");
  sparkle();
}

function sparkle() {
  for (let i = 0; i < 22; i++) {
    const star = document.createElement("div");

    star.textContent = Math.random() > 0.5 ? "✨" : "🤍";
    star.classList.add("sparkle");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = Math.random() * 1.5 + 1.5 + "s";

    document.body.appendChild(star);

    setTimeout(function () {
      star.remove();
    }, 3000);
  }
}