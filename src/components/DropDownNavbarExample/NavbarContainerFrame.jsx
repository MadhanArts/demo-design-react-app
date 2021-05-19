import React from 'react'
import NavBar from './NavBar'

function NavbarContainerFrame() {

    const arr = []
    for (let i = 0; i < 50; i++) {
        arr.push(i)
    }

    return (
        <div className="container navbar-container-frame"
            id="navbar-container-frame"
            style={{
                background: '#ffffe0'
            }}
            >
            <NavBar />
            <div style={{
                padding: '10px'
            }} >
                {
                    arr.map((item, index) => {
                        return <div key={index}>{ item }</div>
                    })
                }
            </div>

            {/* <div style={{ height: '1000px' }} >
            </div> */}
        </div>
    )
}

export default NavbarContainerFrame;
