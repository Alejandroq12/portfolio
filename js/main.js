import './projects.js';
import './popup.js';
import './validation-form.js';
import './form-data.js';

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

