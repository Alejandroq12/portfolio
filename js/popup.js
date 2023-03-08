import projects from './projects.js';

const popupContainer = document.querySelector('#popup-container');
const body = document.querySelector('body');

function generatePopup(project) {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const closeButton = document.createElement('button');
  closeButton.classList.add('popup-close');
  closeButton.innerHTML = '<img src="./assets/images/icons/x2.png" alt="Close">';

  closeButton.addEventListener('click', () => {
    popup.remove();
    body.classList.remove('blur');
  });

  const header = document.createElement('h2');
  header.classList.add('popup-header');
  header.textContent = project.name;

  const image = document.createElement('img');
  image.classList.add('popup-image');
  image.src = project.image;
  image.alt = project.name;

  const description = document.createElement('p');
  description.classList.add('popup-description');
  description.textContent = project.description;

  const technologiesList = document.createElement('ul');
  technologiesList.classList.add('popup-technologies');
  project.technologies.forEach((tech) => {
    const technology = document.createElement('li');
    technology.textContent = tech;
    technologiesList.appendChild(technology);
  });

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('popup-buttons');

  const liveLinkButton = document.createElement('a');
  liveLinkButton.classList.add('button', 'popup-button');
  liveLinkButton.href = project.liveLink;
  liveLinkButton.textContent = 'Live Link';

  const liveLinkLogo = document.createElement('img');
  liveLinkLogo.src = '/assets/images/icons/live3.png';
  liveLinkLogo.alt = 'Live Link Logo';
  liveLinkLogo.classList.add('popup-link-logo');

  const sourceLinkButton = document.createElement('a');
  sourceLinkButton.classList.add('button', 'popup-button');
  sourceLinkButton.href = project.sourceLink;
  sourceLinkButton.textContent = 'Source Link';

  const sourceLinkLogo = document.createElement('img');
  sourceLinkLogo.src = '/assets/images/icons/github.png';
  sourceLinkLogo.alt = 'Source Link Logo';
  sourceLinkLogo.classList.add('popup-link-logo');

  liveLinkButton.appendChild(liveLinkLogo);
  sourceLinkButton.appendChild(sourceLinkLogo);

  buttonsContainer.appendChild(liveLinkButton);
  buttonsContainer.appendChild(sourceLinkButton);

  popup.appendChild(closeButton);
  popup.appendChild(header);
  popup.appendChild(image);
  popup.appendChild(description);
  popup.appendChild(technologiesList);
  popup.appendChild(buttonsContainer);

  popupContainer.appendChild(popup);

  // Toggle the blur class on the body element only when the popup is being opened
  if (!body.classList.contains('blur')) {
    body.classList.add('blur');
  }
}

const seeProjectButtons = document.querySelectorAll('.button-card');
seeProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    generatePopup(projects[index]);
  });
});

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  popupContainer.classList.toggle('hidden');
});

if (window.innerWidth < 768) {
  popupContainer.classList.add('hidden');
}