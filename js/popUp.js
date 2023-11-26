// Define the project data
const projects = [
  {
    name: 'How',
    description:
      '❓🗣️ Robust Q&A application built with NestJS. Empowering users with knowledge, seamless communication, and comprehensive features.',
    image: './images/project_images/how.svg',
    technologies: ['TypeScript', 'Node.js', 'NestJS', 'Postgres', 'Redis', 'TypeORM', 'NodeMailer'],
    liveLink: 'https://how-fcb5f9de2993.herokuapp.com/',
    sourceLink: 'https://github.com/ahmedeid6842/How',
    projectCover: './images/project_covers/how-high-resolution-logo-color-on-transparent-background.png',
    fullDescription: `
            &nbsp;&nbsp;&nbsp;&nbsp;Welcome to the <b>How</b> Backend project! Built with NestJS, a progressive Node.js framework,
            <b>How</b> is a robust and efficient Q&A application designed to empower users with knowledge and facilitate seamless communication.
            The <b>How</b> provides a SOLID foundation for building a feature-rich Q&A platform, where users can share knowledge, engage in discussions, and expand their understanding. 
            <br/>
            <br/>
            This project consists of five modules, each serving a specific purpose to deliver a comprehensive user experience:
            <br/>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp; <b>1.</b> Authentication module provides secure user registration, login, and password reset functionality. With guards ensuring authentication and convenient decorators like @currentUser, accessing user information is a breeze.
            <br/>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp; <b>2.</b> Email module integrates Nodemailer for reliable email communication, allowing users to stay connected effortlessly. 
            <br/>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp; <b>3, 4.</b> The question module empowers users to create, update, and delete questions, while the answer module facilitates answering and managing questions effectively. With a focus on data management, TypeORM is utilized to define entities and establish relationships between them, simplifying database operations.
            <br/>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp; <b>5.</b> The follow module enables users to connect with others, fostering a vibrant community. 
            `,
    canopy: ['Backend DEV', 2023],
  },
  {
    name: 'Search Engine',
    description:
      '⚙️ 📈 Search Engine Rails project. That utilizes the Rails MVC pattern to build a robust search engine and analytics.',
    image: './images/project_images/search-engine.png',
    technologies: ['Ruby on Rails', 'Sidekiq', 'Redis Server', 'Postgresql', 'Heroku'],
    liveLink: 'https://search-engine-v2-enhancments-6bd414cc751d.herokuapp.com/',
    sourceLink: 'https://github.com/ahmedeid6842/search-engine',
    projectCover: 'https://github.com/ahmedeid6842/search-engine/assets/57197702/5a594296-7162-4b13-b3c1-834768615a8a',
    fullDescription: `
      &nbsp;&nbsp;&nbsp;&nbsp; Welcome to the <b> Search Engine </b> Rails project.👋 That utilizes the Rails MVC pattern to build a robust search engine and
      analytics where a user can search for aticles and the search engine will work on finding matched results and 
      also store the user's searches into analytics so the user can know what the most searched queries are and
      what people search for too.
      <br/>
      <br/>
      With the RealTime search box, when a user queries articles "how are you?" the matched articles will be returned,
      and with the help of background jobs, the analytics for the user will be updated in the background without making
      the user wait until the analytics are updated, which means the application can receive many search requests
      and handle them efficiently and quickly. By supporting an authentication system,
      the search analytics can be updated only for the current logged-in user.
      <br/>
      <br/>
      Presentation Video Part-1
      <br/>
      <iframe width="560" height="315" src="https://www.loom.com/embed/362bc4e4fe3e4d3c909b9cdfb9bd6f06?sid=1bac1c2f-7e0d-4454-8b85-7c9272038824" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br/>
      <br/>
      Presentation Video Part-2
      <br/>
      <iframe width="560" height="315" src="https://www.loom.com/embed/89332f06eea1472ab0dbf9a4b00b8ab9?sid=56f90576-686f-4852-933a-185f12d3ef08" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        `,
    canopy: ['FullStack', 2023],
  },
  {
    name: 'Tickets',
    description:
      '🎟️ 🎛️ The Ticket App Microservices Backend is an efficient Node.js and Typescript-based solution that uses microservices, NATS streaming, and Kubernetes deployment for ticketing apps.',
    image: 'https://github.com/ahmedeid6842/Code-Base/assets/57197702/9d3c0317-6115-42bb-bb39-0733573e36d1',
    technologies: ['Typescript', 'Node.js', 'Docker', 'Kubernetes', 'Microservices', 'NATS Streaming', 'MongoDB', 'Redis', 'Ojbect Oriented Programming'],
    liveLink: 'https://documenter.getpostman.com/view/10444163/2s946feY8x',
    sourceLink: 'https://github.com/ahmedeid6842/Tickets',
    projectCover: 'https://github.com/ahmedeid6842/Code-Base/assets/57197702/8898f229-8118-4c1c-8a0b-89a84c60f949',
    fullDescription: `
      &nbsp;&nbsp;&nbsp;&nbsp; The <b>Ticket</b> App Microservices Backend is a Node.js Typescript-based backend 
      that utilizes microservices architecture to provide a seamless user experience.
      This backend is composed of several microservices including Auth, Expiration, Common, Order, Payment, and Ticket.
      <br/>
      <br/>
      The code is written in Typescript, making use of interfaces, classes, and generators
      to ensure a well-organized and easily maintainable codebase. 
      Kubernetes service and deployment were used to create a deployment for each service 
      and its database and to build ingress and set up the NATS streaming service.
      <br/>
      <br/>
      The <b>Ticket</b> App Microservices Backend is a reliable and efficient solution for ticket app needs,
      with Mongoose version numbers utilized to solve concurrency issues between services.
      `,
    canopy: ['Backend DEV', 2023],
  },
  {
    name: 'Vending',
    description:
      '🥤🧃🍫 This Node.js and Express API provides CRUD and authentication for a vending machine.',
    image: 'https://github.com/ahmedeid6842/Vending/assets/57197702/6657f219-b02b-48cf-88d1-1ba37c4a8a32',
    technologies: ['Javascript', 'Node.js', 'ExpressJS', 'Json Web Token', 'MongoDB', 'Redis', 'Docker', 'Docker Compose', 'Swagger'],
    liveLink: 'https://app.swaggerhub.com/apis/ahmedeid6842/Vending/1.0.0',
    sourceLink: 'https://github.com/ahmedeid6842/Vending',
    projectCover: 'https://github.com/ahmedeid6842/Vending/assets/57197702/6f16e931-986a-411c-bf58-f8aee14d36fd',
    fullDescription: `
      &nbsp;&nbsp;&nbsp;&nbsp; This API provides endpoints for a vending machine that is accessible to both buyers and sellers. 
      The API includes endpoints for adding, updating, and removing products, as well as depositing coins and making purchases.
      Authentication and authorization are used to control access to the endpoints based on user role (buyer or seller), and caching is implemented to improve performance.
      The API requires authentication tokens for requests that require a specific role (buyer or seller), and uses a time-to-live (TTL) value to cache frequently-requested queries.
      <br/>
      <br/>
      Contributions are always welcome💟, and as a thank you, vending will give you something for free 😅.
      `,
    canopy: ['Backend DEV', 2023],
  },
  {
    name: 'Lock',
    description:
      '🔒🛡️ Lock uses REST APIs to protect endpoints with tokens and sessions. Each technique is self-contained, with the option to use either one. Includes address book feature.🚪🔑 .',
    image: 'https://user-images.githubusercontent.com/57197702/218692185-0666ea88-3261-411c-9715-7c4bb959be61.gif',
    technologies: ['Javascript', 'Node.js', 'ExpressJS', 'Json Web Token', 'MongoDB', 'Redis'],
    liveLink: 'https://github.com/ahmedeid6842/auth_session-token_',
    sourceLink: 'https://github.com/ahmedeid6842/auth_session-token_',
    projectCover: 'https://user-images.githubusercontent.com/57197702/218442989-cf6e2ba1-afde-4a15-a52e-da22d76021f3.JPG',
    fullDescription: `
      &nbsp;&nbsp;&nbsp;&nbsp; <b>Lock</b> uses REST APIs to protect endpoints by using two techniques: tokens and sessions. The session is connected to the Redis and Mongo databases. 
      The token is linked to MongoDB. Every technique is self-contained; for example, I used two branches, but in real world, you will only use one. 
      Feature : Although users have an address book
      `,
    canopy: ['Backend DEV', 2023],
  },
];

