import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';

const Onboarding = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && goal) {
            localStorage.setItem('userName', name);
            localStorage.setItem('studyGoal', goal);
            navigate('/home');
        }
    };

    return (
        <div className="onboarding-container">
            <div className="onboarding-card fade-in">
                <div className="onboarding-header">
                    <span className="emoji">🌱</span>
                    <h2>Let's Grow Together</h2>
                    <p>Tell us a bit about your journey today.</p>
                </div>
                <form onSubmit={handleSubmit} className="onboarding-form">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input
                            type="text"
                            placeholder="Your name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Today's study goal (in hours)</label>
                        <input
                            type="number"
                            placeholder="e.g. 4"
                            min="1"
                            max="24"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            required
                        />
                    </div>
                    <p className="encouragement">“Let's set a small goal and grow together 🌱”</p>
                    <button type="submit" className="onboarding-button">
                        Start My Adventure
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Onboarding;
