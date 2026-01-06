import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Navbar = ({ openLogin }) => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-icon">🔐</div>
        <div className="logo-text">
          <h2>SecureHostel</h2>
        </div>
      </div>

      <div className="nav-menu">
        {/* SAME PAGE SCROLL */}
        <a href="#home" className="nav-link">Home</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#contact" className="nav-link">Contact</a>

        {/* NEW PAGE */}
        <Link to="/about" className="nav-link">About</Link>

        {/* LOGIN MODAL */}
        <button className="login-btn" onClick={openLogin}>
          🔑 Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 