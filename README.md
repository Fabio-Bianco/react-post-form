# 📘 BLOG FORM APP

Progetto React per la creazione di un **form multifield** per inviare dati via `POST` a un'API esterna.  

---

## 🚀 Tecnologie usate

- **React** (con Vite ⚡ per uno sviluppo più veloce)
- **Axios** per comunicare con l’API
- **useState** per gestire lo stato del form
- **CSS**

---

## 📩 Funzionalità

L'app contiene un form con i seguenti campi:

- 👤 `author` – L’autore del post (stringa)
- 📝 `title` – Il titolo del post (stringa)
- 📄 `body` – Il contenuto del post (stringa)
- 🌐 `public` – Checkbox che determina se il post è pubblico (`true`) o una bozza (`false`)

Quando l’utente compila il form e clicca su “Pubblica Post”:
1. I dati vengono raccolti in un oggetto `formData`.
2. Axios invia una richiesta POST all’API: https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts.
3. Se l’invio va a buon fine, l’app mostra un messaggio di conferma e stampa i dati in console.
4. In caso di errore, viene mostrato un messaggio di errore.

---
1. Clona la repository:

- git clone https://github.com/Fabio-Bianco/blog-form-app.git
- cd blog-form-app
- npm install
- npm run dev
- Apri il browser all’indirizzo http://localhost:5173


## 🚥 Struttura del progetto

src/
├── components/
│   └── PostForm.jsx      
├── App.jsx               
└── main.jsx     

## Author

Fabio-Bianco (b_bot)

