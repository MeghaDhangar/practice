
import React from 'react'
import { Link  } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                              <Link className='link' to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                              <Link className='link' to='/product'>Product</Link>
                            </li>
                            <li class="nav-item">
                            <Link className='link' to='/about'>About</Link>
                            </li>
                            <li class="nav-item">
                            <Link className='link' to='/contact' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
