import { useState } from "react";
import "../App.css";

export default function DogBreedIdentifier() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setTimeout(() => {
        setResult("Labrador Retriever"); // סימולציה של זיהוי גזע
      }, 2000);
    }
  };

  return (
    <div className="dog-breed-identifier">
      <h2>Dog Breed Identifier</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Dog" className="preview-image" />}
      {result && <p>Identified Breed: {result}</p>}
    </div>
  );
}