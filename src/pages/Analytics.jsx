import React, { useEffect } from "react";
import "../styles/analytics.css";

const Analytics = () => {

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const particles = document.getElementById("particles");
    if (!particles) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 15 + "s";
      particle.style.animationDuration =
        Math.random() * 10 + 15 + "s";
      particles.appendChild(particle);
    }
  };

  return (
    <>
      <div className="particles" id="particles"></div>

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <div className="logo">📊</div>
            <div className="header-text">
              <h1>Analytics Dashboard</h1>
              <p>Real-time Insights & Performance Metrics</p>
            </div>
          </div>

          <div className="header-actions">
            <button className="btn btn-secondary">
              🔄 Refresh
            </button>
            <button className="btn btn-primary">
              📥 Export Report
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">

          <div className="stat-card purple">
            <div className="stat-header">
              <div className="stat-icon">📈</div>
              <div className="trend-badge up">↑ 12%</div>
            </div>
            <div className="stat-title">Total Entries</div>
            <div className="stat-number">2,847</div>
            <div className="stat-details">
              <div>
                <div className="detail-label">This Week</div>
                <div className="detail-value">324</div>
              </div>
              <div>
                <div className="detail-label">This Month</div>
                <div className="detail-value">1,456</div>
              </div>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-header">
              <div className="stat-icon">🎯</div>
              <div className="trend-badge up">↑ 8%</div>
            </div>
            <div className="stat-title">Today's Entries</div>
            <div className="stat-number">167</div>
            <div className="stat-details">
              <div>
                <div className="detail-label">Morning</div>
                <div className="detail-value">82</div>
              </div>
              <div>
                <div className="detail-label">Evening</div>
                <div className="detail-value">85</div>
              </div>
            </div>
          </div>

          <div className="stat-card blue">
            <div className="stat-header">
              <div className="stat-icon">👥</div>
              <div className="trend-badge up">↑ 5%</div>
            </div>
            <div className="stat-title">Active Students</div>
            <div className="stat-number">1,234</div>
            <div className="stat-details">
              <div>
                <div className="detail-label">Inside</div>
                <div className="detail-value">892</div>
              </div>
              <div>
                <div className="detail-label">Outside</div>
                <div className="detail-value">342</div>
              </div>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-header">
              <div className="stat-icon">⛓️</div>
              <div className="trend-badge up">↑ 100%</div>
            </div>
            <div className="stat-title">Block Height</div>
            <div className="stat-number">15,293</div>
            <div className="stat-details">
              <div>
                <div className="detail-label">Block Time</div>
                <div className="detail-value">2.3s</div>
              </div>
              <div>
                <div className="detail-label">Validators</div>
                <div className="detail-value">8</div>
              </div>
            </div>
          </div>

          <div className="stat-card red">
            <div className="stat-header">
              <div className="stat-icon">✅</div>
              <div className="trend-badge up">↑ 0.1%</div>
            </div>
            <div className="stat-title">System Accuracy</div>
            <div className="stat-number">99.9%</div>
            <div className="stat-details">
              <div>
                <div className="detail-label">Success</div>
                <div className="detail-value">2,844</div>
              </div>
              <div>
                <div className="detail-label">Failed</div>
                <div className="detail-value">3</div>
              </div>
            </div>
          </div>

        </div>

        {/* Charts */}
        <div className="charts-grid">
          <div className="chart-card">
            <h2 className="chart-title">Entry Trends</h2>
            <div className="bar-chart">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d,i)=>(
                <div className="bar-item" key={i}>
                  <div className="bar" style={{height: `${50 + i*5}%`}} />
                  <div className="bar-label">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card">
            <h2 className="chart-title">Entry Methods</h2>
            <div className="pie-chart"></div>
          </div>
        </div>

        {/* Performance */}
        <div className="metrics-grid">
          <Metric icon="⚡" value="2.3s" label="Avg Response" />
          <Metric icon="🎯" value="98.7%" label="Uptime" />
          <Metric icon="💾" value="156GB" label="Storage" />
          <Metric icon="🔒" value="Zero" label="Breaches" />
        </div>

      </div>
    </>
  );
};

const Metric = ({ icon, value, label }) => (
  <div className="metric-card">
    <div className="metric-icon">{icon}</div>
    <div className="metric-value">{value}</div>
    <div className="metric-label">{label}</div>
  </div>
);

export default Analytics;
