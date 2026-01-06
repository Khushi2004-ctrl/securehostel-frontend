const express = require("express");
const router = express.Router();

/*
  GET ANALYTICS DATA
  GET /api/analytics
*/
router.get("/", (req, res) => {
  res.json({
    totalEntries: 2847,
    todayEntries: 167,
    activeStudents: 1234,
    accuracy: "99.9%",
    trends: {
      Mon: 320,
      Tue: 410,
      Wed: 380,
      Thu: 450,
      Fri: 520,
      Sat: 380,
      Sun: 387,
    },
    performance: {
      avgResponse: "2.3s",
      uptime: "98.7%",
      storage: "156GB",
      breaches: 0,
    },
  });
});

module.exports = router;
