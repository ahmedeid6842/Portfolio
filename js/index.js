const hamburgerButton = document.querySelector('.nav-menu');
const mainContent = document.querySelector('.main-content');
const closeMenu = document.querySelector('.close-menu');
const mobile = document.querySelector('.mobile-menu');
const mobileMenuAnchors = document.querySelectorAll('.mobile-menu a');

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
