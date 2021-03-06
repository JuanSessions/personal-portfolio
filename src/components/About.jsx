import React from 'react'
import mongoSvg from '../images/icons8-mongodb.svg'
import SQL from "../images/sql-icon.png"

function About() {
    return (
        <div className="content-container-outer">
            <div className="content-container about">
                <div className="content-rotate">
                <h2>About</h2>
                <div className="about-text">
                    <p></p>
                        <p>I've finished my studies as a full stack web developer. I'm always ready to keep learning, bringing my will and creativity to the table in a creative team. I stay active working on different projects CONSTANTLY. My strong suit so far is the frontend.</p>
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
        </div>
    )
}

export default About
