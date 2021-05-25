import React, {useEffect} from "react";
import "./RippleHoverEffectButton.css";

function RippleHoverEffectButton() {
    useEffect(() => {
        const button = document.getElementsByClassName(
            "ripple-hover-effect-button"
        )[0];
        button.addEventListener("mousemove", (event) => {
            const buttonOffsetX = button.getBoundingClientRect().left + document.documentElement.scrollLeft;
            const buttonOffsetY = button.getBoundingClientRect().top + document.documentElement.scrollTop;
            const x = event.pageX - parseInt(buttonOffsetX);
            const y = event.pageY - parseInt(buttonOffsetY);
            // const x = event.pageX - button.offsetLeft;
            // const y = event.pageY - button.offsetTop;
            // // button.style.top = "1px";
            // button.style.left = "120px";
            // console.log(button.getBoundingClientRect().top + " " + document.documentElement.scrollTop);
            // console.log(button.getBoundingClientRect().left + " " + document.documentElement.scrollLeft);
            // console.log(x + " " + y);
            // console.log("Window.pageXOffset : " + window.pageXOffset);
            // console.log("buttonOffsetX : " + buttonOffsetX);
            // console.log("buttonOffsetY : " + buttonOffsetY);
            // console.log(
            //     "event.pageX, event.pageY : " + event.pageX + " " + event.pageY
            // );
            
            button.style.setProperty("--x", x + "px");
            button.style.setProperty("--y", y + "px");
        });

        return () => {};
    }, []);

    return (
        <div className='ripple-hover-effect-button-frame'>
            <a href='#button' className='ripple-hover-effect-button'>
                <span>Button</span>
            </a>
        </div>
    );
}

export default RippleHoverEffectButton;
