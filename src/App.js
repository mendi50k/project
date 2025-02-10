import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./Routes";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    if (username === "mendi" && password === "50K") {
      setUser({ username, role: "employee" });
    } else {
      alert("Incorrect username or password");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Header user={user} onLogout={handleLogout} />
        <main className="content">
          <AppRoutes user={user} onLogin={handleLogin} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
