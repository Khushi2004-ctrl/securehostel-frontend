const express = require("express");
const router = express.Router();

/*
  TEMP USERS (Later DB se aayega)
*/
const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    username: "warden",
    password: "warden123",
    role: "warden",
  },
];

/*
  LOGIN API
  POST /api/auth/login
*/
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password required",
    });
  }

  // User check
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // SUCCESS
  res.json({
    success: true,
    message: "Login successful",
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  });
});

module.exports = router;
