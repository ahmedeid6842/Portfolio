const form = document.querySelector('.contact__form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    const emailLowerCase = email.value.toLowerCase();
    email.value = emailLowerCase;

    errorMessage.textContent = `Please enter your email in all lowercase. We've converted it to ${emailLowerCase} for you.`;
  } else {
    errorMessage.textContent = '';
  }
});