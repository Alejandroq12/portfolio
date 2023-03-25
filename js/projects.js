/* eslint-disable linebreak-style */
const projects = [
  {
    name: 'Robo Friends',
    description: 'React web application that fetches data from a remote API.',
    image: 'assets/images/projects/test2.svg',
    technologies: ['JSX', 'JavaScript', 'React'],
    liveLink: 'https://alejandroq12.github.io/react-app-robots/',
    sourceLink: 'https://github.com/Alejandroq12/react-app-robots',
  },
  {
    name: 'Another Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    image: 'assets/images/projects/test.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    image: 'assets/images/projects/test.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    image: 'assets/images/projects/test.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    image: 'assets/images/projects/test.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    image: 'assets/images/projects/test.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
];

const projectsContainer = document.querySelector('.works-container');

projects.forEach((project) => {
  // Create a new card element
  const card = document.createElement('div');
  card.classList.add('work-card');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', project.name);

  // Fill in the card's HTML with the project's information
  card.innerHTML = `
    <h4 class="work-cards-title" tabindex="0">${project.name}</h4>
    <p class="work-cards-description" tabindex="0">${project.description}</p>
    <ul>
      ${project.technologies.map((tech) => `<li tabindex="0">${tech}</li>`).join('')}
    </ul>
    <button class="button-card" type="submit" name="see project button" aria-label="see project button" tabindex="0">
      See Project
    </button>
  `;

  // Append the card to the container
  projectsContainer.appendChild(card);
});

export default projects;