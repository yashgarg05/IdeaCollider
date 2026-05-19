document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      
      if (users[email]) {
        localStorage.setItem('currentUser', JSON.stringify(users[email]));
        window.location.href = 'app.html';
      } else {
        alert('User not found. Please sign up.');
      }
    });
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      
      if (users[email]) {
        alert('User already exists. Please log in.');
      } else {
        const newUser = { name, email, joinDate: new Date().toISOString(), totalCollisions: 0 };
        users[email] = newUser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        window.location.href = 'app.html';
      }
    });
  }
});
