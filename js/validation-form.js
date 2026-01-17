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
    message: 'Name: letters only, min 2 characters'
  },
  email: {
    validate: (value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.toLowerCase()),
    message: 'Please enter a valid email'
  },
  message: {
    validate: (value) => value.trim().length >= 10,
    message: 'Min 10 characters required'
  }
};

const fieldStates = {
  name: { lastState: null, lastCount: null, lastCountState: null },
  email: { lastState: null },
  message: { lastState: null, lastCount: null, lastCountState: null }
};

const updateFieldStatus = (input, isValid) => {
  const group = input.closest('.form-field-group');
  const errorEl = group.querySelector('.field-error');
  const statusIcon = group.querySelector('.status-icon');
  const fieldId = input.id;

  let newState;
  if (input.value.length === 0) {
    newState = 'empty';
  } else if (isValid) {
    newState = 'valid';
  } else {
    newState = 'invalid';
  }

  if (fieldStates[fieldId].lastState === newState) {
    return;
  }

  fieldStates[fieldId].lastState = newState;

  group.classList.remove('valid', 'invalid');

  if (newState === 'empty') {
    statusIcon.textContent = '';
    errorEl.textContent = '';
  } else if (newState === 'valid') {
    group.classList.add('valid');
    statusIcon.textContent = '✓';
    errorEl.textContent = '';
  } else {
    group.classList.add('invalid');
    statusIcon.textContent = '✗';
    errorEl.textContent = validators[fieldId].message;
  }
};

const validateField = (input) => {
  const validator = validators[input.id];
  const isValid = validator.validate(input.value);
  updateFieldStatus(input, isValid);
  return isValid;
};

const updateCharCount = (input, countEl, max) => {
  const fieldId = input.id;
  const count = input.value.length;

  // Only update count text if it changed
  if (fieldStates[fieldId].lastCount !== count) {
    fieldStates[fieldId].lastCount = count;
    countEl.textContent = count;
  }

  // Determine the new state
  let newCountState = 'normal';
  if (count >= max) {
    newCountState = 'danger';
  } else if (count > max * 0.8) {
    newCountState = 'warning';
  }

  // Only update classes if state changed
  if (fieldStates[fieldId].lastCountState !== newCountState) {
    fieldStates[fieldId].lastCountState = newCountState;
    // Target the .field-info element (grandparent of countEl)
    const fieldInfo = countEl.closest('.field-info');
    if (fieldInfo) {
      fieldInfo.classList.remove('warning', 'danger');
      if (newCountState !== 'normal') {
        fieldInfo.classList.add(newCountState);
      }
    }
  }
};

const inputTimeouts = {
  name: null,
  email: null,
  message: null
};

const handleInput = (input, countEl = null, max = null) => {
  const fieldId = input.id;

  if (countEl && max) {
    updateCharCount(input, countEl, max);
  }

  clearTimeout(inputTimeouts[fieldId]);

  inputTimeouts[fieldId] = setTimeout(() => {
    validateField(input);
  }, 500);
};

nameInput.addEventListener('input', () => handleInput(nameInput, nameCount, 30));
emailInput.addEventListener('input', () => handleInput(emailInput));
messageInput.addEventListener('input', () => handleInput(messageInput, messageCount, 500));

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.form-field-group').classList.add('focused');
  });

  input.addEventListener('blur', () => {
    input.closest('.form-field-group').classList.remove('focused');
    if (input.value.length > 0) {
      validateField(input);
    }
  });
});

const setLoadingState = (loading) => {
  submitBtn.classList.toggle('loading', loading);
  submitBtn.disabled = loading;
};

const showSuccess = () => {
  form.style.display = 'none';
  successMessage.classList.add('show');
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
      const group = firstInvalid.closest('.form-field-group');
      group.classList.add('shake');
      setTimeout(() => group.classList.remove('shake'), 600);
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
      throw new Error('Failed');
    }
  } catch (error) {
    setLoadingState(false);
    const existing = form.querySelector('.submit-error');
    if (existing) existing.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'submit-error';
    errorDiv.textContent = 'Failed to send. Please try again.';
    form.querySelector('.form-submit-area').appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 4000);
  }
});

const saveFormData = () => {
  localStorage.setItem('contactFormData', JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }));
};

const loadFormData = () => {
  try {
    const saved = localStorage.getItem('contactFormData');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.name) nameInput.value = data.name;
      if (data.email) emailInput.value = data.email;
      if (data.message) messageInput.value = data.message;

      if (data.name) {
        updateCharCount(nameInput, nameCount, 30);
        validateField(nameInput);
      }
      if (data.message) {
        updateCharCount(messageInput, messageCount, 500);
      }
      if (data.email) {
        validateField(emailInput);
      }
      if (data.message) {
        validateField(messageInput);
      }
    }
  } catch (e) {
    localStorage.removeItem('contactFormData');
  }
};

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', saveFormData);
});

const updateContactTime = () => {
  if (contactTime) {
    const now = new Date();
    contactTime.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/El_Salvador'
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadFormData();
  updateContactTime();
  setInterval(updateContactTime, 60000);
});

form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault();
    form.requestSubmit();
  }
});
