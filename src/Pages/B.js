import React, { useEffect, useState } from 'react'

function B() {
  const [data,setdata]=useState("Megha Dhangar")
  function changeName(){
    setdata("Megha")
  }
  useEffect(()=>{
    console.log("Component mounted")
  },[])
  return (
    <div>
      <h1> My Name Is {data}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default B
