document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Additional Validation: Ensure all fields are not empty
    if (fullname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Additional Validation: Ensure password meets criteria
    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        return;
    }

    // Additional Validation: Ensure password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Here, you should send an AJAX request to your server to handle the sign-up process
    // For this example, we'll just log the data
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);
});
