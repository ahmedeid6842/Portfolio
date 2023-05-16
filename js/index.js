const hamburgerButton = document.querySelector('.nav-menu');
const mainContent = document.querySelector('.main-content');
const closeMenu = document.querySelector('.close-menu');
const mobile = document.querySelector('.mobile-menu');
const portfolioAnchor = document.querySelector('.nav_list_portfolio');
const aboutAnchor = document.querySelector('.nav_list_contact');
const contactAnchor = document.querySelector('.nav_list_about');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    mainContent.classList.toggle('inactive');
    mobile.classList.toggle('active');
});

portfolioAnchor.addEventListener('click', () => {
    hamburgerButton.classList.remove('active');
    mainContent.classList.remove('inactive');
    mobile.classList.remove('active');
});

aboutAnchor.addEventListener('click', () => {
    hamburgerButton.classList.remove('active');
    mainContent.classList.remove('inactive');
    mobile.classList.remove('active');
});

contactAnchor.addEventListener('click', () => {
    hamburgerButton.classList.remove('active');
    mainContent.classList.remove('inactive');
    mobile.classList.remove('active');
});

closeMenu.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    mainContent.classList.toggle('inactive');
    mobile.classList.toggle('active');
});



