import projects from './projects.js';

const popupContainer = document.querySelector('#popup-container');
const bodyEl = document.querySelector('body');

const popupTemplate = `
  <div class="popup">
    <button class="popup-close">
      <img src="./assets/images/icons/x2.png" alt="Close">
    </button>
    <h2 class="popup-header"></h2>
    <img class="popup-image" alt="">
    <p class="popup-description"></p>
    <ul class="popup-technologies"></ul>
    <div class="popup-buttons">
      <a class="button popup-button live-link" target="_blank" rel="noopener noreferrer">
        See Live <img src="assets/images/icons/live3.png" alt="Live Link Logo" class="popup-link-logo">
      </a>
      <a class="button popup-button source-link" target="_blank" rel="noopener noreferrer">
        See Source <img src="assets/images/icons/github.png" alt="Source Link Logo" class="popup-link-logo">
      </a>
    </div>
  </div>
`;

popupContainer.innerHTML = popupTemplate;
popupContainer.style.display = 'none';

const closeButton = document.querySelector('.popup-close');
const header = document.querySelector('.popup-header');
const image = document.querySelector('.popup-image');
const description = document.querySelector('.popup-description');
const technologiesList = document.querySelector('.popup-technologies');
const liveLinkButton = document.querySelector('.live-link');
const sourceLinkButton = document.querySelector('.source-link');

closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
  bodyEl.classList.remove('popup-open');
});

function updatePopup(project) {
  header.textContent = project.name;
  image.src = project.image;
  image.alt = project.name;
  description.textContent = project.description;

  technologiesList.innerHTML = project.technologies.map((tech) => `<li>${tech}</li>`).join('');

  liveLinkButton.href = project.liveLink;
  sourceLinkButton.href = project.sourceLink;

  popupContainer.style.display = 'block';
  bodyEl.classList.add('popup-open');
}

const seeProjectButtons = document.querySelectorAll('.button-card');
seeProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updatePopup(projects[index]);
  });
});
