import { useState } from "react";
import "../App.css";

export default function DogReport() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [useGPS, setUseGPS] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Report submitted successfully!");
  };

  return (
    <div className="dog-report">
      <h2>Report a Stray Dog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Upload Image (Optional)</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && (
            <img src={image} alt="Uploaded Dog" className="preview-image" />
          )}
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required={!useGPS}
            disabled={useGPS}
          />
        </div>
        <div className="form-group gps-container">
          <input
            type="checkbox"
            id="gps-checkbox"
            checked={useGPS}
            onChange={() => setUseGPS(!useGPS)}
          />
          <label htmlFor="gps-checkbox">Use GPS Location</label>
        </div>
        <button type="submit" className="button">
          Submit Report
        </button>
      </form>
    </div>
  );
}
