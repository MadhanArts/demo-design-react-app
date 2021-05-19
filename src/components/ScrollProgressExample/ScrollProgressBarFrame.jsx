import React from 'react';
import Page from './Page';
import ProgressBar from './ProgressBar';
import useScroll from './useScroll';


const ScrollProgressBarFrame = () => {

    const id = "scroll-progress-bar";
    const percentScroll = useScroll(id);

    return (
        <div 
            className="container scroll-progressbar-frame"
            id={id}
            style={{
                background: '#20b2aa'
            }}
        >
            <ProgressBar
                parentScroll={percentScroll}
            />
            <Page />
        </div>
    )
}

export default ScrollProgressBarFrame;
