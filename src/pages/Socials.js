import React from "react";
import "./Socials.css";
import instagramLogo from "../assets/instagramlogo.avif";
import discordLogo from "../assets/discordlogo.png";
import linkedinLogo from "../assets/linkedin.png";

const Socials = () => {
  const socialData = [
    {
      name: "Instagram",
      logo: instagramLogo,
      description: "Daily study tips, inspiration, and student life updates.",
      link: "https://www.instagram.com/roshni_gaikwad_3619",
      btnText: "Follow Us",
      color: "var(--soft-pink)"
    },
    {
      name: "Discord",
      logo: discordLogo,
      description: "Join 24/7 study rooms and chat with students worldwide.",
      link: "https://discord.gg/BmGTFM74",
      btnText: "Join Server",
      color: "var(--soft-blue)"
    },
    {
      name: "LinkedIn",
      logo: linkedinLogo,
      description: "Connect with us professionally and share your learning milestones.",
      link: "https://www.linkedin.com/",
      btnText: "Connect Now",
      color: "var(--warm-beige)"
    }
  ];

  return (
    <div className="socials-wrapper">
      <header className="socials-header fade-in">
        <h1>Connect with Us 💬</h1>
        <p>Join our community across different platforms and stay inspired.</p>
      </header>

      <div className="socials-grid">
        {socialData.map((social, index) => (
          <div key={index} className="social-card fade-in" style={{ '--accent': social.color }}>
            <div className="social-logo-container">
              <img src={social.logo} alt={social.name} className="social-logo" />
            </div>
            <h3>{social.name}</h3>
            <p>{social.description}</p>
            <button className="social-btn" onClick={() => (window.location.href = social.link)}>
              {social.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
