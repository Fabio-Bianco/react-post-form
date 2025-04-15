import { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import "./MessageForm.css";

const PostForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [lastPost, setLastPost] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetMessage = () => {
    const timeMessage = setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
    return timeMessage;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log("✅ Dati inviati correttamente:", res.data);
        setMessage("Post pubblicato con successo!");
        setMessageType("success");
        setFormData({ author: "", title: "", body: "", public: false });
        setLastPost(res.data); // salva il post creato
        resetMessage();
      })
      .catch((err) => {
        console.error("❌ Errore durante l'invio:", err);
        setMessage("Errore durante la pubblicazione. Riprova.");
        setMessageType("error");
        resetMessage();
      });
  };

  const handleRemoveLastPost = () => {
    setLastPost(null);
  };

  useEffect(() => {
    console.log("📋 Componente PostForm montato.");
  }, []);

  return (
    <div className="form-wrapper">
      <div className="form-container">
        {message && (
          <div className={`form-message ${messageType}`}>
            {message}
          </div>
        )}

        <h1>Crea un nuovo post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="author">Autore</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="title">Titolo</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="body">Testo</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkbox-wrapper">
            <label htmlFor="public">
              <input
                type="checkbox"
                id="public"
                name="public"
                checked={formData.public}
                onChange={handleChange}
              />
              Rendi pubblico
            </label>
          </div>

          <button type="submit">Pubblica Post</button>
        </form>

        {lastPost && (
          <div className="last-post">
            <h2>Ultimo post pubblicato:</h2>
            <p><strong>{lastPost.title}</strong> di {lastPost.author}</p>
            <p>{lastPost.body}</p>
            <p><em>{lastPost.public ? "Pubblico" : "Bozza"}</em></p>
            <button onClick={handleRemoveLastPost}>Rimuovi</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostForm;
