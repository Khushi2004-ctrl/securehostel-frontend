import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={pageStyle}>
      {/* 🔴 LOGOUT BUTTON */}
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

      <h1>Dashboard</h1>
      <p>
        Welcome to the SecureHostel dashboard. Monitor attendance statistics,
        system activity, and real-time insights from a single place.
      </p>

      <ul>
        <li>📈 Daily & Monthly Attendance</li>
        <li>👥 Active Students Overview</li>
        <li>⚙️ System Performance</li>
        <li>🔔 Alerts & Logs</li>
      </ul>
    </div>
  );
};

const pageStyle = {
  minHeight: "100vh",
  padding: "120px 80px",
  color: "white",
};

export default Dashboard;
