import React, { useEffect, useState } from "react";
import "../styles/nfcScanner.css";

const NFCScanner = () => {
  const [scans, setScans] = useState([]);
  const [status, setStatus] = useState("ready");
  const [statusText, setStatusText] = useState("Ready to Detect");
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    createParticles();
  }, []);

  const startNFCScan = () => {
    if (scanning) return;

    setScanning(true);
    setStatus("scanning");
    setStatusText("Detecting NFC Tag...");

    setTimeout(() => {
      const studentId = "NFC" + Math.floor(Math.random() * 9000 + 1000);
      const names = ["Emma", "Liam", "Olivia", "Noah", "Ava"];
      const name = names[Math.floor(Math.random() * names.length)];

      const newScan = {
        id: studentId,
        name,
        time: new Date().toLocaleTimeString(),
      };

      setScans(prev => [newScan, ...prev]);

      setStatus("success");
      setStatusText("✓ NFC Tag Verified!");

      setTimeout(() => {
        setStatus("ready");
        setStatusText("Ready to Detect");
        setScanning(false);
      }, 2000);
    }, 1500);
  };

  const createParticles = () => {
    const container = document.getElementById("particles");
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 15 + "s";
      p.style.animationDuration = Math.random() * 10 + 15 + "s";
      container.appendChild(p);
    }
  };

  return (
    <>
      <div className="particles" id="particles"></div>

      <div className="scanner-container">
        <div className="header">
          <div className="logo">📡</div>
          <h1>NFC Scanner</h1>
          <p className="subtitle">Near Field Communication Entry</p>
        </div>

        <div className="scanner-card">
          <div className={`status-indicator ${status}`}>
            <div className="status-dot"></div>
            <span>{statusText}</span>
          </div>

          <div className="nfc-area">
            <div className="nfc-waves">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            <div className="nfc-icon">📱</div>
          </div>

          <div className="instruction-box">
            <div className="instruction-title">📍 How to Use</div>
            <div className="instruction-text">
              Hold your NFC card or phone near the scanner. The system will
              automatically detect and verify your credentials.
            </div>
          </div>

          <button className="btn btn-primary" onClick={startNFCScan}>
            📡 Activate NFC Scanner
          </button>

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
            <div className="recent-title">Recent NFC Detections</div>

            {scans.length === 0 ? (
              <p className="empty">No detections yet</p>
            ) : (
              scans.slice(0, 5).map((scan, index) => (
                <div className="scan-item" key={index}>
                  <div className="scan-info">
                    <div className="scan-avatar">{scan.name[0]}</div>
                    <div>
                      <div className="student-id">{scan.id}</div>
                      <div className="scan-time">{scan.time}</div>
                    </div>
                  </div>
                  <div className="scan-badge">NFC ✓</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFCScanner;
