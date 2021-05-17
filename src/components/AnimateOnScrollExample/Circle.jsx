import React, { useLayoutEffect, useRef, useState } from 'react'


function Circle() {
    const circleRef = useRef(null);

    const [canSee, setCanSee] = useState(false);
    const classes = canSee ? "circle moved" : "circle";

    useLayoutEffect(() => {
        const onScroll = () => {
            const circleTop = circleRef.current.getBoundingClientRect().top;
            const reached = (circleTop + 50) < window.innerHeight;
            // console.log(circleTop + " " + window.innerHeight);
            setCanSee(reached)
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    })

    return (
        <div className={classes} ref={circleRef} />
    )
}

export default Circle
