const banner = document.getElementById("banner");

const images = ["akita1.png", "akita2.png"];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  banner.src = images[current];
}, 500);

const img = document.getElementById("flopera");

img.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=1bsd8fFmTAo", "_blank");
});

const img2 = document.getElementById("triplebaka");

img2.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=duPJqfKiA78", "_blank");
});

const img3 = document.getElementById("nag");

img3.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=o4Gh11wjpKw", "_blank");
});