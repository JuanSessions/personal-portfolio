import React, { useEffect } from 'react'
import '../style/countdown.scss';
import countdown from "../js/countdown"
import { withRouter } from "react-router-dom"



function Countdown(props) {
    useEffect(() => {
        countdown()
    }, [])
    

    return (
        <div className="countdown-container">
            <svg className="film-countdown" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                width="500" height="300" viewBox="0 0 400 225">
                <circle className="circle-outer circle01" cx="200" cy="112.5" r="95" />
                <circle className="circle-inner circle01" cx="200" cy="112.5" r="85" />
                <circle className="circle02 animated-rotate" cx="200" cy="112.5" r="494.5" />
                <g className="numbers no-select" text-anchor="middle" >
                    <text className="animated-text1" x="200.5" y="155">5</text>
                    <text className="animated-text2" x="200.5" y="155">4</text>
                    <text className="animated-text3" x="200.5" y="155">3</text>
                    <text className="animated-text4" x="200.5" y="155">2</text>
                    <text className="animated-text5" x="200.5" y="155">1</text>
                </g>
            </svg>
            
        </div>
    )
}

export default withRouter(Countdown)
