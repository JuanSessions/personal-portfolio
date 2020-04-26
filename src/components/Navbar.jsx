import React from 'react'
import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>

        </nav>
    )
}

export default Navbar
