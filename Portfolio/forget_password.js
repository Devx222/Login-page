document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('email').value;

    // Additional Validation: Ensure email is not empty and in valid format
    if (email.trim() === '') {
        alert('Please enter your email address.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Here, you should send an AJAX request to your server to handle the password reset process
    // For this example, we'll just log the data
    console.log('Email:', email);
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
