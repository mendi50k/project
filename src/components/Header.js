import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Header({ user, onLogout }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <h1 className="logo">Dog Report System</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {user?.role === "employee" ? (
          <button className="logout-button" onClick={onLogout}>Logout</button>
        ) : (
          isHomePage && (
            <Link to="/login">
              <button className="employee-login">Employee Login</button>
            </Link>
          )
        )}
      </div>
    </header>
  );
}
