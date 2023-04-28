const form = document.getElementById('form');

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

function escapeHTML(unsafe) {
  return unsafe.replace(/[&<"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[m]);
}

function createCustomValidity(input, message) {
  const feedback = document.createElement('div');
  feedback.classList.add('invalid-feedback');
  feedback.textContent = message;

  input.setCustomValidity(message);
  input.insertAdjacentElement('afterend', feedback);

  input.addEventListener('input', () => {
    input.setCustomValidity('');
    feedback.remove();
  });
}

form.addEventListener('submit', debounce((event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const emailValue = escapeHTML(emailInput.value); // Escape HTML characters

  // Use regex pattern for email validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!nameInput.validity.valid) {
    createCustomValidity(nameInput, nameInput.title);
  }

  if (!emailRegex.test(emailValue)) {
    createCustomValidity(emailInput, emailInput.title);
  }

  if (form.checkValidity()) {
    // Process the form submission.
  }
}, 500));
