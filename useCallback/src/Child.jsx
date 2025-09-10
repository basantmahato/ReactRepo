import React from 'react'

const Child = React.memo(({ count, increment }) => {

    console.log('Child Rendered')
  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={increment}>Increment from Child</button>
    </div>
  )
})

export default Child
