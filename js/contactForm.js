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

// Local Storage
const inputs = form.querySelectorAll('input, textarea');
const storageKey = 'contactForm';

let formData = {
  name: '',
  email: '',
  message: '',
};

// Update formData object and save to localStorage on form input change
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    formData[input.name] = input.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
  });
});

// Load formData from localStorage and populate form fields
const storedData = JSON.parse(localStorage.getItem(storageKey));

if (storedData) {
  formData = storedData;
  inputs.forEach((input) => {
    input.value = formData[input.name] || '';
  });
}