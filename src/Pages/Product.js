import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
     <Outlet/>
      <Link to='1' className='linkk'>Product 01</Link>
      <Link  to='2'className='linkk'>Product 02</Link>
      <Link to='3' className='linkk'>Product 03</Link>
    </div>
  )
}

export default Product
