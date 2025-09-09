import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }


  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

  

export default App
