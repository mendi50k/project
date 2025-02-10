import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "mendi" && password === "50K") {
      onLogin(username, password);
      navigate("/");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Employee Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
