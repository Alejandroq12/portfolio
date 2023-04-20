/* eslint-disable linebreak-style */
const projects = [
  {
    name: 'Hall of champions',
    description: 'The website displays scores submitted by different players. All data is preserved thanks to API service.',
    image: 'assets/images/projects/pop-up/1.svg',
    technologies: ['JSX', 'JavaScript', 'React'],
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
    description: 'My books" is a website that displays a list of books and allows you to add and remove books from that list.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alejandroq12.github.io/my-books/',
    sourceLink: 'https://github.com/Alejandroq12/my-books',
  },
  {
    name: 'Portfolio',
    description: 'This a portfolio website that I built with HTML, CSS, and JavaScript.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alejandroq12.github.io/second-portfolio/',
    sourceLink: 'https://github.com/Alejandroq12/second-portfolio',
  },
  {
    name: 'My Store',
    description: 'It is an online store. It is an online store built with Node.js on the backend and React.js on the front end.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['React.js', 'Node.js', 'Apollo'],
    liveLink: 'https://github.com/Alejandroq12/full-stack-application',
    sourceLink: 'https://github.com/Alejandroq12/full-stack-application',
  },
  {
    name: 'Book artists',
    description: 'This is a web application that allows you to book artists. It is built with Python, Flask, and SQLAlchemy.',
    image: 'assets/images/projects/pop-up/2.svg',
    technologies: ['Python', 'SQLAlchemy', 'Flask'],
    liveLink: 'https://github.com/Alejandroq12/App-to-book-artists',
    sourceLink: 'https://github.com/Alejandroq12/App-to-book-artists',
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