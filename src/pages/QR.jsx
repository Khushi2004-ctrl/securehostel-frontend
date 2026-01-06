import React, { useEffect, useState } from "react";
import "../styles/qr.css";

const QR = () => {
  const [scans, setScans] = useState([]);
  const [status, setStatus] = useState("ready");
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const particles = document.getElementById("particles");
    if (!particles) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 10 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      particles.appendChild(particle);
    }
  };

  const startScan = () => {
    if (scanning) return;

    setScanning(true);
    setStatus("scanning");

    setTimeout(() => {
      const studentId = "STU" + Math.floor(Math.random() * 9000 + 1000);
      addScan(studentId, "Auto Scan");
      setStatus("success");

      setTimeout(() => {
        setStatus("ready");
        setScanning(false);
      }, 2000);
    }, 2000);
  };

  const manualEntry = () => {
    const studentId = prompt("Enter Student ID:");
    if (studentId) addScan(studentId, "Manual Entry");
  };

  const addScan = (id, name) => {
    const newScan = {
      id,
      name,
      time: new Date().toLocaleTimeString(),
    };
    setScans((prev) => [newScan, ...prev]);
  };

  return (
    <>
      <div className="particles" id="particles"></div>

      <div className="scanner-container">
        <div className="header">
          <div className="logo">🔐</div>
          <h1>QR Scanner</h1>
          <p className="subtitle">Secure Hostel Entry System</p>
        </div>

        <div className="scanner-card">
          <div className={`status-indicator ${status}`}>
            <div className="status-dot"></div>
            <span>
              {status === "ready" && "Ready to Scan"}
              {status === "scanning" && "Scanning..."}
              {status === "success" && "✓ Scan Successful!"}
            </span>
          </div>

          <div className="scan-area">
            <div className="scan-frame">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
            <div className="scan-line"></div>
            <div className="qr-icon">📱</div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={startScan}>
              📷 Scan QR
            </button>
            <button className="btn btn-secondary" onClick={manualEntry}>
              ⌨️ Manual
            </button>
          </div>

          <div className="info-grid">
            <div className="info-box">
              <div className="info-number">{scans.length}</div>
              <div className="info-label">Today</div>
            </div>
            <div className="info-box">
              <div className="info-number">{scans.length}</div>
              <div className="info-label">Active</div>
            </div>
            <div className="info-box">
              <div className="info-number">{scans.length}</div>
              <div className="info-label">Total</div>
            </div>
          </div>

          <div className="recent-scans">
            <div className="recent-title">Recent Scans</div>

            {scans.length === 0 ? (
              <p className="no-scans">No scans yet</p>
            ) : (
              scans.slice(0, 5).map((scan, index) => (
                <div className="scan-item" key={index}>
                  <div className="scan-info">
                    <div className="scan-avatar">
                      {scan.name[0]}
                    </div>
                    <div className="scan-details">
                      <div className="student-id">{scan.id}</div>
                      <div className="scan-time">{scan.time}</div>
                    </div>
                  </div>
                  <div className="scan-badge">Verified</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QR;
