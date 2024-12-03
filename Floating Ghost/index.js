// Get the ghost element
const ghost = document.querySelector('.ghost');

// Function to generate a random position within the viewport
function getRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (windowWidth - 100)); // Subtract ghost size to stay in bounds
    const randomY = Math.floor(Math.random() * (windowHeight - 100));
    
    return { x: randomX, y: randomY };
}

// Function to move the ghost randomly
function moveGhost() {
    const { x, y } = getRandomPosition();
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;

    // Apply random rotation for a fun effect
    const randomRotation = Math.random() > 0.5 ? 'rotate(10deg)' : 'rotate(-10deg)';
    ghost.style.transform = randomRotation;

    // Schedule the next random movement
    setTimeout(moveGhost, 2700); // Moves every 1 second
}

// Start moving the ghost
moveGhost();

// Handle window resize to adjust the bounds
window.addEventListener('resize', () => {
    moveGhost();
});
