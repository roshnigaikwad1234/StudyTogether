import React from "react";
import "./Rules.css";

const Rules = () => {
  const rules = [
    { title: "Peaceful Environment", detail: "Maintain a calm and respectful tone in all our shared spaces." },
    { title: "Focused Growth", detail: "Set small, manageable goals and celebrate your daily progress." },
    { title: "Community Support", detail: "Help others when you can, and don't hesitate to ask for help yourself." },
    { title: "Inclusive Learning", detail: "Be kind to everyone, regardless of their background or current level." },
    { title: "No Pressure", detail: "This is a space to learn at your own pace. Consistency beats intensity." },
    { title: "Safe Digital Space", detail: "Prioritize privacy and data security in all your interactions." }
  ];

  return (
    <div className="rules-wrapper">
      <header className="rules-header fade-in">
        <h1>Community Guidelines 📜</h1>
        <p>Our rules are designed to keep this space peaceful and motivating for everyone.</p>
      </header>
      <div className="rules-list">
        {rules.map((rule, index) => (
          <div key={index} className="rule-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="rule-number">{index + 1}</div>
            <div className="rule-content">
              <h3>{rule.title}</h3>
              <p>{rule.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="rules-footer">Let's grow together in peace and focus. 🌱</p>
    </div>
  );
};

export default Rules;
