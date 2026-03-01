import React, { useState, useEffect } from "react";
import "./Pomodoro.css";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && minutes === 0 && seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="timer-card fade-in">
      <div className={`timer-display-main ${isActive ? 'ticking' : ''}`}>
        {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      </div>
      <div className="timer-controls">
        <button onClick={toggleTimer} className={`timer-action-btn ${isActive ? 'pause' : 'start'}`}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="timer-reset-btn">
          Reset
        </button>
      </div>
      <div className="timer-footer">
        <p>“Focus is the gateway to mastery.”</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
