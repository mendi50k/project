import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Header({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <h1 className="logo">Dog Report System</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header-buttons">
          {user?.role === "employee" ? (
            <button className="employee-login" onClick={() => { 
              onLogout();
              navigate("/"); // אחרי Logout המשתמש חוזר לדף הבית
            }}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="employee-login">Employee Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
