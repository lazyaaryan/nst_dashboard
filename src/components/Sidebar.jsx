import React from 'react';

function Sidebar() {
  const subjects = [
    'DSA - C',
    'DSA Lab 2 - C',
    'Maths II - C',
    'Maths II Tut 2 - C',
    'WAP - C',
    'WAP Lab 2 - C',
  ];

  const tools = [
    { icon: '/img/workflow.png', label: 'My Timeline' },
    { icon: '/img/users.png', label: 'Expert Sessions' },
    { icon: '/img/calendar.png', label: 'Calendar' },
    { icon: '/img/code.png', label: 'Arena' },
    { icon: '/img/trophy.png', label: 'Leaderboard' },
    { icon: '/img/file-question-mark.png', label: 'Question of the Day' },
  ];

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-title">S2'25 CS+AI RU</div>
        <div className="sidebar-subtitle">Enrolled</div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-container">
        {/* Home */}
        <div className="sidebar-nav">
          <a href="#" className="sidebar-link active">
            <img src="/img/house.png" alt="Home" className="sidebar-icon-img" />
            <span>Home</span>
          </a>
        </div>

        {/* Subjects */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">Subjects</div>
          <div className="subjects-card">
            {subjects.map((subject, index) => (
              <a href="#" className="sidebar-link" key={index}>
                {subject}
              </a>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="sidebar-nav">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">&#9776;</span>
            <span>Scorecard</span>
          </a>
          {tools.map((tool, index) => (
            <a href="#" className="sidebar-link" key={index}>
              <img src={tool.icon} alt={tool.label} className="sidebar-icon-img" />
              <span>{tool.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="sidebar-bottom">
        <a href="#" className="sidebar-link bottom-link concern-link">
          <img src="/img/shield-question-mark.png" alt="Concern" className="sidebar-icon-img" />
          <span>Share a Concern</span>
        </a>
        <a href="#" className="sidebar-link bottom-link">
          <img src="/img/circle-question-mark.png" alt="Support" className="sidebar-icon-img" />
          <span>Help &amp; Support</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
