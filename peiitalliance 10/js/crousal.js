const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".imageCard");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

let currentImageIndex = 0;
const images = carouselInner.getElementsByClassName("carousel-img");
const numImages = images.length;

// Function to show the current image
function showCurrentImage() {
  carouselInner.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

// Event listener for the previous button
prevButton.addEventListener("click", function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = numImages - 1;
  }
  showCurrentImage();
});

// Event listener for the next button
nextButton.addEventListener("click", function () {
  currentImageIndex++;
  if (currentImageIndex >= numImages) {
    currentImageIndex = 0;
  }
  showCurrentImage();
});

// Show the initial image
showCurrentImage();
