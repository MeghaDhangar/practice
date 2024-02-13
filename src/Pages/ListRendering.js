import React from 'react'

function ListRendering() {
    const name=["Megha","Purvi","Swati","Purvi","Poonam","Megha"]
  return (
    <div>
       {name.map((list,index)=><h1 key={index}>{list} index no {index}</h1>)}
    </div>
  )
}

export default ListRendering
