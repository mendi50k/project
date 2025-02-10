import { useState } from "react";
import "../App.css";

export default function DogBreedIdentifier() {
  const [fileName, setFileName] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // הצגת שם הקובץ בלבד
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your image has been uploaded. The system will identify the breed soon!");
  };

  return (
    <div className="form-container">
      <h2>Identify Dog Breed</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Upload an image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} required />
          {fileName && <p>Selected File: {fileName}</p>}
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}