function openPopup(index) {
  const section = document.querySelector('.work');
  const overlay = document.querySelector('.overlay');
  const technologiesList = projects[index].technologies.map((tech) => `<li  class="popup-tech-item">${tech}</li>`).join('');
  const canopyList = projects[index].canopy.map((elem) => `<li>${elem}</li>`).join('');

  const popupHtml = `
        <div class="popup">

            <h3 class="popup__name">${projects[index].name}</h3>
            <button type="button" class="popup__exit">
                <img src="images/icons8-close_black.svg" alt="">
            </button>

            <div class="card__canopy-header popup__canopy">
                <h4 class="card__canopy-title">CANOPY</h4>
                <ul class="card__canopy-list popup__canopy-list">
                    ${canopyList}
                </ul>
            </div>

            <img src="${projects[index].image}" alt="" class="popup__img">

            <div class="popup__details">
                <p class="popup__description">
                    ${projects[index].fullDescription}
                </p>

                <div class="popup__tech-buttons">
                    <ul class="card__list popup__tech">
                        ${technologiesList}
                    </ul>
                    <div class="gray-line"></div>
                    <div class="popup__buttons">
                        <a href="${projects[index].liveLink}" class="btn btn--green" target="_blank">See Live
                                <img src="images/see-live-icon.svg" alt=""></a>
                        <a href="${projects[index].sourceLink}" class="btn btn--green" target="_blank">See Source 
                                <img src="images/see-source-icon.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    `;

  section.insertAdjacentHTML('afterbegin', popupHtml);
  overlay.classList.remove('hidden');

  const closePopupIcon = document.querySelector('.popup__exit');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');

  body.classList.add('popup-open');

  closePopupIcon.addEventListener('click', () => {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('popup-open');
  });
}

