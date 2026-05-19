document.addEventListener('DOMContentLoaded', () => {
  const profileCard = document.getElementById('profileCard');
  const user = JSON.parse(localStorage.getItem('currentUser'));
  
  if (!user) {
    window.location.href = 'login.html';
    return;
  }
  
  const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';
  const joinDate = new Date(user.joinDate).toLocaleDateString();
  const collisions = user.totalCollisions || 0;
  
  profileCard.innerHTML = `
    <div class="avatar">${initial}</div>
    <div class="profile-info">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p><strong>Member since:</strong> ${joinDate} &nbsp;|&nbsp; <strong>Total Collisions:</strong> ${collisions}</p>
    </div>
    <button class="logout-btn" onclick="logout()">Log Out</button>
  `;
});

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}
