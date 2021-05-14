import React from 'react';
import Page from './Page';
import ProgressBar from './ProgressBar';
import useScroll from './useScroll';


const ScrollProgressBarFrame = () => {

    const id = "scroll-progress-bar";
    const percentScroll = useScroll(id);

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
            id={id}
        >
            <ProgressBar
                parentScroll={percentScroll}
            />
            <Page />
        </div>
    )
}

export default ScrollProgressBarFrame;
