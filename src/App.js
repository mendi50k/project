import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./Routes";
import { getUser, setUser, clearUser } from "./utils/user";
import { loginEmployee, logoutEmployee } from "./utils/employee";
import "./App.css";

export default function App() {
  const [user, setUserState] = useState(getUser());

  const handleLogin = (username, password) => {
    const loggedUser = loginEmployee(username, password);
    if (loggedUser) {
      setUserState(loggedUser);
      setUser(loggedUser);
    } else {
      alert("Incorrect username or password");
    }
  };

  const handleLogout = () => {
    setUserState(null);
    clearUser();
    logoutEmployee();
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
