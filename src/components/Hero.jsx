import React from "react";
import "../styles/home.css";

const Hero = ({ openLogin }) => {
  return (
    <section id="home" className="hero-section">
      
      <div className="hero-content">
        <div className="hero-badge">🚀 Next-Gen Security System</div>

        <h1>
          Secure Your Hostel <br />
        </h1>

        <p>
          Revolutionary attendance system ensuring immutable, transparent,
          and secure tracking.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={openLogin}>
            🚀 Get Started
          </button>

          <button
            className="btn-secondary"
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            📖 Learn More
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="visual-stats">

            <div className="stat-box">
              <div className="stat-icon">🎓</div>
              <div className="stat-number">1200+</div>
              <div className="stat-label">Students</div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">🏠</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Hostels</div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">🔐</div>
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Security</div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">Fast</div>
              <div className="stat-label">Entry</div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
