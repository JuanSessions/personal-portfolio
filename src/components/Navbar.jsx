import React from 'react';
import { NavLink } from "react-router-dom";
import '../style/navLinksEffect.scss';
import useSound from "use-sound";
import ButtonSound from "../sounds/cameraClick.mp3";

function Navbar() {
    const [playActive] = useSound(ButtonSound, { volume: 0.50 });
    return (
        <nav>
            <ul className="section">
                <li className="r-button ai-element ai-element_type1 ai-element5" onClick={playActive}>
                    <NavLink to="/" exact activeClassName="active" className="ai-element__label" >
                        Home
                        {/* <span className="ai-element__label">Home</span> */}
                    </NavLink>
                </li>
                <li className="r-button ai-element ai-element_type1 ai-element5" onClick={playActive}>
                    <NavLink to="/about" activeClassName="active" className="ai-element__label">
                        About
                        {/* <span className="ai-element__label">About</span> */}
                    </NavLink>
                </li>
                <li className="r-button ai-element ai-element_type1 ai-element5" onClick={playActive}>
                    <NavLink to="/projects" activeClassName="active" className="ai-element__label">
                        Projects
                        {/* <span className="ai-element__label">Projects</span> */}
                    </NavLink>
                </li>
                <li className="r-button ai-element ai-element_type1 ai-element5" onClick={playActive}>
                    <NavLink to="/contact" activeClassName="active" className="ai-element__label">
                        Contact
                        {/* <span className="ai-element__label">Projects</span> */}
                    </NavLink>
                </li>
            </ul>
        </nav>


        // <div class="section">
        //     <div class="section__box">
        //         <button class="r-button ai-element ai-element_type1 ai-element5">
        //             <span class="ai-element__label">here button</span>
        //         </button>
        //     </div>
        // </div>

    )
}

export default Navbar
