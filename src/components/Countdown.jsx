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
            {/* <div className="film-container"> */}
            {/* <div className="animated-flicker"> */}
            {/* <svg className="film-mask" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                    width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 400 225">
                    <rect className="rectangle01" width="400" height="225" />
                    <line className="line-h line01" x1="0" y1="112.5" x2="400" y2="112.5" />
                    <line className="line-v line02" x1="200" y1="0" x2="200" y2="225" />
                </svg> */}
            <svg className="film-countdown" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                width="80%" height="80%" viewBox="0 0 400 225">
                <circle className="circle-outer circle01" cx="200" cy="112.5" r="95" />
                <circle className="circle-inner circle01" cx="200" cy="112.5" r="85" />
                <circle className="circle02 animated-rotate" cx="200" cy="112.5" r="494.5" />
                <g className="numbers no-select" text-anchor="middle" >
                    <text className="animated-text1" x="200.5" y="155">5</text>
                    <text className="animated-text2" x="200.5" y="155">4</text>
                    <text className="animated-text3" x="200.5" y="155">3</text>
                    <text className="animated-text4" x="200.5" y="155">2</text>
                    <text className="animated-text5" x="200.5" y="155">1</text>
                    {/* <text className="animated-text6" x="200.5" y="155">5</text>
                    <text className="animated-text7" x="200.5" y="155">4</text>
                    <text className="animated-text8" x="200.5" y="155">3</text>
                    <text className="animated-text9" x="200.5" y="155">2</text>
                    <text className="animated-text10" x="200.5" y="155">1</text> */}
                </g>
            </svg>
            {/* </div > */}
            {/* </div > */}

            {/* <div className="message-container">
                <svg className="message no-select" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                    width="100%" height="100%" viewBox="0 0 400 225">
                    <text x="200" y="112.5" text-anchor="middle">Do something else&hellip;</text>
                </svg>
            </div> */}
        </div>
    )
}

export default withRouter(Countdown)
