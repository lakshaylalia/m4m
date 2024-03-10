function redirectToPage() {
    window.location.href = "http://127.0.0.1:5500/completeprofile.html";
  }
 // Get the form elements
const passwordField = document.getElementById('exampleInputPassword1');
const confirmPasswordField = document.getElementById('cexampleInputPassword1');

// Add an event listener to the confirm password field
confirmPasswordField.addEventListener('input', () => {
  // Check if the passwords match
  if (passwordField.value === confirmPasswordField.value) {
    // If they do, enable the submit button
    const submitButton = document.getElementById('submit-button');
    submitButton.removeAttribute('disabled');
  } else {
    // If they don't, disable the submit button
    const submitButton = document.getElementById('submit-button');
    submitButton.setAttribute('disabled', 'disabled');
  }
});