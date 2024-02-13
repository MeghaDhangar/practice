import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const params = useParams();
    console.log("params",params)
  return (
    <div>
        
      <h1>Inside Product Id  {params.id}</h1>
    </div>
  )
}

export default ProductDetail
