import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/home", icon: "🏠" },
    { name: "Focus Rooms", path: "/focus-rooms", icon: "🧘‍♀️" },
    { name: "Pomodoro", path: "/pomodoro", icon: "🍅" },
    { name: "Socials", path: "/socials", icon: "💬" },
    { name: "Rules", path: "/rules", icon: "📜" },
    { name: "Contact Us", path: "/contact-us", icon: "📞" },
    { name: "Donate", path: "/donate", icon: "💸" },
  ];

  return (
    <nav className="sticky-navbar fade-in">
      <div className="nav-container">
        <Link to="/home" className="nav-logo">
          Study <span>Together</span> 🌱
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </Link>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
