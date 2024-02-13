import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
function Contact() {
  return (
    <div>
      <h1>This is Contact page</h1>
      <button><NavLink className='link' to="contactus">ContactUs</NavLink> </button>
      <button> <NavLink className='link' to="address">Address</NavLink></button>
      <Outlet/>
    </div>
  )

}

export default Contact
