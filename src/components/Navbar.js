import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
