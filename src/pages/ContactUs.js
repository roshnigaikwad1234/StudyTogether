import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card fade-in">
        <span className="contact-icon">📧</span>
        <h1>Get in Touch</h1>
        <p>We'd love to hear your feedback or answer any questions you may have.</p>
        <div className="email-box">
          <a href="mailto:roshnigaikwad3619@gmail.com">roshnigaikwad3619@gmail.com</a>
        </div>
        <p className="footer-note">We usually respond within 24 hours. 🌱</p>
      </div>
    </div>
  );
};

export default ContactUs;
