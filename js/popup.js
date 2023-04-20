/* eslint-disable linebreak-style */
import projects from './projects.js';

const popupContainer = document.querySelector('#popup-container');
const bodyEl = document.querySelector('body');

function createCloseButton() {
  const closeButton = document.createElement('button');
  closeButton.classList.add('popup-close');
  closeButton.innerHTML = '<img src="./assets/images/icons/x2.png" alt="Close">';
  return closeButton;
}

function createHeader() {
  const header = document.createElement('h2');
  header.classList.add('popup-header');
  return header;
}

function createImage() {
  const image = document.createElement('img');
  image.classList.add('popup-image');
  return image;
}

function createDescription() {
  const description = document.createElement('p');
  description.classList.add('popup-description');
  return description;
}

function createTechnologiesList() {
  const technologiesList = document.createElement('ul');
  technologiesList.classList.add('popup-technologies');
  return technologiesList;
}

function createButtonsContainer(liveLinkButton, sourceLinkButton) {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('popup-buttons');
  buttonsContainer.appendChild(liveLinkButton);
  buttonsContainer.appendChild(sourceLinkButton);
  return buttonsContainer;
}

function createLiveLinkButton() {
  const liveLinkButton = document.createElement('a');
  liveLinkButton.classList.add('button', 'popup-button');
  liveLinkButton.innerHTML = 'See Live <img src="assets/images/icons/live3.png" alt="Live Link Logo" class="popup-link-logo">';
  liveLinkButton.target = '_blank';
  liveLinkButton.rel = 'noopener noreferrer';
  return liveLinkButton;
}

function createSourceLinkButton() {
  const sourceLinkButton = document.createElement('a');
  sourceLinkButton.classList.add('button', 'popup-button');
  sourceLinkButton.innerHTML = 'See Source <img src="assets/images/icons/github.png" alt="Source Link Logo" class="popup-link-logo">';
  sourceLinkButton.target = '_blank';
  sourceLinkButton.rel = 'noopener noreferrer';
  return sourceLinkButton;
}

function createPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  return popup;
}

function generatePopup(project) {
  const closeButton = createCloseButton();
  const header = createHeader();
  const image = createImage();
  const description = createDescription();
  const technologiesList = createTechnologiesList();
  const liveLinkButton = createLiveLinkButton();
  const sourceLinkButton = createSourceLinkButton();
  const buttonsContainer = createButtonsContainer(liveLinkButton, sourceLinkButton);

  header.textContent = project.name;
  image.src = project.image;
  image.alt = project.name;
  description.textContent = project.description;

  technologiesList.innerHTML = '';
  project.technologies.forEach((tech) => {
    const technology = document.createElement('li');
    technology.textContent = tech;
    technologiesList.appendChild(technology);
  });

  liveLinkButton.href = project.liveLink;
  sourceLinkButton.href = project.sourceLink;

  const popup = createPopup();
  popup.append(closeButton, header, image, description, technologiesList, buttonsContainer);

  popupContainer.appendChild(popup);
  bodyEl.classList.add('popup-open');

  closeButton.addEventListener('click', () => {
    popup.remove();
    bodyEl.classList.remove('popup-open');
  });
}

const seeProjectButtons = document.querySelectorAll('.button-card');
seeProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    generatePopup(projects[index]);
  });
});
