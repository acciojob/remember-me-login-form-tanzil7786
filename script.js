//your JS code here. If required.
   document.addEventListener('DOMContentLoaded', function() {
      // Check if there are saved details in local storage
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        // Create a button for logging in as an existing user
        const existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.textContent = 'Login as existing user';
        document.body.appendChild(existingButton);

        // Add event listener to the existing button
        existingButton.addEventListener('click', function() {
          showAlert('Logged in as ' + savedUsername);
        });
      }

      // Add event listener to the login form submit button
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
          // Save details to local storage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Remove saved details from local storage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        showAlert('Logged in as ' + username);
      });

      // Function to show an alert
      function showAlert(message) {
        alert(message);
      }
    });