/* eslint-disable linebreak-style */
const projects = [
  {
    name: 'The Pocket Guardian.',
    description: 'Full-stack application created to let each user manage their budget by categories and transactions.',
    image: 'assets/images/projects/pop-up/1.svg',
    technologies: ['Ruby', 'Rails', 'Postgres'],
    liveLink: 'https://pocket-guardian-fec21289dfe6.herokuapp.com/',
    sourceLink: 'https://github.com/Alejandroq12/pocket-guardian',
  },
  {
    name: 'Polyglot Talk.',
    description: 'Polyglot Talk is a conference page built from zero with HTML, CSS, and JavaScript.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alejandroq12.github.io/polyglot-talk/',
    sourceLink: 'https://github.com/Alejandroq12/polyglot-talk',
  },
  {
    name: 'My Catalog.',
    description: 'This is a Ruby app developed to create a catalog of personal things, music albums, books, and more.',
    image: 'assets/images/projects/pop-up/3.svg',
    technologies: ['Ruby', 'RSpec', 'Rubocop'],
    liveLink: 'https://youtu.be/9LO_0zhpoC4',
    sourceLink: 'https://github.com/Alejandroq12/catalog-my-things',
  },
  {
    name: 'The Bookstore.',
    description: 'This app allows users to add and remove books, showcasing efficient state management and real-time data handling.',
    image: 'assets/images/projects/pop-up/4.svg',
    technologies: ['React.js', 'Redux', 'JavaScript'],
    liveLink: 'https://candid-quokka-8e7e31.netlify.app/',
    sourceLink: 'https://github.com/Alejandroq12/bookstore',
  },
  {
    name: 'Air Checker.',
    description: 'This is a web application designed for real-time monitoring of air quality in El Salvador.',
    image: 'assets/images/projects/pop-up/5.svg',
    technologies: ['React.js', 'Redux', 'Jest'],
    liveLink: 'https://airchecker.onrender.com/',
    sourceLink: 'https://github.com/Alejandroq12/air-checker',
  },
  {
    name: 'University Books.',
    description: 'This is an app developed to simulate the operations of a real-world library using Object Oriented Programming.',
    image: 'assets/images/projects/pop-up/6.svg',
    technologies: ['Ruby', 'RSpec', 'Rubocop'],
    liveLink: 'https://github.com/Alejandroq12/university-books',
    sourceLink: 'https://github.com/Alejandroq12/university-books',
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