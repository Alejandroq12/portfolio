const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;

  // check if the email is in lowercase
  if (emailValue !== emailValue.toLowerCase()) {
    event.preventDefault();

    // display an error message near the submit button
    const submitButton = document.getElementById('contact-form-button');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please enter a lowercase email address.';
    errorMessage.style.color = 'red';
    const errorContainer = document.createElement('div');
    errorContainer.appendChild(errorMessage);
    form.insertBefore(errorContainer, submitButton);
  }
});
