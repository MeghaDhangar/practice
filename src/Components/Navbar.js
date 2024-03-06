
import React from 'react'
import { Link } from 'react-router-dom'
 import {useSelector} from 'react-redux'

function Navbar() {
    const item = useSelector((state)=> state.card)
    return (
        <>
            <span>REDUX STORE</span>
            <nav class="navbar navbar-expand-lg bg-body-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className='link' to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='link' to='/cart'>Card</Link>
                            </li>

                            <li class="cartCount"  >
                                <span>Cartt Items:{ item.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
