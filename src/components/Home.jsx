import React from 'react'
import Countdown from "./Countdown"
import useSound from "use-sound";
import ImgSound from "../sounds/soundTrack.wav";


function Home() {

    const [playActive] = useSound(ImgSound, { volume: 0.30 });
    return (
        <div className="content-container-outer" onClick={playActive}>
            <div className="content-container">
                <h1>Juan Sessions</h1>
                <h2>Web Developer</h2>
                <h3>Just want to create and be part of a dynamic and interesting team.</h3>
                <i class="far fa-play-circle"> Meanwhile U can click in this frame, if U want to hear a JuanSessions soundtrack</i>
                <Countdown />
            </div>

        </div>
    )
    setTimeout(() => {
        // circleOuter.style.zIndex = '-1';
    }, 5000)
}

export default Home
