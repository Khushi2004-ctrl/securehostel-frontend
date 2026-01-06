import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-content">

        {/* ABOUT */}
        <div className="footer-about">
          <h3>SecureHostel</h3>
          <p>
            Secure and efficient hostel attendance management system.
            Built for transparency, security, and ease of use.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>

            <a
              href="mailto:info@securehostel.com"
              className="social-link"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/press">Press Kit</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            <li><Link to="/api">API Reference</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2024 SecureHostel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
