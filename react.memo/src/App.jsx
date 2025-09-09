import { useState } from 'react'
import './App.css'
import Child from './Child'

function App() {

  const [count, setCount] = useState(0);



  return (
    <>
      <h1>React Memo</h1>
      <button onClick={() => setCount(count + 1)}> Increment Count {count}</button>
      <Child count={count} />
    </>
  )
}

export default App
