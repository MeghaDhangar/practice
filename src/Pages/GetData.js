import React, { useEffect, useState } from 'react'
import axios from 'axios'
function GetData() {
   const [userData,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      console.log(response)
      setData(response.data)
    })
  },[])
  return (
    <div>
      <h1>Call API</h1>
      {userData.map((data)=>{
         return(
          <h1>{data.name}</h1>
         )
      })

      }
    </div>
  )
}

export default GetData
