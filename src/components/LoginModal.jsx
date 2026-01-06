import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginModal.css";

const LoginModal = ({ show, close }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );

      if (res.data?.success && res.data?.user) {
        const user = res.data.user;

        // ✅ SAVE USER PROPERLY
        localStorage.setItem("user", JSON.stringify({
          username: user.username,
          role: user.role
        }));

        close(); // close modal

        // ✅ ROLE BASED REDIRECT
        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "warden") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert("Invalid login response");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="modal-close" onClick={close}>×</span>

        <h2 className="modal-title">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="modal-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="modal-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-submit-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
