import React, { useRef } from 'react';

function MainContent() {
  const latestScrollRef = useRef(null);
  const deadlineScrollRef = useRef(null);

  // Scroll handler for card rows
  const scrollCards = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 336;
      ref.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Latest Released cards data
  const latestCards = [
    {
      tag: 'DSA - C', badgeIcon: '/img/monitor-play.png', badgeText: 'AI Mock Interview', badgeClass: 'badge-ai',
      title: 'DSA Mock AI Interview',
      deadline: 'Deadline is Feb 26th 2026, 6:00 pm',
      meta: 'Attempts Left: 3',
      footerType: 'attempt', duration: '45 minutes',
    },
    {
      tag: 'WAP - C', badgeIcon: '/img/scroll-text.png', badgeText: 'Post Class', badgeClass: 'badge-post',
      title: 'Data Fetching using JavaScript, Introduction to API & methods,...',
      deadline: 'Deadline is Feb 24th 2026, 5:53 pm',
      stats: { multiplier: '2x', dotClass: 'dot-red', score: '0/40' },
      footerType: 'solve', progress: { done: 0, total: 1 },
    },
    {
      tag: 'WAP - C', badgeIcon: '/img/scroll-text.png', badgeText: 'Post Class', badgeClass: 'badge-post',
      title: 'Data Fetching using JavaScript, Introduction to API & methods,...',
      deadline: 'Deadline is Feb 24th 2026, 5:53 pm',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/16' },
      footerType: 'solve', progress: { done: 0, total: 5 },
    },
    {
      tag: 'WAP - C', badgeIcon: '/img/file-question-mark.png', badgeText: 'Quiz', badgeClass: 'badge-quiz',
      title: 'Data Fetching using JavaScript, Introduction to API & methods,...',
      deadline: 'Deadline is Feb 24th 2026, 2:15 pm',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/40' },
      footerType: 'solve', progress: { done: 0, total: 1 },
    },
    {
      tag: 'DSA Lab 2 - C', badgeIcon: '/img/file-question-mark.png', badgeText: 'In Class', badgeClass: 'badge-in-class',
      title: 'Data Fetching using JavaScript, Introduction to API & methods,...',
      deadline: 'Deadline is Feb 24th 2026, 2:15 pm',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/40' },
      footerType: 'solve', progress: { done: 0, total: 1 },
    },
    {
      tag: 'DSA - C', badgeIcon: '/img/file-question-mark.png', badgeText: 'In Class', badgeClass: 'badge-in-class',
      title: 'Constructor Implementation, Custom Data Structure - In Class',
      deadline: 'Deadline is Feb 24th 2026, 9:11 am',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/60' },
      footerType: 'solve', progress: { done: 0, total: 2 },
    },
  ];

  // Upcoming Deadline cards data
  const deadlineCards = [
    {
      tag: 'Maths II - C', badgeIcon: '/img/file-question-mark.png', badgeText: 'Quiz', badgeClass: 'badge-quiz',
      dueText: 'due tomorrow', dueClass: 'due-tomorrow',
      title: 'Mean, Expected value, Linearity of Expectation, Variance, Standard...',
      deadline: 'Deadline is Feb 21st 2026, 12:38 pm',
      stats: { multiplier: '2x', dotClass: 'dot-red', score: '0/18' },
      progress: { done: 0, total: 6 },
    },
    {
      tag: 'DSA - C', badgeIcon: '/img/scroll-text.png', badgeText: 'Post Class', badgeClass: 'badge-post',
      dueText: 'due tomorrow', dueClass: 'due-tomorrow',
      title: 'Object Oriented Programming, Python OOPs, Python Attributes...',
      deadline: 'Deadline is Feb 21st 2026, 6:36 pm',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/100' },
      progress: { done: 0, total: 3 },
    },
    {
      tag: 'WAP - C', badgeIcon: '/img/scroll-text.png', badgeText: 'Post Class', badgeClass: 'badge-post',
      dueText: 'due tomorrow', dueClass: 'due-tomorrow',
      title: 'JavaScript Promises, Creating Promises in JavaScript, JavaScript...',
      deadline: 'Deadline is Feb 22nd 2026, 8:06 pm',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/60' },
      progress: { done: 0, total: 2 },
    },
    {
      tag: 'Maths II - C', badgeIcon: '/img/file-question-mark.png', badgeText: 'Quiz', badgeClass: 'badge-quiz',
      dueText: 'due in 2 days', dueClass: 'due-2days',
      title: 'Bernoulli Distribution, PMF of bernoulli distribution, CDF of...',
      deadline: 'Deadline is Feb 23rd 2026, 1:06 pm',
      stats: { multiplier: '2x', dotClass: 'dot-green', score: '0/8' },
      progress: { done: 0, total: 2 },
    },
    {
      tag: 'DSA - C', badgeIcon: '/img/scroll-text.png', badgeText: 'Post Class', badgeClass: 'badge-post',
      dueText: 'due on 23 Feb', dueClass: 'due-date',
      title: 'Constructor Implementation, Custom Data Structure - Post Class',
      deadline: 'Deadline is Feb 23rd 2026, 10:00 pm',
      stats: { multiplier: '2x', dotClass: 'dot-red', score: '0/80' },
      progress: { done: 0, total: 2 },
    },
  ];

  // Lectures data
  const lectures = [
    { tag: 'WAP - C', title: 'Project & Js Core', duration: '02:00:00', score: '0/30', date: 'February 20, 2026' },
    { tag: 'Maths II - C', title: 'Mean, Expected value, Lineari...', duration: '01:45:00', score: '15/30', date: 'February 18, 2026' },
    { tag: 'WAP - C', title: 'Data Fetching using JavaScrip...', duration: '01:30:00', score: '30/30', date: 'February 19, 2026' },
    { tag: 'Maths II Tut 2 - C', title: 'Counting, Counting Multiple ev...', duration: '01:30:00', score: '30/30', date: 'February 19, 2026' },
    { tag: 'DSA Lab 2 - C', title: 'Constructor Implementation, ...', duration: '01:30:00', score: '0/30', date: 'February 19, 2026' },
  ];

  // Performance data
  const perfData = [
    { icon: '/img/monitor-play.png', label: 'Lecture', value: '83%', count: '(69/81)' },
    { icon: '/img/scroll-text.png', label: 'My Assignments', value: '51%', count: '(131/255)' },
    { icon: '/img/trophy.png', label: 'Contests', value: '77%', count: '(18/18)' },
    { icon: '/img/file-question-mark.png', label: 'Quizzes', value: '5%', count: '(1/17)' },
  ];

  // Renders a single task card
  const renderTaskCard = (card, index, bgClass) => (
    <div className={`task-card ${bgClass}`} key={index}>
      <div className="card-body">
        <div className="card-tag">{card.tag}</div>

        {card.dueText ? (
          <div className="card-badge-row">
            <span className={`card-badge ${card.badgeClass}`}>
              <img src={card.badgeIcon} className="badge-icon-img" alt="" /> {card.badgeText}
            </span>
            <span className={`due-badge ${card.dueClass}`}>{card.dueText}</span>
          </div>
        ) : (
          <div className={`card-badge ${card.badgeClass}`}>
            <img src={card.badgeIcon} className="badge-icon-img" alt="" /> {card.badgeText}
          </div>
        )}

        <div className="card-title">{card.title}</div>
        <div className="card-deadline">{card.deadline}</div>

        {card.meta && <div className="card-meta-text">{card.meta}</div>}

        {card.stats && (
          <div className="card-stats-row">
            <span className="stat-2x">{card.stats.multiplier}</span>
            <span className={`stat-dot ${card.stats.dotClass}`}></span>
            <span className="stat-score">{card.stats.score}</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        {card.footerType === 'attempt' ? (
          <>
            <div className="card-stats"><span>⏰ {card.duration}</span></div>
            <button className="card-btn btn-attempt">Attempt</button>
          </>
        ) : (
          <>
            <div className="card-progress">
              <strong>{card.progress?.done}</strong> <span>/ {card.progress?.total} Solved</span>
            </div>
            <button className="card-btn btn-solve">Solve</button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="main-content">

      {/* Latest Released */}
      <div className="section">
        <div className="section-header">
          <div>
            <div className="section-title">🔥 Latest Released</div>
            <div className="section-subtitle">All your tasks released recently</div>
          </div>
          <div className="section-nav">
            <span className="nav-arrow" onClick={() => scrollCards(latestScrollRef, 'left')}>&lt;</span>
            <span className="nav-arrow" onClick={() => scrollCards(latestScrollRef, 'right')}>&gt;</span>
          </div>
        </div>
        <div className="cards-scroll" ref={latestScrollRef}>
          {latestCards.map((card, i) => renderTaskCard(card, i, 'bg-gray'))}
        </div>
      </div>

      <div className="center-divider"></div>

      {/* Upcoming Deadlines */}
      <div className="section">
        <div className="section-header">
          <div>
            <div className="section-title">🕑 Upcoming Deadlines</div>
            <div className="section-subtitle">Tasks that are due</div>
          </div>
          <div className="section-nav">
            <span className="nav-arrow" onClick={() => scrollCards(deadlineScrollRef, 'left')}>&lt;</span>
            <span className="nav-arrow" onClick={() => scrollCards(deadlineScrollRef, 'right')}>&gt;</span>
          </div>
        </div>
        <div className="cards-scroll" ref={deadlineScrollRef}>
          {deadlineCards.map((card, i) => renderTaskCard(card, i, 'bg-light-red'))}
        </div>
      </div>

      <div className="center-divider"></div>

      {/* Your Performance */}
      <div className="section">
        <div className="section-title">Your performance</div>
        <div className="perf-alert">
          <span>⚠ 124 pending assignment questions, solve them to boost your placement score.</span>
          <a href="#" className="perf-alert-link">MY ASSIGNMENTS</a>
        </div>
        <div className="perf-grid">
          {perfData.map((perf, index) => (
            <div className="perf-card" key={index}>
              <div className="perf-icon">
                <img src={perf.icon} alt={perf.label} className="perf-icon-img" />
              </div>
              <div className="perf-info">
                <div className="perf-label">{perf.label}</div>
                <div className="perf-value">{perf.value} <span className="perf-count">{perf.count}</span></div>
              </div>
              <span className="perf-arrow">&gt;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Your Lectures */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">Your lectures</div>
          <a href="#" className="view-all-link">VIEW ALL</a>
        </div>
        <div className="section-subtitle-text">Watch the lectures till you get a good grip on all the topics.</div>
        <div className="lectures-scroll">
          {lectures.map((lec, index) => (
            <div className="lecture-card" key={index}>
              <div className="lecture-thumb" style={{ background: 'linear-gradient(135deg, #0ba5e9 0%, #0d3b66 100%)' }}>
                <span className="lecture-tag">{lec.tag}</span>
                <span className="lecture-play">▶</span>
                <span className="lecture-duration">{lec.duration}</span>
              </div>
              <div className="lecture-info">
                <div className="lecture-title">{lec.title}</div>
                <div className="lecture-meta">
                  <span className="stat-orange-bg">2x</span>
                  <span className="stat-dot dot-orange"></span>
                  <span className="stat-score-dark">{lec.score}</span>
                </div>
                <div className="lecture-date">{lec.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Sessions */}
      <div className="section">
        <div className="section-title">Your Sessions</div>
        <div className="session-card">
          <div className="session-icon-box">
            <img src="/img/users.png" alt="Sessions" className="session-icon-img" />
          </div>
          <div className="session-info">
            <div className="session-name">Group Sessions</div>
            <div className="session-count">0</div>
          </div>
          <span className="session-arrow">›</span>
        </div>
      </div>

      {/* Notes */}
      <div className="section">
        <div className="notes-card">
          <div className="notes-left">
            <div className="notes-icon">☰</div>
            <div>
              <div className="notes-title">Notes</div>
              <div className="notes-subtitle">Reading the notes will help you to learn the topics covered in the class.</div>
            </div>
          </div>
          <button className="notes-btn">Read More</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/img/NST-logo.png" alt="Newton School Logo" className="footer-logo-img" />
            <div className="footer-logo-text">Newton School<br />of Technology</div>
          </div>
          <div className="footer-copy">Copyright © 2026 Incanus<br />Technologies Pvt. Ltd. All rights<br />reserved.</div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#">Legal</a>
            <a href="#">Support</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-social">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
            <span>💼</span>
            <span>🎬</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
