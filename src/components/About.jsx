import React from 'react'
import mongoSvg from '../images/icons8-mongodb.svg'
import SQL from "../images/sql-icon.png"

function About() {
    return (
        <div className="content-container-outer">
            <div className="content-container">
                <h2>About</h2>
                <ul className="icons">
                    <li><i className="fab fa-html5"></i></li>
                    <li> <i class="fab fa-js-square"></i> </li>
                    <li><i class="fab fa-css3-alt"></i></li>
                    <li><i class="fab fa-sass"></i></li>
                    <li><i class="fab fa-react"></i></li>
                    <li><i class="fab fa-node"></i></li>
                    <li><i class="fab fa-github-square"></i></li>
                    <li><img src={mongoSvg} className="svg-icons" /></li>
                    <li><img src={SQL} /></li>
                </ul>
            </div>
        </div>
    )
}

export default About
