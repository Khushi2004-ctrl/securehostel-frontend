import React, { useEffect, useRef, useState } from "react";
import "../styles/face.css";

const Face = () => {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [status, setStatus] = useState("Camera Ready");
  const [scans, setScans] = useState([]);

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const container = document.getElementById("particles");
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 12 + "s";
      container.appendChild(p);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      videoRef.current.srcObject = stream;
      setCameraOn(true);
      setStatus("Position your face in frame");
    } catch {
      setStatus("Camera permission denied");
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setCameraOn(false);
    setStatus("Camera Ready");
  };

  const scanFace = () => {
    setStatus("Scanning...");
    setTimeout(() => {
      const id = "FACE" + Math.floor(Math.random() * 9000);
      setScans([{ id, time: new Date() }, ...scans]);
      setStatus("✓ Face Recognized");
    }, 2000);
  };

  return (
    <div className="face-page">
      <div id="particles"></div>

      <div className="scanner-container">
        <div className="header">
          <div className="logo">👤</div>
          <h1>Face ID Scanner</h1>
          <p className="subtitle">Biometric Facial Recognition</p>
        </div>

        <div className="scanner-card">
          <div className="status">{status}</div>

          <div className="camera-box">
            {!cameraOn && <p>Click Start Camera</p>}
            <video ref={videoRef} autoPlay playsInline />
          </div>

          <div className="buttons">
            {!cameraOn ? (
              <button onClick={startCamera}>📹 Start Camera</button>
            ) : (
              <>
                <button onClick={scanFace}>👁 Scan Face</button>
                <button onClick={stopCamera}>⛔ Stop</button>
              </>
            )}
          </div>

          <div className="recent">
            <h3>Recent Recognitions</h3>
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

export default Face;
