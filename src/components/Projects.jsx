import React, { useState } from 'react'
import Countdown from "./Countdown"
import img1 from "../images/musician-portfolio.png"
import img2 from "../images/todoapp.png"
import img3 from "../images/ScreenshotVMR.png"
import useSound from "use-sound";
import ImgSound from "../sounds/cameraClick.mp3";


function Projects() {
    const [visible, setVisible] = useState(true)
    const [playActive] = useSound(ImgSound, { volume: 0.40 });

    console.log("project - visible:", visible);

    return (
        <div className="content-container-outer">
            <div className="content-container">
                <h2>Projects</h2>

                <div className="projects-container">
                    <div className="project">
                        <h3>Virtual Music Room</h3>
                        <a href="http://161.35.217.162" target="_blanc">
                            <img src={img3} alt="" width="260" onClick={playActive} />
                        </a>
                        <h3>Final project full stack</h3>
                    </div>

                    <div className="project">
                        <h3>Template Artist Portfolio</h3>
                        <a href="https://juansessions.github.io/musician-portfolio/" target="_blanc">
                            <img src={img1} alt="" width="200" onClick={playActive} />
                        </a>
                    </div>


                    <div className="project">
                        <h3>ToDo App</h3>
                        <a href="https://juansessions.github.io/TODO-APP/#/" target="_blanc">
                            <img src={img2} alt="" width="150" onClick={playActive} />
                        </a>
                    </div>

                </div>

                {/* <Countdown visible={visible} /> */}

            </div>
        </div>
    )
}

export default Projects
