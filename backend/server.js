const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);

// TEST ROOT
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
