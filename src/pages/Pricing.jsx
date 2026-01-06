import React from "react";

const Pricing = () => {
  return (
    <div style={pageStyle}>
      <h1>Pricing Plans</h1>
      <p>
        Choose the best plan for your institution. Transparent pricing with
        no hidden charges.
      </p>

      <ul>
        <li>🟢 Basic – Free (Limited Features)</li>
        <li>🔵 Standard – ₹999 / month</li>
        <li>🟣 Enterprise – Custom Pricing</li>
      </ul>
    </div>
  );
};

const pageStyle = {
  minHeight: "100vh",
  padding: "120px 80px",
  color: "white",
};

export default Pricing;
