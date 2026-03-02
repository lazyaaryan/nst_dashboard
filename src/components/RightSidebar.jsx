import React from 'react';

function RightSidebar() {
  // Calendar schedule data
  const calendarDays = [
    {
      date: '20', weekday: 'FRI', isToday: true,
      events: [
        { subject: 'WAP - C', type: 'Lecture', time: '10:00 AM - 12:00 PM' },
      ],
    },
    {
      date: '23', weekday: 'MON', isToday: false,
      events: [
        { subject: 'Maths II - C', type: 'Lecture', time: '9:00 AM - 10:30 AM' },
        { subject: 'WAP Lab 2 - C', type: 'Lecture', time: '10:30 AM - 12:00 PM' },
        { subject: 'DSA - C', type: 'Lecture', time: '1:00 PM - 2:30 PM' },
      ],
    },
    {
      date: '24', weekday: 'TUE', isToday: false,
      events: [
        { subject: 'DSA Lab 2 - C', type: 'Lecture', time: '9:00 AM - 10:30 AM' },
        { subject: 'Maths II Tut 2 - C', type: 'Lecture', time: '10:30 AM - 12:00 PM' },
        { subject: 'WAP - C', type: 'Lecture', time: '1:00 PM - 2:30 PM' },
      ],
    },
  ];

  return (
    <div className="right-sidebar">

      {/* Question of the Day */}
      <div className="qotd-card">
        <div className="qotd-header">
          <span className="qotd-live-badge">LIVE</span>
          <span className="qotd-timer">⏰ ENDS IN 12:49:51</span>
        </div>
        <div className="qotd-label">QUESTION OF THE DAY</div>
        <div className="qotd-title">Ser Duncan The Tall</div>
        <div className="qotd-meta">
          <div className="qotd-avatars">
            <span className="qotd-avatar" style={{ background: '#f97316' }}></span>
            <span className="qotd-avatar" style={{ background: '#3b82f6', marginLeft: '-8px' }}></span>
            <span className="qotd-avatar" style={{ background: '#22c55e', marginLeft: '-8px' }}></span>
          </div>
          <span className="qotd-participants">117 people have attempted</span>
        </div>
        <button className="qotd-solve-btn">Solve Now →</button>
      </div>

      {/* Calendar */}
      <div className="calendar-section">
        <div className="calendar-header">
          <div className="calendar-title">
            <span>Calendar</span>
            <span className="calendar-icon">📅</span>
          </div>
          <span className="calendar-view-btn">View ▾</span>
        </div>
        <div className="calendar-subtitle">Your schedule for the next days</div>

        <div className="calendar-alert">
          You have <strong>1 event</strong> today
        </div>

        {calendarDays.map((day, dayIndex) => (
          <div key={dayIndex}>
            <div className="cal-day">
              <div className="cal-day-label">
                <span className={`cal-date ${day.isToday ? 'today' : ''}`}>{day.date}</span>
                <span className="cal-weekday">{day.weekday}</span>
              </div>
              <div className="cal-events">
                {day.events.map((event, eventIndex) => (
                  <div className="cal-event" key={eventIndex}>
                    <div className="cal-event-subject">{event.subject}</div>
                    <div className="cal-event-type">{event.type}</div>
                    <div className="cal-event-time">{event.time}</div>
                  </div>
                ))}
              </div>
            </div>
            {dayIndex < calendarDays.length - 1 && <div className="cal-day-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
