const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Retrieve data from local storage if available
const savedData = localStorage.getItem('form-data');
const formData = savedData ? JSON.parse(savedData) : {};

// Update the local storage object when the input fields change
nameInput.addEventListener('input', () => {
  formData.name = nameInput.value;
  localStorage.setItem('form-data', JSON.stringify(formData));
});

emailInput.addEventListener('input', () => {
  formData.email = emailInput.value;
  localStorage.setItem('form-data', JSON.stringify(formData));
});

messageInput.addEventListener('input', () => {
  formData.message = messageInput.value;
  localStorage.setItem('form-data', JSON.stringify(formData));
});

// Pre-fill the form fields with saved data on page load
if (savedData) {
  nameInput.value = formData.name || '';
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}