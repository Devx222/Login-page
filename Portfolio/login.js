document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Additional Validation: Ensure email and password are not empty
  if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
  }

  // Here, you should send an AJAX request to your server to handle the login process
  // For this example, we'll just log the data
  console.log('Email:', email);
  console.log('Password:', password);
});
