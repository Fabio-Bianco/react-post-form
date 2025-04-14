import { useState } from "react";
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
  const [messageType, setMessageType] = useState(""); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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

        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 3000);
      })
      .catch((err) => {
        console.error("❌ Errore durante l'invio:", err);
        setMessage("Errore durante la pubblicazione. Riprova.");
        setMessageType("error");

        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 3000);
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        {message && (
          <div className={`form-message ${messageType}`}>
            {message}
          </div>
        )}

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
      </div>
    </div>
  );
};

export default PostForm;
