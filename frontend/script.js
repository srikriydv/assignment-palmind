$(document).ready(function () {
    const API_URL = 'http://localhost:3000/api/users';
  
    // Registration Form Submission
    $('#registerForm').submit(function (e) {
      e.preventDefault();
      const name = $('#regName').val();
      const email = $('#regEmail').val();
      const password = $('#regPassword').val();
  
      axios.post(`${API_URL}/register`, { name, email, password })
        .then(() => {
          alert('Registration successful! Redirecting to login...');
          $('#registerSection').hide();
          $('#loginSection').show();
          $('#registerForm').trigger('reset');
        })
        .catch(err => alert(err.response.data.error));
    });
  
    // Login Form Submission
    $('#loginForm').submit(function (e) {
      e.preventDefault();
      const email = $('#loginEmail').val();
      const password = $('#loginPassword').val();
  
      axios.post(`${API_URL}/login`, { email, password })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('authToken', token);
          alert('Login successful! Redirecting to home...');
          showHomePage();
        })
        .catch(err => alert(err.response.data.error));
    });
  
    // Show Home Page
    function showHomePage() {
      $('#registerSection').hide();
      $('#loginSection').hide();
      $('#homeSection').show();
  
      // Fetch and display users
      const token = localStorage.getItem('authToken');
      axios.get(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => {
          const users = response.data;
          const usersTableBody = $('#usersTable tbody');
          usersTableBody.empty();
          users.forEach(user => {
            usersTableBody.append(`
              <tr class="user-row" data-name="${user.name}" data-email="${user.email}">
                <td>${user.name}</td>
                <td>${user.email}</td>
              </tr>
            `);
          });
        })
        .catch(err => console.error(err.response.data.error));
    }
  
    // Logout
    $('#logoutBtn').click(function () {
      localStorage.removeItem('authToken');
      $('#homeSection').hide();
      $('#registerSection').show();
    });
  
    // Show appropriate sections based on login state
    function checkLoginStatus() {
      if (localStorage.getItem('authToken')) {
        showHomePage();
      } else {
        $('#registerSection').show();
        $('#loginSection').hide();
        $('#homeSection').hide();
        $('#loginBtn').show();
      }
    }
  
    $('#loginBtn').click(function () {
      $('#registerSection').hide();
      $('#loginSection').show();
    });
  
    checkLoginStatus();
  

    $('#usersTable').on('click', '.user-row', function () {
      const userName = $(this).data('name');
      const userEmail = $(this).data('email');

      $('#modalName').text(userName);
      $('#modalEmail').text(userEmail);

      $('#userModal').modal('show');
    });
  });