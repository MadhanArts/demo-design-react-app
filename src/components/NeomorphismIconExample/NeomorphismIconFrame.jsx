import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faCodepen } from "@fortawesome/free-brands-svg-icons";
import './NeomorphismStyle.css';


// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons


class NeomorphismIconFrame extends Component {
    render() {
        return (
            <div
                className="container neomorphism-icon-frame"
            >
                <div className="main-box">
                    <FontAwesomeIcon 
                        className="icon" 
                        icon={faGithub} 
                        aria-hidden="true" 
                        />
                </div>
                <div className="main-box">
                    <FontAwesomeIcon 
                    className="icon" 
                    icon={faLinkedin} 
                    aria-hidden="true" 
                    />
                </div>
                <div className="main-box">
                    <FontAwesomeIcon 
                    className="icon" 
                    icon={faInstagram} 
                    aria-hidden="true" 
                    />
                </div>
                <div className="main-box">
                    <FontAwesomeIcon 
                    className="icon" 
                    icon={faCodepen} 
                    aria-hidden="true" 
                    />
                </div>
            </div>
        )
    }
}

export default NeomorphismIconFrame
