// Define the project data
const projects = [
  {
    name: 'Lock API',
    description:
      'Lock uses REST APIs to protect endpoints by using two techniques: tokens and sessions.',
    image: './images/project_screenshots/Snapshoot Portfolio.svg',
    technologies: ['Node.js', 'Express.js', 'JWT', 'Redis'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/ahmedeid6842/auth_session-token_',
  },
  {
    name: 'Affable REST APIs',
    description:
      "Affable manages your Blog through REST API and you can also see others' Blogs.",
    image: './images/project_screenshots/Snapshoot Portfolio (1).svg',
    technologies: ['Node.js', 'TypeScript', 'Docker'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/ahmedeid6842/Blog',
  },
];

// Select the popup elements
const popup = document.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');
const popupImage = popup.querySelector('.popup__image');
const popupDescription = popup.querySelector('.popup__description');
const popupTechnologies = popup.querySelector('.popup__technologies');
const popupLiveLink = popup.querySelector('.popup__live-link');
const popupSourceLink = popup.querySelector('.popup__source-link');
const popupCloseButton = popup.querySelector('.popup__close');

// Select all the project buttons
const projectButtons = document.querySelectorAll('.card__btn');
console.log(projectButtons);
// Add event listeners to each project button
projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Show the popup window
    popup.classList.add('popup--open');
    // Update the popup content with the project details
    popupTitle.textContent = projects[index].name;
    popupImage.style.backgroundImage = `url("${projects[index].image}")`;
    popupDescription.textContent = projects[index].description;
    popupTechnologies.innerHTML = projects[index].technologies
      .map((tech) => `<li>${tech}</li>`)
      .join('');
    popupLiveLink.setAttribute('href', projects[index].liveLink);
    popupSourceLink.setAttribute('href', projects[index].sourceLink);
  });
});

// Add event listener to the popup close button
popupCloseButton.addEventListener('click', () => {
  // Hide the popup window
  popup.classList.remove('popup--open');
});
