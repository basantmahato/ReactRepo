import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "yellow" },
    { name: "Purple", value: "purple" },
    { name: "Orange", value: "orange" },
    { name: "Pink", value: "pink" }, 
  ];

  return (
    <div
      className="w-full h-screen flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="absolute bottom-12 inset-x-0 flex justify-center">
        <div className="bg-white/80 backdrop-blur-md shadow-2xl px-6 py-4 rounded-2xl flex gap-4 flex-wrap justify-center">
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={() => setColor(c.value)}
              className="w-12 h-12 rounded-xl shadow-md transition-transform transform hover:scale-110 hover:rotate-3 border border-gray-200"
              style={{ backgroundColor: c.value }}
              title={c.name}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

