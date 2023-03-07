const projects = [
  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    image: 'img/project1.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'img/project2.jpg',
    technologies: ['JavaScript', 'CSS'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'img/project3.jpg',
    technologies: ['JavaScript', 'CSS'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'img/project4.jpg',
    technologies: ['JavaScript', 'CSS'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'img/project2.jpg',
    technologies: ['JavaScript', 'CSS'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/example',
  },
  {
    name: 'Another Project6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'img/project2.jpg',
    technologies: ['JavaScript', 'CSS'],
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
