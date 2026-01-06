import React, { useEffect } from "react";
import "../styles/about.css";

const About = () => {

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const particles = document.getElementById("particles");
    if (!particles) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration =
        Math.random() * 10 + 20 + "s";
      particles.appendChild(particle);
    }
  };

  return (
    <>
      <div className="particles" id="particles"></div>

      {/* HERO SECTION */}
      <section className="about-hero" >
        <div className="about-badge">📖 Project Overview</div>
        <h1 className="about-title">
          About <span>SecureHostel</span>
        </h1>
        <p className="about-desc">
          A revolutionary blockchain-based hostel attendance and entry
          management system that combines multiple authentication methods
          with immutable record-keeping for complete transparency and
          security.
        </p>
      </section>

      {/* CONTENT */}
      <section className="content-section">
        <h2 className="section-title">🎯 Project Mission</h2>
        <p className="section-subtitle">
          SecureHostel aims to revolutionize hostel management by providing
          a secure, transparent, and efficient attendance tracking system.
        </p>

        {/* FEATURES */}
        <div className="features-grid">
          {[
            ["📱", "QR Code Scanning"],
            ["📡", "NFC Technology"],
            ["👤", "Face Recognition"],
            ["🔑", "RFID Key Fobs"],
            ["⚙️", "Admin Control"],
            ["📊", "Real-time Analytics"],
          ].map((item, i) => (
            <div className="feature-card" key={i}>
              <span className="feature-icon">{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>
                Secure, fast and blockchain-backed authentication system
                designed for modern hostel management.
              </p>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="workflow-section">
          <h2 className="section-title">⚙️ How It Works</h2>

          <div className="workflow-steps">
            {[
              ["🚪", "Student Entry"],
              ["🔍", "Verification"],
              ["⛓️", "Blockchain Record"],
              ["✅", "Confirmation"],
            ].map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-icon">{step[0]}</div>
                <h3 className="step-title">{step[1]}</h3>
                <p className="step-desc">
                  Secure authentication followed by immutable blockchain
                  entry.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="stats-section">
          <h2 className="section-title">📈 Project Impact</h2>
          <div className="stats-grid">
            {[
              ["99.9%", "System Accuracy"],
              ["2.3s", "Avg Entry Time"],
              ["100%", "Data Integrity"],
              ["1,234+", "Active Users"],
            ].map((stat, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">{stat[0]}</div>
                <div className="stat-label">{stat[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
