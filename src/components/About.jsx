import React from 'react'
import mongoSvg from '../images/icons8-mongodb.svg'
import SQL from "../images/sql-icon.png"

function About() {
    return (
        <div className="content-container-outer">
            <div className="content-container about">
                <h2>About</h2>
                <div className="about-text">
                    <p>Hello, I'm Juan,</p>
                    <p>just finished my first studies as a full stack web developer, but ready to keep learning, to work in a team bringing my will and creativity to the table. </p>
                </div>
                <h4>Skills</h4>
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
                    <li><i class="fas fa-drum"></i></li>


                </ul>
            </div>
        </div>
    )
}

export default About
