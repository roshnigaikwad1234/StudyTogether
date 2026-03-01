import React from "react";
import googlePayImage from "../assets/googlepay.jpg";
import "./Donate.css";

const Donate = () => {
  return (
    <div className="donate-wrapper">
      <header className="donate-header fade-in">
        <h1>Support Our Mission 💸</h1>
        <p>Help us keep this space clean, calm, and accessible for everyone.</p>
      </header>
      <div className="donate-card fade-in">
        <div className="donate-image-section">
          <img src={googlePayImage} alt="Support Us" className="donate-image" />
        </div>
        <div className="donate-info">
          <h3>Empower the Pursuit of Knowledge!</h3>
          <p>
            Your contribution fuels our commitment to creating the most peaceful digital study room on the web.
            All donations go directly toward server costs and developing new learning features.
          </p>
          <p className="tagline">“Small acts, when multiplied by many, can transform the world.”</p>
          <div className="support-badge">#SupportEducation 🌱</div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
