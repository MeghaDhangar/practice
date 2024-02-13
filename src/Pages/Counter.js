import React, { useState } from 'react'

function Counter() {
  const [count,setcount]=useState(0);
  
  const decrement=()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  const increment=()=>{
    setcount(count+1)
  }
  return (
    <div>
      <h2>Create a Counter</h2>
      <h2>{count}</h2>
      <button onClick={decrement} >-</button>
      <button onClick={increment} >+</button>
    </div>
  )
}

export default Counter
