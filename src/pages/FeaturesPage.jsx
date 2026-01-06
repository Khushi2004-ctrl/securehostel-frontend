import React from "react";
import Footer from "../components/Footer";

const FeaturesPage = () => {
  return (
    <div style={{ padding: "120px 80px", color: "white" }}>
      <h1>Platform Features</h1>
      <p style={{ marginTop: "20px", maxWidth: "800px", lineHeight: "1.7" }}>
        SecureHostel provides a modern, secure, and efficient hostel management
        system designed to simplify attendance tracking and administration.
      </p>

      <ul style={{ marginTop: "30px", lineHeight: "2" }}>
        <li>✔ Secure login for Admin & Warden</li>
        <li>✔ Real-time student attendance tracking</li>
        <li>✔ Analytics dashboard with insights</li>
        <li>✔ Role-based access control</li>
        <li>✔ Scalable and user-friendly interface</li>
      </ul>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
