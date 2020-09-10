import React from 'react'
import useSound from "use-sound";
import ImgSound from "../sounds/cameraClick.mp3";

function Project(props) {
    const { name, description, img, link } = props.project

    console.log("project:",props.project.name);

    const [playActive] = useSound(ImgSound, { volume: 0.40 });

    return (
        <div className="project">
            <h3>{name}</h3>
            <a href={link} target="_blanc">
                <img src={img} alt="" width="260" height="150" onClick={playActive} />
            </a>
            <p>{description}</p>
            <a href={link} target="_blanc" className="link-visit" onClick={playActive}>visit</a>
        </div>
    )
}

export default Project
