import React from "react";
import ClickEffectLookButton from "./ClickEffectLookButton";
import ClipPathHover from "./ClipPathHover";
import FloatingIcon from "./FoatingIcon";

function ButtonsFrame() {
    return (
        <div className='container buttons-frame'>
            <ClipPathHover />
            <FloatingIcon />
            <ClickEffectLookButton />
        </div>
    );
}

export default ButtonsFrame;
