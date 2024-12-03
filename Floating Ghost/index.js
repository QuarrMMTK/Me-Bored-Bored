 // Get the ghost element
 const ghost = document.querySelector('.ghost');

 // Store the last mouse position
 let lastMouseX = 0;

 // Timeout ID for resetting rotation
 let resetTimeout;

 // Add a mousemove event listener
 document.addEventListener('mousemove', (event) => {
     // Get the mouse's X and Y coordinates
     const mouseX = event.clientX;
     const mouseY = event.clientY;

     // Update the ghost's position to follow the mouse
     ghost.style.left = mouseX + 'px';
     ghost.style.top = mouseY + 'px';

     // Determine the direction of movement
     const direction = mouseX > lastMouseX ? 'right' : 'left';

     // Rotate the ghost based on the direction
     if (direction === 'right') {
         ghost.style.transform = 'rotate(10deg)';
     } else {
         ghost.style.transform = 'rotate(-10deg)';
     }

     // Clear the previous timeout to reset rotation
     clearTimeout(resetTimeout);

     // Update the lastMouseX position
     lastMouseX = mouseX;

     // Set a timeout to reset the rotation after 200ms of no movement
     resetTimeout = setTimeout(() => {
         ghost.style.transform = 'rotate(0deg)';
     }, 200); // Reset after 200ms of no movement
 });

 // Add smooth reset after mouse leaves
 document.addEventListener('mouseleave', () => {
     ghost.style.transform = 'rotate(0deg)';
 }, 200);