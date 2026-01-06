import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

const Admin = () => {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const container = document.getElementById("particles");
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 20 + "s";
      container.appendChild(p);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="admin-page">
      <div id="particles"></div>

      {/* 🔴 LOGOUT BUTTON (ALWAYS VISIBLE) */}
      <button
        onClick={handleLogout}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
          padding: "12px 20px",
          background: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Logout
      </button>

      <div className="container">
        {/* HEADER */}
        <div className="header">
          <div className="header-left">
            <div className="logo">⚙️</div>
            <div>
              <h1>Admin Control Panel</h1>
              <p>System Management & Configuration</p>
            </div>
          </div>

          <div className="admin-profile">
            <div className="profile-avatar">A</div>
            <div>
              <div className="profile-name">Admin User</div>
              <div className="profile-role">System Administrator</div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="main-grid">
          <div className="card">
            <h3>👥 Student Management</h3>
            <button onClick={() => setModal("add")}>➕ Add Student</button>
            <button>🔍 Search</button>
          </div>

          <div className="card">
            <h3>🔐 Access Control</h3>
            <label><input type="checkbox" defaultChecked /> QR Scanner</label>
            <label><input type="checkbox" defaultChecked /> NFC</label>
            <label><input type="checkbox" defaultChecked /> Face</label>
            <label><input type="checkbox" defaultChecked /> Fob</label>
            <button className="danger">🚨 Emergency Lock</button>
          </div>

          <div className="card">
            <h3>📊 Reports</h3>
            <select>
              <option>Daily Attendance</option>
              <option>Monthly Report</option>
            </select>
            <button>📄 Generate</button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Student</h3>
            <input placeholder="Student ID" />
            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <button onClick={() => setModal(null)}>Save</button>
            <button onClick={() => setModal(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
