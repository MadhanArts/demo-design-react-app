import React from 'react';

const ProgressBar = ({ parentScroll }) => {

    const percentScroll = parentScroll;
    // console.log(percentScroll);

    return (
        <div
            style={{
                // position: 'fixed',
                // width: 'inherit'
                position: 'sticky',
                top: 0
            }}
        >
            <div
            style={{
                width: percentScroll + '%',
                backgroundColor: "#fc3c3c",
                height: '16px',
                zIndex: 10
            }}
        />
        </div>
    )
}


export default ProgressBar;
