import React, { useState } from 'react'
// import Countdown from "./Countdown"
import projects from '../projects.js'
import Project from './Project'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carousel = require('react-responsive-carousel').Carousel;


function Projects() {
    const [data, setData] = useState(projects)
    // const [visible, setVisible] = useState(true)

    return (
        <div className="content-container-outer">
            <div className="content-container projects">
                <div className="content-rotate">
               {/** <h2>Projects</h2>  */}
                    <div className="projects-container">
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        stopOnHover={false}
                        interval={7000}
                        transitionTime={900}
                        className="carousel"
                    >
                        {
                            data.slice(0, 9).map((data, i) =>
                                <Project key={i} project={data} />
                            )
                        }
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
