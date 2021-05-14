import React, { Component } from 'react'
import SideBar from './SideBar'

class SideBarFrame extends Component {
    render() {
        return (
            <div
                className="container side-bar-frame"
                id="side-bar-frame"
            >
                <SideBar />
            </div>
        )
    }
}

export default SideBarFrame;
