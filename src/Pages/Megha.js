// import React from 'react'
// import { useState } from 'react'

// function Megha()  {
//    const [count,setCount]=useState(0)
//    const incres=(()=>{
//       setCount(count+1)
//    })

//    const decres=(()=>{
//     if(count>0 ){
//       setCount(count-1)
//     }
//   })
//   return (
//     <>
//       <h3>Hello Megha Dhangar</h3>
//          <h2>{count}</h2>
//          <button onClick={decres} >Decrement</button>
//          <button onClick={incres} >Increment</button>
//     </>
//   )
// }

// export default Megha

import { memo } from 'react'
import React from 'react'
function Megha(props) {
  console.log("inner function",props.data)
  return (
    <div>
      <h1>Hello Megha</h1>
    </div>
  )
}
export default memo(Megha);
