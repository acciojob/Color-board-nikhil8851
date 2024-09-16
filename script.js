const container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    const hoverColor = getRandomColor(); // Generate random hover color
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = hoverColor;
        setTimeout(() => {
            square.style.backgroundColor = ''; // Reset to original color
        }, 1000); // Remove hovered color after 1 second
    });
    container.appendChild(square);
}

// Function to generate random color
function getRandomColor() {
    const colors = ['blue', 'black', 'yellow', 'tomato', 'green','red','orange','gray']; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
}
