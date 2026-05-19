document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;

  const user = JSON.parse(localStorage.getItem('currentUser'));
  
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  let html = `
    <a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a>
    <a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About</a>
  `;
  
  if (user) {
    html += `
      <a href="app.html" class="${currentPath === 'app.html' ? 'active' : ''}">App</a>
      <a href="history.html" class="${currentPath === 'history.html' ? 'active' : ''}">History</a>
      <a href="profile.html" class="${currentPath === 'profile.html' ? 'active' : ''}">Profile</a>
    `;
  } else {
    html += `
      <a href="app.html" class="${currentPath === 'app.html' ? 'active' : ''}">App</a>
      <a href="login.html" class="btn-sm">Login</a>
    `;
  }
  
  navLinks.innerHTML = html;
});
