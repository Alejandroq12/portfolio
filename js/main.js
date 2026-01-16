import './projects.js';
import './popup.js';
import './validation-form.js';
import './form-data.js';
import './matrix.js';

const hamburgerButton = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');
const closeButton = document.querySelector('.close-icon');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.add('hidden');
  mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
  hamburgerButton.classList.remove('hidden');
  mobileMenu.classList.remove('active');
});

mobileMenu.querySelectorAll('li a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerButton.classList.remove('hidden');
    mobileMenu.classList.remove('active');
  });
});

const terminalClock = document.getElementById('terminal-time');
if (terminalClock) {
  const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    terminalClock.textContent = `${hours}:${minutes}:${seconds}`;
  };

  updateClock();
  setInterval(updateClock, 1000);
}
