const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Retrieve data from local storage if available
const savedData = localStorage.getItem('form-data');
const formData = savedData ? JSON.parse(savedData) : {};
