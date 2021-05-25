import React from "react";
import ClickEffectLookButton from "./ClickEffectLookButton";
import ClipPathHover from "./ClipPathHover";
import FloatingIcon from "./FoatingIcon";
import RippleHoverEffectButton from "./RippleHoverEffectButton";

function ButtonsFrame() {
    return (
        <div className='container buttons-frame'>
            <ClipPathHover />
            <FloatingIcon />
            <ClickEffectLookButton />
            <RippleHoverEffectButton />
        </div>
    );
}

export default ButtonsFrame;
