import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Features = ({ openLogin }) => {
  const navigate = useNavigate();

  const handleNavigate = (path, featureName) => {
   // const isLoggedIn = false; // dummy for now
    const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert(
      `🔒 Please login to access "${featureName}"`
    );
    openLogin(); // login modal open
    return;
  }

  navigate(path);


   /* if (!isLoggedIn) {
      alert(
        `🚀 Navigating to ${featureName}...\n\n🔑 Please login to access this feature.`
      );
      openLogin();
      return;
    }

    navigate(path);*/
  };

  return (
    <section id="features" className="features-section">

      <div className="section-header">
        <h2>Powerful Features</h2>
        <p>Everything you need for seamless hostel management</p>
      </div>

      <div className="features-grid">

        <div
          className="feature-card"
          onClick={() => handleNavigate("/qr", "QR Code Scanner")}
        >
          <span className="feature-icon">📱</span>
          <h3>QR Code Scanner</h3>
          <p>Fast and efficient QR code scanning for instant student verification.</p>
          <span className="feature-link">Explore →</span>
        </div>

        <div
          className="feature-card"
          onClick={() => handleNavigate("/nfc", "NFC Reader")}
        >
          <span className="feature-icon">📡</span>
          <h3>NFC Reader</h3>
          <p>Contactless NFC tag scanning for secure access control.</p>
          <span className="feature-link">Explore →</span>
        </div>

        <div
          className="feature-card"
          onClick={() => handleNavigate("/face", "Face Recognition")}
        >
          <span className="feature-icon">👤</span>
          <h3>Face Recognition</h3>
          <p>Advanced biometric facial recognition with high accuracy.</p>
          <span className="feature-link">Explore →</span>
        </div>

        <div
          className="feature-card"
          onClick={() => handleNavigate("/fob", "Key Fob Access")}
        >
          <span className="feature-icon">🔑</span>
          <h3>Key Fob Access</h3>
          <p>RFID key fob system for quick and secure entry.</p>
          <span className="feature-link">Explore →</span>
        </div>

        <div
          className="feature-card"
          onClick={() => handleNavigate("/dashboard", "Analytics Dashboard")}
        >
          <span className="feature-icon">📊</span>
          <h3>Analytics Dashboard</h3>
          <p>Real-time statistics and insights.</p>
          <span className="feature-link">Explore →</span>
        </div>

        <div
          className="feature-card"
          onClick={() => handleNavigate("/admin", "Admin Control")}
        >
          <span className="feature-icon">⚙️</span>
          <h3>Admin Control</h3>
          <p>Role-based system management.</p>
          <span className="feature-link">Explore →</span>
        </div>

      </div>

    </section>
  );
};

export default Features;
