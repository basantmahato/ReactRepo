import React from 'react'

const Child = React.memo(({ count }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
    </div>
  )
})


export default Child
