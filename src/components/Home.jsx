import React from 'react'
import Countdown from "./Countdown"

function Home() {
    return (
        <div className="content-container-outer">
            <div className="content-container">
                <h1>Juan Sessions</h1>
                <h2>Web Developer</h2>
                <p>Just want to create and be part of a dynamic and interesting team.</p>
                <Countdown />
            </div>

        </div>
    )
}

export default Home
