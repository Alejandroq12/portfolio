const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const savedData = localStorage.getItem('form-data');
const formData = savedData ? JSON.parse(savedData) : {};

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

if (savedData) {
  nameInput.value = formData.name || '';
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}
