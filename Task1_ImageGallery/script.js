// Select the image container and navigation buttons
const imageContainer = document.querySelector(".image-container");
const leftButton = document.querySelector(".arrows .i_container:first-child i");
const rightButton = document.querySelector(".arrows .i_container:last-child i");

// Function to scroll the image container left
leftButton.addEventListener("click", () => {
  imageContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

// Function to scroll the image container right
rightButton.addEventListener("click", () => {
  imageContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
