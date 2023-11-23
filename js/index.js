const hamburgerButton = document.querySelector('.nav-menu');
const mainContent = document.querySelector('.main-content');
const closeMenu = document.querySelector('.close-menu');
const mobile = document.querySelector('.mobile-menu');
const mobileMenuAnchors = document.querySelectorAll('.mobile-menu a');
const languageToggle = document.getElementById('languages-toggle');
const frameworksToggle = document.getElementById('frameworks-toggle');
const skillsToggle = document.getElementById('skills-toggle');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
  mainContent.classList.toggle('inactive');
  mobile.classList.toggle('active');
});

mobileMenuAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    hamburgerButton.classList.remove('active');
    mainContent.classList.remove('inactive');
    mobile.classList.remove('active');
  });
});

closeMenu.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
  mainContent.classList.toggle('inactive');
  mobile.classList.toggle('active');
});

languageToggle.addEventListener('click', () => {
  const languagesList = document.getElementById('languages-list');
  languagesList.classList.toggle('hidden');

  if (languagesList.classList.contains('hidden')) {
    languageToggle.classList.remove('fa-angle-down');
    languageToggle.classList.add('fa-angle-right');
  } else {
    languageToggle.classList.remove('fa-angle-right');
    languageToggle.classList.add('fa-angle-down');
  }
});

// Handle frameworks list toggle
frameworksToggle.addEventListener('click', () => {
  const frameworksList = document.getElementById('frameworks-list');
  frameworksList.classList.toggle('hidden');

  if (frameworksList.classList.contains('hidden')) {
    frameworksToggle.classList.remove('fa-angle-down');
    frameworksToggle.classList.add('fa-angle-right');
  } else {
    frameworksToggle.classList.remove('fa-angle-right');
    frameworksToggle.classList.add('fa-angle-down');
  }
});

// Handle skills list toggle
skillsToggle.addEventListener('click', () => {
  const skillsList = document.getElementById('skills-list');
  skillsList.classList.toggle('hidden');

  if (skillsList.classList.contains('hidden')) {
    skillsToggle.classList.remove('fa-angle-down');
    skillsToggle.classList.add('fa-angle-right');
  } else {
    skillsToggle.classList.remove('fa-angle-right');
    skillsToggle.classList.add('fa-angle-down');
  }
});
