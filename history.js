document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('historyContainer');
  const past = JSON.parse(localStorage.getItem('history') || '[]');
  
  if (past.length === 0) {
    container.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--muted);">No collisions yet. Go smash some ideas!</p>`;
    return;
  }
  
  let html = '';
  past.forEach(entry => {
    const d = new Date(entry.date);
    const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    // Just take the first idea to show as a preview
    const firstIdea = entry.ideas[0];
    
    html += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="history-card h-100 p-4 border rounded-4 shadow-sm bg-white" style="transition: transform 0.2s;">
          <div class="history-date text-muted small mb-2">${dateStr}</div>
          <div class="history-words text-uppercase fw-bold mb-3" style="color: var(--accent1); letter-spacing: 1px;">${entry.word1} × ${entry.word2}</div>
          <div class="history-idea">
            <strong class="d-block fs-5 mb-2">${firstIdea.title}</strong>
            <p class="mb-0 text-muted">${firstIdea.description}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
});
