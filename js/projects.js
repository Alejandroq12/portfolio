/* eslint-disable linebreak-style */
const projects = [
  {
    name: 'The Pocket Guardian.',
    description:
      'Full-stack application created to let each user manage their budget by categories and transactions.',
    image: 'assets/images/projects/pop-up/1.svg',
    technologies: ['Ruby', 'Rails', 'Postgres'],
    liveLink: 'https://pocket-guardian-fec21289dfe6.herokuapp.com/',
    sourceLink: 'https://github.com/Alejandroq12/pocket-guardian',
  },
  {
    name: 'Polyglot Talk.',
    description:
      'Polyglot Talk is a conference page built from zero with HTML, CSS, and JavaScript.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alejandroq12.github.io/polyglot-talk/',
    sourceLink: 'https://github.com/Alejandroq12/polyglot-talk',
  },
  {
    name: 'The Recipes',
    description:
      'This is a full-stack web application built with Ruby on Rails for managing and tracking recipes and ingredients.',
    image: 'assets/images/projects/pop-up/3.svg',
    technologies: ['Rails', 'Postgres', 'Devise'],
    liveLink: 'https://rails-recipes-app-5174969e2b0d.herokuapp.com',
    sourceLink: 'https://github.com/Alejandroq12/recipe-app',
  },
  {
    name: 'The Bookstore.',
    description:
      'This app allows users to add and remove books, showcasing efficient state management and real-time data handling.',
    image: 'assets/images/projects/pop-up/4.svg',
    technologies: ['React.js', 'Redux', 'JavaScript'],
    liveLink: 'https://candid-quokka-8e7e31.netlify.app/',
    sourceLink: 'https://github.com/Alejandroq12/bookstore',
  },
  {
    name: "Space Traveler's.",
    description:
      "Collaboratively developed Space Travelers' Hub, an interactive space exploration platform, using SpaceX' API.",
    image: 'assets/images/projects/pop-up/5.svg',
    technologies: ['React.js', 'Redux', 'API'],
    liveLink: 'https://spacex-iq7v.onrender.com/rockets',
    sourceLink: 'https://github.com/Alejandroq12/pocket-guardian',
  },
  {
    name: 'Air Checker.',
    description:
      'This web application monitors the air quality in real-time across various locations in El Salvador.',
    image: 'assets/images/projects/pop-up/6.svg',
    technologies: ['React.js', 'Jest', 'Redux'],
    liveLink: 'https://airchecker.onrender.com',
    sourceLink: 'https://github.com/Alejandroq12/air-checker',
  },
];

const projectsContainer = document.querySelector('.works-container');

projects.forEach((project) => {
  const card = document.createElement('div');
  card.classList.add('work-card');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', project.name);

  card.innerHTML = `
    <h4 class="work-cards-title" tabindex="0">${project.name}</h4>
    <p class="work-cards-description" tabindex="0">${project.description}</p>
    <ul>
      ${project.technologies
    .map((tech) => `<li tabindex="0">${tech}</li>`)
    .join('')}
    </ul>
    <button class="button-card" type="submit" name="see project button" aria-label="see project button" tabindex="0">
      See Project
    </button>
  `;

  projectsContainer.appendChild(card);
});

export default projects;