function createCard() {
  const cardContainer = document.querySelector('.card__container');
  for (let index = projects.length - 1; index >= 0; index -= 1) {
    const project = projects[index];
    const technologiesList = project.technologies.map((tech) => `<li class="popup-tech-item">${tech}</li>`).join('');
    const animationClass = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';

    const card = `
            <li class="card ${animationClass}">
                <div class="card__imgbox">
                    <img src="${project.projectCover}" alt="Lock-app"
                     class="card__img">
                </div>

                <div class="card__details">
                    <h3 class="card__text">${project.name}</h3>
                    <div class="card__canopy">
                        <div class="card__canopy-header">
                            <h4 class="card__canopy-title">CANOPY</h4>
                            <ul class="card__canopy-list">
                                <li>${project.canopy[0]}</li>
                                <li>${project.canopy[1]}</li>
                            </ul>
                        </div>
                    <p class="card__canopy-text">${project.description}</p>
                    </div>
                    <ul class="card__list">
                         ${technologiesList}
                    </ul>
                    <button
                        class="btn btn--green card__btn">See Project</button>
                </div>
    </li>
        `;
    cardContainer.insertAdjacentHTML('afterbegin', card);
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.card').forEach((card) => {
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createCard();
  document.querySelectorAll('.work .btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      openPopup(index);
    });
  });
});