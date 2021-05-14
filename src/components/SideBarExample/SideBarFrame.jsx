import React, { Component } from 'react'
import SideBar from './SideBar'

class SideBarFrame extends Component {
    render() {
        return (
            <div
                style= {{
                width: "75%",
                margin: '50px auto',
                position: 'relative',
                height: '300px',
                overflowX: 'hidden',
                overflowY: 'auto',
                // overflow: 'auto',
                // borderStyle: "solid",
                // borderWidth: '2px',
                // borderColor: "orange"
                boxShadow: '0 0 15px #abcdef'
                }}
                id="side-bar-frame"
            >
                <SideBar />
            </div>
        )
    }
}

export default SideBarFrame;
