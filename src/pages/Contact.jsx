import React from "react";

const Contact = () => {
  return (
    <div style={pageStyle}>
      <h1>Contact Us</h1>
      <p>
        Get in touch with us for support, feedback, or collaboration.
      </p>

      <ul>
        <li>📧 Email: support@securehostel.com</li>
        <li>📞 Phone: +91-XXXXXXXXXX</li>
        <li>🏢 Address: India</li>
      </ul>
    </div>
  );
};

const pageStyle = {
  minHeight: "100vh",
  padding: "120px 80px",
  color: "white",
};

export default Contact;
