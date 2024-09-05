// Get form elements
const form = document.getElementById('form');
const formError = document.getElementById('form-error');
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

// Function to validate email
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate password
function isValidPassword(password) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}

// Function to show form error message
function showFormError(errors) {
    const errorList = errors.map(error => `<li>${error}</li>`).join('');
    formError.innerHTML = `<ul>${errorList}</ul>`;
    formError.style.display = 'block';
}

// Function to hide form error message
function hideFormError() {
    formError.innerHTML = '';
    formError.style.display = 'none';
}

// Function to toggle password visibility
function togglePasswordVisibility(button) {
    const input = button.previousElementSibling;
    const icon = button.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        button.setAttribute('aria-label', 'Hide password');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        button.setAttribute('aria-label', 'Show password');
    }
}

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Remove any existing errors
    hideFormError();

    let errors = [];
    const firstName = form.elements['firstName-input'];
    const email = form.elements['email-input'];
    const password = form.elements['password-input'];
    const confirmPassword = form.elements['confirmPassword-input'];

    // Validate first name
    if (firstName.value.trim() === '') {
        errors.push('First name is required');
    }

    // Validate email
    if (!isValidEmail(email.value)) {
        errors.push('Please enter a valid email address');
    }

    // Validate password
    if (!isValidPassword(password.value)) {
        errors.push('Password must be at least 8 characters long and include special characters');
    }

    // Validate password confirmation
    if (password.value !== confirmPassword.value) {
        errors.push('Passwords do not match');
    }

    if (errors.length > 0) {
        showFormError(errors);
    } else {
        // If all validations pass, you can submit the form or perform further actions
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Event listeners for toggle password buttons
togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function() {
        togglePasswordVisibility(this);
    });
});