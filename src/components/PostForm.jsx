import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

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
      })
      .catch((err) => {
        console.error("Errore durante l'invio:", err);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Autore</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </div>

      <div>
        <label>Titolo</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div>
        <label>Testo</label>
        <textarea name="body" value={formData.body} onChange={handleChange} required />
      </div>

      <div>
        <label>
          <input type="checkbox" name="public" checked={formData.public} onChange={handleChange} />
          Rendi pubblico
        </label>
      </div>

      <button type="submit">Pubblica Post</button>
    </form>
  );
};

export default PostForm;
