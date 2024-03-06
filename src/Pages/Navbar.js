
import React from 'react'
import { Link  } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a className ="navbar-nav  " href="#">Megha's Portfalio</a>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-between  w-75">
                            <li class="nav-item">
                              <Link className='link' to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                              <Link className='link' to='/product'>About</Link>
                            </li>
                            <li class="nav-item">
                            <Link className='link' to='/about'>Project</Link>
                            </li>
                            <li class="nav-item">
                            <Link className='link' to='/contact' >Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
