import React from "react";

const Help = () => {
  return (
    <div style={pageStyle}>
      <h1>Help Center</h1>
      <p>
        Need help? Find answers to common questions or contact our support team.
      </p>

      <ul>
        <li>📘 How to use SecureHostel</li>
        <li>🔑 Login & Access Issues</li>
        <li>📊 Dashboard Guide</li>
        <li>📞 Support Assistance</li>
      </ul>
    </div>
  );
};

const pageStyle = {
  minHeight: "100vh",
  padding: "120px 80px",
  color: "white",
};

export default Help;
