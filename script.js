const slides = document.querySelectorAll(".slide");
const nextButtons = document.querySelectorAll("[data-next]");
const restartButton = document.getElementById("restartButton");
const heartButton = document.getElementById("heartButton");
const finalBlessing = document.getElementById("finalBlessing");

let currentSlide = 0;
let surpriseOpened = false;

nextButtons.forEach(function (button) {
  button.addEventListener("click", nextSlide);
});

restartButton.addEventListener("click", function () {
  showSlide(0);
});

heartButton.addEventListener("click", function () {
  if (!surpriseOpened) {
    finalBlessing.textContent =
      "Möge Allah euch in dieser Welt zusammenführen und euch im höchsten Paradies wieder vereinen. Āmīn.";
    createSoftHearts();
    heartButton.textContent = "Āmīn 🤍";
    surpriseOpened = true;
  } else {
    createSoftHearts();
  }
});

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
}

function createSoftHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = i % 3 === 0 ? "✨" : "🤍";
    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3.2 + "s";
    heart.style.fontSize = Math.random() * 12 + 16 + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 5500);
  }
}
