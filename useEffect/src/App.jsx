import {  useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'  

function App() {

  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)

// run on every render

  useEffect(() => {
    alert("Welcome to useEffect")
  
    return () => {
    }
  }, [])

  // run when count changes
  
  useEffect(() => {
    alert(`Count updated ${count}`)
    return () => {

    }
  }, [count])


  // run when first changes


    useEffect(() => {
      alert(`First updated ${first}`)
    
      return () => {
        
      }
    }, [first])
    

  

  return (
    <>
      <Navbar first={first}/>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => { setCount(count + 1); setfirst(first + 5); }}>Increment</button>
    </div>

    </>
  )
}

export default App
