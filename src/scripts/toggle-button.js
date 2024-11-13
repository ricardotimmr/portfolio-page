// Select the toggle button and body
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Add event listener to toggle grayscale mode
toggleButton.addEventListener('click', () => {
  // Toggle the 'grayscale' class on the body
  body.classList.toggle('grayscale');
  
  // Store the grayscale preference in localStorage to persist on reload
  const isGrayscale = body.classList.contains('grayscale');
  localStorage.setItem('isGrayscale', isGrayscale);
});

// Check for stored theme preference on page load
if (localStorage.getItem('isGrayscale') === 'true') {
  body.classList.add('grayscale');
}
