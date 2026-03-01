import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Socials from "./pages/Socials";
import Rules from "./pages/Rules";
import ContactUs from "./pages/ContactUs";
import FocusRooms from "./pages/FocusRooms";
import Donate from "./pages/Donate";
import Pomodoro from "./pages/Pomodoro";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import "./components/App.css"; // Import global styles

const AppContent = () => {
  const location = useLocation();
  const hideNavbarOn = ["/", "/onboarding"];
  const showNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/focus-rooms" element={<FocusRooms />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
