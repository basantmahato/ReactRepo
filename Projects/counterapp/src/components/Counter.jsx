import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    console.log(count);
  };
  
  const handleDecrement = () => {
    if(count > 0
    ){
        setCount(prev => prev - 1);
    }else{
        alert("Count can not go below zero")
    }
  
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app-container">
      <h1>Simple Counter</h1>

      <div className="counter-display">
        <span>{count}</span> 
      </div>

      <div className="control-group-main">
        <button 
          className="btn btn-decrement" 
          aria-label="Decrease count by one"
          onClick={handleDecrement}
        >
          -
        </button>

        <button 
          className="btn btn-increment" 
          aria-label="Increase count by one"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <div className="control-group-auxiliary">
        <button 
          className="btn btn-reset" 
          aria-label="Reset count to zero"
          onClick={handleReset}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
