import React from 'react';
import Page from './Page';
import ProgressBar from './ProgressBar';
import useScroll from './useScroll';


const ScrollProgressBar = () => {

    const percentScroll = useScroll("scroll-progress-bar");

    return (
        <div 
            style= {{
            width: "75%",
            margin: '50px auto',
            position: 'relative',
            height: '200px',
            overflowX: 'hidden',
            overflowY: 'auto',
            // overflow: 'auto',
            // borderStyle: "solid",
            // borderWidth: '2px',
            // borderColor: "orange"
            boxShadow: '0 0 10px #abcdef'
            }}
            className="scroll-progress-bar"
        >
            <ProgressBar
                parentClassName="scroll-progress-bar" 
                parentScroll={percentScroll}
            />
            <Page />
        </div>
    )
}

export default ScrollProgressBar
