import React from "react";
import Circle from "./Circle";
import "./AnimateOnScroll.css";

function AnimateOnScrollFrame() {
    return (
        <div
            className='container animate-onscroll-frame'
            id='animate-onscroll-frame'>
            <Circle />
        </div>
    );
}

export default AnimateOnScrollFrame;
