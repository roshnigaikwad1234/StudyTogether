import React from "react";
import PomodoroTimer from "./pomodorotimer";
import "./Pomodoro.css";

const Pomodoro = () => {
  return (
    <div className="pomodoro-container">
      <header className="pomodoro-header fade-in">
        <h1>Pomodoro Timer 🍅</h1>
        <p>Focus deeply for 25 minutes, then take a gentle break.</p>
      </header>
      <div className="pomodoro-content fade-in">
        <PomodoroTimer />
      </div>
    </div>
  );
};

export default Pomodoro;
