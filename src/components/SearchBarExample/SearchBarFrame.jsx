import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SearchBarStyle.css'

function SearchBarFrame() {
    return (
        <div
            className="container searchbar-frame"
        >
            <div className="search-box">
                <input 
                    type="text" 
                    className="search-text" 
                    placeholder="Type to Search" />
                <a
                    href="#about" 
                    className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                </a>
            </div>
        </div>
    )
}

export default SearchBarFrame
