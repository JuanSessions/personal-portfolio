import React from "react"
import Countdown from "./Countdown"
import ImgSound from "../sounds/soundTrack.wav";
import ReactAudioPlayer from  "react-audio-player";


function Home() {

    return (
        <div className="content-container-outer">
            <div className="content-container home">
                <div className="content-rotate">
                <h1>Juan Sessions</h1>
                <h2>Web Developer</h2>
                <div className="p-text-home">
                <h3>Always the same goals: create and be part of a dynamic and interesting team anywhere.</h3>
                <i class="far fa-play-circle"> Meanwhile..U can use the audio player & hear a JuanSessions soundtrack</i>
                    </div>
                <Countdown />
                </div>
            </div>
            <ReactAudioPlayer
                src={ImgSound}
                controls
                volume={0.2}
                className="audio-player"
            />
        </div>
    )

}

export default Home
