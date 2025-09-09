import React, { useRef, useState } from "react";

function RefExample() {
  const [count, setCount] = useState(10);
  const renderCount = useRef(0);

  // Increase ref value (but no re-render happens)
  renderCount.current += 1;

  console.log("🔄 Component rendered!");

  return (
    <div>
      <h2>useRef Example</h2>
      <p>Count: {count}</p>
      <p>Renders (tracked using useRef): {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RefExample;
