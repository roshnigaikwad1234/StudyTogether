import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import bgVideo from '../assets/background-video.mp4';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStartLearning = () => {
        navigate('/onboarding');
    };

    return (
        <div className="landing-container">
            <video autoPlay loop muted className="background-video">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="content">
                <h1 className="title">Elevate Your Learning Journey</h1>
                <p className="subtitle">Discover a world of resources, collaborative spaces, and focused growth.</p>
                <button className="cta-button" onClick={handleStartLearning}>
                    Start Learning Now
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
