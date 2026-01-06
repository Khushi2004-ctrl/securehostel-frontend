import React from "react";

const Security = () => {
  return (
    <div style={pageStyle}>
      <h1>Security</h1>
      <p>
        Security is our top priority. SecureHostel ensures data protection,
        role-based access, and encrypted authentication.
      </p>

      <ul>
        <li>🔒 Encrypted Login System</li>
        <li>🛡️ Role-Based Access Control</li>
        <li>📄 Immutable Records</li>
        <li>⚠️ Unauthorized Access Prevention</li>
      </ul>
    </div>
  );
};

const pageStyle = {
  minHeight: "100vh",
  padding: "120px 80px",
  color: "white",
};

export default Security;
