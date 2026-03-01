import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Dashboard = () => {
  const [userName, setUserName] = useState("Friend");
  const [goal, setGoal] = useState("0");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedGoal = localStorage.getItem('studyGoal');
    if (storedName) setUserName(storedName);
    if (storedGoal) setGoal(storedGoal);
  }, []);

  const quotes = [
    "Small steps every day lead to big success.",
    "Focus is the gateway to mastery.",
    "Consistency beats motivation.",
    "Quiet progress is still progress."
  ];

  const activity = [
    { name: "Rahul", detail: "completed 20 hours of focused study today 🎉" },
    { name: "Ananya", detail: "finished her Pomodoro streak! 🔥" },
    { name: "Samira", detail: "joined the 'Deep Focus' room 🧘‍♀️" }
  ];

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header fade-in">
        <div className="welcome-text">
          <h1>Hello, {userName} 🌱</h1>
          <p>Your goal today: <strong>{goal} hours</strong>. You're doing great!</p>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Focus Session Card */}
        <section className="dashboard-card focus-card fade-in">
          <div className="card-header">
            <span className="icon">⏱️</span>
            <h3>Focus Session</h3>
          </div>
          <div className="card-body">
            <p>Ready to dive deep? Join a room with others.</p>
            <div className="rooms-preview">
              <div className="room-pill">Deep Focus (12)</div>
              <div className="room-pill">Quiet Study (45)</div>
            </div>
            <button className="dashboard-btn" onClick={() => navigate('/focus-rooms')}>
              Start Focus Session
            </button>
          </div>
        </section>

        {/* Pomodoro Card */}
        <section className="dashboard-card pomodoro-card fade-in">
          <div className="card-header">
            <span className="icon">🍅</span>
            <h3>Pomodoro Timer</h3>
          </div>
          <div className="card-body">
            <div className="timer-display">25:00</div>
            <div className="timer-controls">
              <button className="timer-btn" onClick={() => navigate('/pomodoro')}>Open Full Timer</button>
            </div>
            <p className="timer-tip">Soft ticking for deep concentration.</p>
          </div>
        </section>

        {/* Motivation Card */}
        <section className="dashboard-card motivation-card fade-in">
          <div className="card-header">
            <span className="icon">✨</span>
            <h3>Daily Motivation</h3>
          </div>
          <div className="card-body">
            <blockquote className="quote">“{quotes[Math.floor(Math.random() * quotes.length)]}”</blockquote>
            <div className="community-feed">
              {activity.map((item, idx) => (
                <div key={idx} className="feed-item">
                  <span className="name">{item.name}</span>
                  <span className="detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reading Card */}
        <section className="dashboard-card books-card fade-in">
          <div className="card-header">
            <span className="icon">📚</span>
            <h3>Recommended Reads</h3>
          </div>
          <div className="card-body">
            <div className="book-grid">
              <div className="book-item">
                <div className="book-cover coral">A.H.</div>
                <div className="book-info">
                  <h4>Atomic Habits</h4>
                  <p>Build better habits through small changes.</p>
                </div>
              </div>
              <div className="book-item">
                <div className="book-cover blue">D.W.</div>
                <div className="book-info">
                  <h4>Deep Work</h4>
                  <p>Learn how to focus in a distracted world.</p>
                </div>
              </div>
              <div className="book-item">
                <div className="book-cover green">P.M.</div>
                <div className="book-info">
                  <h4>Psychology of Money</h4>
                  <p>Understand behavior around finance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
