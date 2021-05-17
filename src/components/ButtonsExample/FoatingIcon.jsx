import { faFacebook, faGooglePlusG, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './FloatingIcon.css'

function FoatingIcon() {
    return (
        <div
            className="floating-icon"
        >
            <ul>
                <li><a href="#facebook" ><i className="fab"><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                <li><a href="#twitter" ><i className="fab"><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                <li><a href="#googlePlus" ><i className="fab"><FontAwesomeIcon icon={faGooglePlusG} /></i></a></li>
                <li><a href="#linkedin" ><i className="fab"><FontAwesomeIcon  icon={faLinkedin} /></i></a></li>
                <li><a href="#instagram" ><i className="fab"><FontAwesomeIcon icon={faInstagram} /></i></a></li>

            </ul>
        </div>
    )
}

export default FoatingIcon
