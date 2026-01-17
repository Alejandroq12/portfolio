const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameCount = document.getElementById('name-count');
const messageCount = document.getElementById('message-count');
const submitBtn = document.getElementById('contact-form-button');
const successMessage = document.getElementById('success-message');
const contactTime = document.getElementById('contact-time');

const escapeHTML = (str) => str.replace(/[&<>"']/g, (m) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[m]));

const validators = {
  name: {
    validate: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value) && value.trim().length >= 2,
    message: 'Please enter a valid name (letters only, min 2 characters)'
  },
  email: {
    validate: (value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.toLowerCase()),
    message: 'Please enter a valid email address'
  },
  message: {
    validate: (value) => value.trim().length >= 10,
    message: 'Message must be at least 10 characters'
  }
};

const updateFieldStatus = (input, isValid, errorMsg = '') => {
  const group = input.closest('.form-field-group');
  const errorEl = group.querySelector('.field-error');
  const statusIcon = group.querySelector('.status-icon');

  group.classList.remove('valid', 'invalid', 'typing');

  if (input.value.length === 0) {
    statusIcon.textContent = '';
    errorEl.textContent = '';
    return;
  }

  if (isValid) {
    group.classList.add('valid');
    statusIcon.textContent = '✓';
    errorEl.textContent = '';
  } else {
    group.classList.add('invalid');
    statusIcon.textContent = '✗';
    errorEl.textContent = errorMsg;
  }
};

const validateField = (input, showError = true) => {
  const validator = validators[input.id];
  const isValid = validator.validate(input.value);
  if (showError || input.value.length > 0) {
    updateFieldStatus(input, isValid, validator.message);
  }
  return isValid;
};

const updateCharCount = (input, countEl, max) => {
  const count = input.value.length;
  countEl.textContent = count;
  countEl.parentElement.classList.toggle('warning', count > max * 0.8);
  countEl.parentElement.classList.toggle('danger', count >= max);
};

const showTypingState = (input) => {
  const group = input.closest('.form-field-group');
  group.classList.add('typing');
};

let typingTimeout;
const handleInput = (input, countEl = null, max = null) => {
  showTypingState(input);
  clearTimeout(typingTimeout);

  if (countEl && max) {
    updateCharCount(input, countEl, max);
  }

  typingTimeout = setTimeout(() => {
    validateField(input, false);
  }, 500);
};

nameInput.addEventListener('input', () => handleInput(nameInput, nameCount, 30));
emailInput.addEventListener('input', () => handleInput(emailInput));
messageInput.addEventListener('input', () => handleInput(messageInput, messageCount, 500));

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('blur', () => validateField(input, true));
  input.addEventListener('focus', () => {
    const group = input.closest('.form-field-group');
    group.classList.add('focused');
  });
  input.addEventListener('blur', () => {
    const group = input.closest('.form-field-group');
    group.classList.remove('focused');
  });
});

const setLoadingState = (loading) => {
  submitBtn.classList.toggle('loading', loading);
  submitBtn.disabled = loading;
};

const showSuccess = () => {
  form.style.display = 'none';
  successMessage.classList.add('show');

  const particles = successMessage.querySelectorAll('.success-particle');
  particles.forEach((p, i) => {
    p.style.animationDelay = `${i * 0.2}s`;
  });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const isNameValid = validateField(nameInput);
  const isEmailValid = validateField(emailInput);
  const isMessageValid = validateField(messageInput);

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    const firstInvalid = form.querySelector('.form-field-group.invalid input, .form-field-group.invalid textarea');
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.closest('.form-field-group').classList.add('shake');
      setTimeout(() => {
        firstInvalid.closest('.form-field-group').classList.remove('shake');
      }, 500);
    }
    return;
  }

  setLoadingState(true);

  try {
    const formData = new FormData(form);
    formData.set('name', escapeHTML(nameInput.value));
    formData.set('email', escapeHTML(emailInput.value.toLowerCase()));
    formData.set('message', escapeHTML(messageInput.value));

    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showSuccess();
      localStorage.removeItem('contactFormData');
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    setLoadingState(false);
    const submitArea = form.querySelector('.form-submit-area');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'submit-error';
    errorDiv.textContent = 'Failed to send. Please try again or email directly.';
    submitArea.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
  }
});

const saveFormData = () => {
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('contactFormData', JSON.stringify(data));
};

const loadFormData = () => {
  const saved = localStorage.getItem('contactFormData');
  if (saved) {
    const data = JSON.parse(saved);
    nameInput.value = data.name || '';
    emailInput.value = data.email || '';
    messageInput.value = data.message || '';

    if (data.name) updateCharCount(nameInput, nameCount, 30);
    if (data.message) updateCharCount(messageInput, messageCount, 500);

    [nameInput, emailInput, messageInput].forEach(input => {
      if (input.value) validateField(input, false);
    });
  }
};

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', saveFormData);
});

const updateContactTime = () => {
  if (contactTime) {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/El_Salvador' };
    contactTime.textContent = now.toLocaleTimeString('en-US', options);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadFormData();
  updateContactTime();
  setInterval(updateContactTime, 60000);
});

form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    form.dispatchEvent(new Event('submit'));
  }
});
