import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faCodepen } from "@fortawesome/free-brands-svg-icons";
import './NeomorphismStyle.css';

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
