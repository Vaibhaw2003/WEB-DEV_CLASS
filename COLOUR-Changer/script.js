// Array of colors
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "teal", "lime", "brown"];

// Get button and color display elements
const button = document.getElementById("change-color-btn");
const colorName = document.getElementById("color-name");

// Event listener for button click
button.addEventListener("click", () => {
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change background color
    document.body.style.backgroundColor = randomColor;

    // Display current color name
    colorName.textContent = randomColor;
});
