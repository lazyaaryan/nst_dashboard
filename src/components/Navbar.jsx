import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      {/* Left - Logo */}
      <div className="nav-left">
        <div className="nav-left-content">
          <img src="/img/NST-logo.png" alt="NST Logo" className="shield" />
          <span>NST'25 CS+AI RU</span>
          <span className="arrow">▾</span>
        </div>
      </div>

      {/* Center - Athena Banner */}
      <div className="nav-athena">
        <div className="banner-text">
          <span>Download the latest version of Athena.</span>
          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* Right - XP & Actions */}
      <div className="nav-right">
        <div className="xp-box">
          <span>Total XP</span>
          <div className="xp-score">
            <img src="/img/XP.png" alt="XP" className="coin" />
            <span className="xp-value">7,470</span>
          </div>
        </div>
        <div className="nav-actions">
          <span className="divider"></span>
          <div className="nav-icon-wrapper">
            <span className="nav-icon">👥</span>
            <span className="notification-dot"></span>
          </div>
          <div className="nav-icon-wrapper">
            <span className="nav-icon">🔔</span>
          </div>
          <div className="avatar" style={{ background: 'linear-gradient(135deg, #00c6ff, #0072ff)' }}></div>
          <span className="nav-chevron">▾</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
