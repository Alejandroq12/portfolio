/* eslint-disable linebreak-style */
const projects = [
  {
    name: 'Hall of champions',
    description: 'The website displays scores submitted by different players. All data is preserved thanks to API service.',
    image: 'assets/images/projects/pop-up/1.svg',
    technologies: ['API', 'JavaScript', 'Webpack'],
    liveLink: 'https://alejandroq12.github.io/hallofchampions/dist/',
    sourceLink: 'https://github.com/Alejandroq12/hallofchampions',
  },
  {
    name: 'Polyglot Talk',
    description: 'Polyglot Talk is a conference page built from zero with HTML, CSS, and JavaScript.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alejandroq12.github.io/polyglot-talk/',
    sourceLink: 'https://github.com/Alejandroq12/polyglot-talk',
  },
  {
    name: 'My Books',
    description: '"My books" is a website that displays a list of books and allows you to add and remove books from that list.',
    image: 'assets/images/projects/pop-up/3.svg',
    technologies: ['CSS', 'SPA', 'ES6'],
    liveLink: 'https://alejandroq12.github.io/my-books/',
    sourceLink: 'https://github.com/Alejandroq12/my-books',
  },
  {
    name: 'Todo List',
    description: 'It was designed to help users efficiently manage their tasks, using modern web development practices.',
    image: 'assets/images/projects/pop-up/4.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alejandroq12.github.io/to-do-list/',
    sourceLink: 'https://github.com/Alejandroq12/to-do-list',
  },
  {
    name: 'My Store',
    description: 'It is an online store built with Node.js on the backend and React.js on the front end.',
    image: 'assets/images/projects/pop-up/5.svg',
    technologies: ['React.js', 'Node.js', 'Apollo'],
    liveLink: 'https://github.com/Alejandroq12/full-stack-application',
    sourceLink: 'https://github.com/Alejandroq12/full-stack-application',
  },
  {
    name: 'My Movies',
    description: 'It is a web application that retrieves data from an API and displays it in a user-friendly way.',
    image: 'assets/images/projects/pop-up/6.svg',
    technologies: ['JavaScript', 'Jest', 'Webpack'],
    liveLink: 'https://alejandroq12.github.io/my-movies/dist/',
    sourceLink: 'https://github.com/Alejandroq12/my-movies',
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