import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isLight, setIsLight] = useState(true);

  const handleToggle = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <div className={`toggle-container ${isLight ? "light" : "dark"}`}>
      <div className="toggle-card">
        <h1>{isLight ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
        <button className="toggle-btn" onClick={handleToggle}>
          {isLight ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;

