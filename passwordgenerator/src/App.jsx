import React, { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-green-800 bg-green-200 p-5">
      <h2 className="text-lg font-bold mb-4 text-center">Password Generator</h2>

      {/* Display + Copy */}
      <div className="flex items-center shadow rounded-lg overflow-hidden mb-4 my-5 bg-amber-50">
        <input
          type="text"
          value={password}
          className="border-none outline-none w-full p-2"
          placeholder="Your Secure Password"
          readOnly
        />
        <button
          onClick={() => navigator.clipboard.writeText(password)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 text-sm">
        {/* Length */}
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            max={20}
            min={6}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-sm">Length: {length}</label>
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-sm">
            Include Numbers
          </label>
        </div>

        {/* Symbols */}
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput" className="text-sm">
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
