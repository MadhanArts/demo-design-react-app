import React, { useState } from 'react'

function Section(props) {
    const [isShown, setIsShown] = useState(false)

    const toggle = () => setIsShown(prev => !prev);

    const contentClass = isShown ? "content shown" : "content";

    return (
        <div className="section">
            <div className={"section-title"} onClick={toggle} >{props.title}</div>
            <div className={contentClass} >{props.children}</div>
        </div>
    )
}

export default Section
