
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#2e86c1';
        header.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        header.style.backgroundColor = 'cyan';
    }
});
// Menambahkan event klik ke link untuk smooth scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const typedTextSpan = document.querySelector(".auto-type");

const textArray = ["Batman", "Darma", "Freelancer", "Boboiboy"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  setTimeout(type, newTextDelay + 250);
});
