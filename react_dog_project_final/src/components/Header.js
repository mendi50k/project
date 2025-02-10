import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <h1 className="logo">Dog Report System</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}