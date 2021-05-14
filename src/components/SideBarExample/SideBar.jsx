import React, { useState } from 'react'
import './SideBar.css';

function SideBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(prevState => !prevState);

    const sidebarClass = isOpen ? "SideBar Active" : "SideBar";

    return (
        <>
            <div className="bar-container">
                <div className="bar" onClick={toggleSidebar} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={sidebarClass} >
                <div className="close-container" >
                    <div className="close" onClick={toggleSidebar} >
                        <div className="close1" ></div>
                        <div className="close2" ></div>
                    </div>
                    
                </div>
                <div>Home</div>
                <div>Messages</div>
                <div>Log out</div>
            </div>

        </>
    )
}

export default SideBar;
