import { useState , useCallback } from 'react'
import Child from './Child'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fn = () => setCount((count) => count + 1)  

  // funtion rerenders every time the parent renders

  console.log('App Rendered')

  const increment = useCallback(() => {
    // fn()
    // rendering the function only once
    console.log('Incrementing')
    
  }, [])

  return (
    <>
      <button onClick={fn}>Increment Count: {count}</button>
      <Child count={count} increment={increment} />
    </>
  )
}

export default App
