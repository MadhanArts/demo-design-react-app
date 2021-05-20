import React from "react";
import "./CollapseAnimation.css";
import Section from "./Section";

function CollapseAnimationFrame() {
    return (
        <div className='container collapse-animation'
        style={{
            backgroundColor: 'lightyellow',
            paddingTop: '10px'
        }}
        >
            <Section title='About me'>
                <p>I love building websites!</p>
                <p>I love playing Cricket</p>
                <p>I love to Help</p>
            </Section>
            <Section title='Foods'>
                <p>I love Apple</p>
                <p>I love Orange</p>
                <p>I love Carrot</p>
            </Section>
            <Section title='Subject'>
                <p>I love Maths</p>
                <p>I love Physics</p>
                <p>I love Computer</p>
            </Section>
        </div>
    );
}

export default CollapseAnimationFrame;
