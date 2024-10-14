// Function to wrap each letter in a span for animation
function spanText(text) {
    const string = text.innerText;
    let spaned = '';
    for (let i = 0; string && i < string.length; i++) {
        if (string[i] === ' ') {
            spaned += ' '; // Keep spaces intact
        } else {
            spaned += `<span>${string[i]}</span>`; // Wrap each letter in a span
        }
    }
    text.innerHTML = spaned;
}

// Apply the spanText function to both "Ricardo" and "Timm"
const ricardo = document.getElementById('ricardo');
const timm = document.getElementById('timm');

spanText(ricardo);
spanText(timm);

// Animate each letter with a slight delay
const lettersRicardo = document.querySelectorAll('#ricardo span');
const lettersTimm = document.querySelectorAll('#timm span');

// Function to add delay to each letter's animation
lettersRicardo.forEach((letter, i) => {
    letter.style.animationDelay = `${i * 0.1}s`;
});

lettersTimm.forEach((letter, i) => {
    letter.style.animationDelay = `${i * 0.1 + lettersRicardo.length * 0.1}s`;
});

// Fade out the first view container after a delay
setTimeout(() => {
    document.querySelector('.first-view-container').classList.add('fade-out');
    document.body.classList.add('show-main-content'); // Show main content after fade-out
}, 4000); // Adjust this delay based on the overall animation timing