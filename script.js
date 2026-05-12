    function fillExample(a, b) {
      document.getElementById('input1').value = a;
      document.getElementById('input2').value = b;
      document.getElementById('input1').focus();
    }

    // press Enter anywhere to collide
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') collide();
    });

    async function collide() {
      // 1. grab the two words
      const word1 = document.getElementById('input1').value.trim();
      const word2 = document.getElementById('input2').value.trim();

      const btn     = document.getElementById('collideBtn');
      const status  = document.getElementById('status');
      const results = document.getElementById('results');

      // 2. basic check
      if (!word1 || !word2) {
        status.textContent = '⚠ Fill in both fields first!';
        return;
      }

      // 3. loading state
      btn.disabled = true;
      status.textContent = 'Colliding "' + word1 + '" and "' + word2 + '"...';
      results.innerHTML = `
        <div class="loading-row">
          <div class="ldot"></div>
          <div class="ldot"></div>
          <div class="ldot"></div>
          <div class="ldot"></div>
        </div>`;

      // 4. build the prompt — asking for strict JSON only
      const prompt = `Smash these two unrelated concepts together: "${word1}" and "${word2}".

Generate exactly 4 creative ideas born from this collision. Make them surprising, ambitious,genuinely interesting, and  in simple language.

Reply ONLY with a valid JSON array — no explanation, no markdown fences. Just raw JSON:
[
  { "type": "Startup Idea",  "title": "...", "description": "One or two punchy sentences." },
  { "type": "Art Concept",   "title": "...", "description": "One or two punchy sentences." },
  { "type": "Product Idea",  "title": "...", "description": "One or two punchy sentences." },
  { "type": "Wild Concept",  "title": "...", "description": "One or two punchy sentences." }
]`;

      try {
        // 5. call the Gemini API
        const GEMINI_API_KEY = 'PASTE_YOUR_API_KEY_HERE';

        const response = await fetch(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + GEMINI_API_KEY,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            })
          }
        );

        // 6. read the response — Gemini wraps text differently than Claude
        const data = await response.json();

        // if Gemini returned an error, show the real message
        if (data.error) {
          results.innerHTML = `<div class="error">⚠ Gemini error: ${data.error.message}</div>`;
          status.textContent = '';
          btn.disabled = false;
          return;
        }

        const text = data.candidates[0].content.parts[0].text;

        // 7. strip any accidental code fences, parse the JSON array
        const cleaned = text.replace(/```json|```/g, '').trim();
        const ideas   = JSON.parse(cleaned);

        // 8. clear loading, show divider label
        results.innerHTML = `
          <div class="collision-label">
            <span class="words">${word1} × ${word2}</span>
          </div>`;
        status.textContent = '✦ ' + ideas.length + ' ideas generated';

        // 9. loop — one card per idea
        ideas.forEach(function(idea) {
          const card = document.createElement('div');
          card.className = 'idea-card';
          card.innerHTML = `
            <div class="card-inner">
              <div class="card-type">${idea.type}</div>
              <div class="card-title">${idea.title}</div>
              <div class="card-desc">${idea.description}</div>
            </div>`;
          results.appendChild(card);
        });

      } catch (err) {
        // 10. error state
        results.innerHTML = `<div class="error">⚠ Something went wrong. Check your API key and try again.</div>`;
        status.textContent = '';
      }

      // 11. re-enable button
      btn.disabled = false;
    }
