const form = document.getElementById('form');


form.addEventListener('submit', (event) => {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;


  // check if the email is in lowercase
  if (emailValue !== emailValue.toLowerCase()) {
    event.preventDefault();
  }
});
