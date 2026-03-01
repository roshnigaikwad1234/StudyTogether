import React from "react";
import "./FocusRooms.css";

const FocusRooms = () => {
  const roomLinks = [
    "https://meet.google.com/room1",
    "https://meet.google.com/room2",
    "https://meet.google.com/room3",
    "https://meet.google.com/room4",
    "https://meet.google.com/room5",
  ];

  const handleJoinRoom = (roomIndex) => {
    window.open(roomLinks[roomIndex], "_blank");
  };

  return (
    <div className="focus-rooms-container">
      <header className="focus-header fade-in">
        <h1>Focus Rooms 🧘‍♀️</h1>
        <p>Choose a peaceful space to begin your deep work session.</p>
      </header>

      <div className="rooms-grid">
        {roomLinks.map((link, index) => (
          <div key={index} className="room-card fade-in">
            <div className="room-icon">✨</div>
            <h3>Quiet Space {index + 1}</h3>
            <p>A tranquil environment for focused study and deep concentration.</p>
            <button className="join-btn" onClick={() => handleJoinRoom(index)}>
              Enter Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusRooms;
