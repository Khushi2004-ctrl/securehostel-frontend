import React, { useEffect, useState } from "react";
import "../styles/fob.css";

const Fob = () => {
  const [status, setStatus] = useState("Reader Active");
  const [scans, setScans] = useState([]);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const container = document.getElementById("particles");
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 14 + "s";
      container.appendChild(p);
    }
  };

  const startFobScan = () => {
    if (scanning) return;

    setScanning(true);
    setStatus("Reading RFID chip...");

    setTimeout(() => {
      const id = "FOB" + Math.floor(Math.random() * 9000);
      setScans([{ id, time: new Date() }, ...scans]);
      setStatus("✓ Key Fob Verified!");

      setTimeout(() => {
        setStatus("Reader Active");
        setScanning(false);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fob-page">
      <div id="particles"></div>

      <div className="scanner-container">
        <div className="header">
          <div className="logo">🔑</div>
          <h1>Key Fob Scanner</h1>
          <p className="subtitle">RFID Access Control</p>
        </div>

        <div className="scanner-card">
          <div className="status">{status}</div>

          <div className="fob-area">
            <div className="reader-slot">TAP HERE</div>
            <div className="fob-icon">🔑</div>
          </div>

          <button className="scan-btn" onClick={startFobScan}>
            🔑 Tap Key Fob
          </button>

          <div className="recent">
            <h3>Recent Scans</h3>
            {scans.length === 0 && <p>No scans yet</p>}
            {scans.slice(0, 5).map((s, i) => (
              <div key={i} className="scan-item">
                {s.id} — {s.time.toLocaleTimeString()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fob;
