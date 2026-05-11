# 💥 Word Collider

> Smash two unrelated concepts together — let AI do the creative explosion.

**Word Collider** is a browser-based tool that takes any two words you throw at it and uses Google's Gemini AI to generate 4 surprising, creative ideas born from their collision — startups, art concepts, product ideas, and wild concepts.

---

## 🚀 Live Demo

> Type `Pizza` + `Blockchain` → Get 4 ideas you never thought of.

---

## ✨ Features

- ⚡ **Instant AI Generation** — Powered by Google Gemini 2.5 Flash
- 🎨 **4 Idea Categories** — Startup Idea, Art Concept, Product Idea, Wild Concept
- 🃏 **Card-based UI** — Clean result cards for each generated idea
- ⌨️ **Keyboard Friendly** — Hit `Enter` anywhere to collide
- 🔁 **Example Prompts** — Pre-filled word pairs to get you started
- 🛡️ **Error Handling** — Graceful messages for API or network issues

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| AI Model | Google Gemini 2.5 Flash |
| API | Gemini REST API (`generateContent`) |
| Data Format | JSON (structured prompt + response) |

---

## 📂 Project Structure

```
word-collider/
│
├── index.html        # Main UI — inputs, button, result cards
├── style.css         # Styling, animations, card layout
└── script.js         # Core logic — API call, JSON parsing, DOM rendering
```

---

## ⚙️ How It Works

```
User types 2 words
       ↓
Prompt is built with strict JSON instructions
       ↓
Sent to Gemini API via fetch()
       ↓
Response is cleaned & parsed as JSON array
       ↓
4 idea cards rendered on screen
```

### Key Logic (script.js)

1. **Grab inputs** — reads both word fields
2. **Validate** — warns if either field is empty
3. **Loading state** — animated dots while waiting
4. **Build prompt** — instructs Gemini to return raw JSON only
5. **API call** — `fetch()` to Gemini's `generateContent` endpoint
6. **Parse response** — strips code fences, parses JSON
7. **Render cards** — loops through ideas, builds HTML cards
8. **Error handling** — catches API errors and network failures

---

## 🔑 Setup & Usage

### 1. Clone the repo

```bash
git clone https://github.com/yashgarg05/word-collider.git
cd word-collider
```

### 2. Add your Gemini API Key

In `script.js`, replace the placeholder:

```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

> Get a free API key at [Google AI Studio](https://aistudio.google.com/)

### 3. Open in browser

```bash
# No build step needed — just open the file
open index.html
```

---

## 🧪 Example Collisions

| Word 1 | Word 2 | What You Might Get |
|---|---|---|
| `Pizza` | `Blockchain` | Decentralized pizza DAO, NFT toppings... |
| `Sleep` | `Finance` | Dream-state investing app, sleep debt tracker... |
| `Ocean` | `Architecture` | Underwater city startup, wave-shaped buildings... |
| `Chess` | `Therapy` | Emotion-mapping board game, strategic healing... |

---

## ⚠️ Known Limitations

- Requires a valid Gemini API key (free tier available)
- Gemini occasionally wraps responses in markdown fences — handled automatically
- No backend — API key is exposed in client-side JS (not for production use)

---

## 🔐 Security Note

> ⚠️ This project exposes the API key in client-side JavaScript.  
> For production, move the API call to a backend server or serverless function to keep the key private.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🙌 Acknowledgements

- [Google Gemini API](https://ai.google.dev/) — for the AI magic
- Inspired by the idea that creativity is just unexpected combinations

---

*Built with curiosity. Powered by collisions.*
