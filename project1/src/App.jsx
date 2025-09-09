import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);


  const addValue = () => {
    console.log( counter );

    if (counter >= 10) {
      alert("Counter cannot exceed 10");
      return;   
      
    }else{
    setCounter(counter + 1);}
  }

  const subValue = () => {
    console.log( counter);

    if (counter <= 0) {
      alert("Counter cannot go below zero");
      return;   
      
    } else {
      setCounter(counter - 1);
  }

}

  return (
    <>
      <h1>Project1</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
