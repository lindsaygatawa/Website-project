// Get the progress bar and progress indicator elements
const progressBar = document.querySelector(".progress");
const progressIndicator = document.querySelector(".filledProgressBar");

// Add click event listener to the progress bar

// progressIndicator.style.width = Math.floor(Math.random() * 100) + "%";

progressBar.addEventListener("click", function (event) {
  // Calculate the clicked position relative to the progress bar's width
  const clickedX = event.clientX - progressBar.offsetLeft;
  const progressBarWidth = progressBar.offsetWidth;
  const progress = clickedX / progressBarWidth;

  // Update the progress indicator width
  progressIndicator.style.width = progress * 100 + "%";
});
