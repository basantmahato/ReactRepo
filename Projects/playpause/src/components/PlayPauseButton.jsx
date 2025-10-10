import React, { useState } from 'react';

// const SOUND_URL = '/sample-12s.mp3'; 

const PlayPauseButton = () => {
 
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
  
    setIsPlaying(prevIsPlaying => {
      const newState = !prevIsPlaying;
      
      
      try {
          const audio = new Audio(SOUND_URL);
        
          audio.volume = 0.5; 
          audio.play().catch(error => {
          
              console.warn("Could not play sound (Browser Autoplay Policy):", error.message);
          });
      } catch (error) {
          console.error("Error creating audio object:", error);
      }

      return newState;
    });
  };

  // Determine the display based on the state
  const buttonIcon = isPlaying ? '⏸️' : '▶️';
  const buttonText = isPlaying ? 'Pause' : 'Play';
  
  // Dynamic Tailwind Classes based on state
  const bgColor = isPlaying ? 'bg-red-200 hover:bg-red-300' : 'bg-green-200 hover:bg-green-300';
  const ringColor = isPlaying ? 'ring-red-500' : 'ring-green-500';

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <p className="text-xl mb-4 text-gray-700 font-medium">
        Current State: <span className="font-bold text-gray-900">{buttonText}</span>
      </p>

      {/* The main button styled with Tailwind CSS */}
      <button
        onClick={handleToggle}
        className={`
          flex items-center space-x-2 
          p-4 rounded-full shadow-lg transition-all duration-200 ease-in-out
          text-3xl font-semibold text-gray-800
          border-4 border-gray-600 
          focus:outline-none focus:ring-4 ${ringColor} focus:ring-opacity-50
          ${bgColor}
        `}
        aria-pressed={isPlaying}
        title={`${buttonText} Button`}
      >
        {/* Icon */}
        <span role="img" aria-label={buttonText} className="text-4xl leading-none">
          {buttonIcon}
        </span>
        
        {/* Text */}
        <span className="hidden sm:inline">{buttonText}</span>
      </button>

    
      
    </div>
  );
};

export default PlayPauseButton;