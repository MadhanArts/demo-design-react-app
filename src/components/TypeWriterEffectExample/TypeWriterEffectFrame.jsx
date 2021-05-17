import React, { useEffect } from 'react'
import './TypeWriterEffect.css'

function TypeWriterEffectFrame() {
    
    useEffect(() => {
        
        function write(text, onCompletion) {
            let currentIndex = 0;
            function loop() {
                const animatedText = document.querySelector(".animated-text");
                animatedText.innerHTML = text.substring(0, currentIndex);

                // console.log(text.substring(0, currentIndex));
                if (currentIndex === text.length + 1) {
                    onCompletion();
                    return;
                }

                currentIndex++;
                setTimeout(loop, 500);
            }

            loop();
        }

        function erase(text, onCompletion) {
            let currentIndex = text.length - 1;
            function loop() {
                const animatedText = document.querySelector(".animated-text");
                animatedText.innerHTML = text.substring(0, currentIndex);

                // console.log(text.substring(0, currentIndex));

                if (currentIndex === 0) {
                    onCompletion();
                    return;
                }

                currentIndex--;
                setTimeout(loop, 100);
            }
        
            loop();
        }

        const text = ["Madhan", "Arts"];
        
        const runner = () => {
            write(text[0], () => {
                erase(text[0], () => {
                    write(text[1], () => {
                        setTimeout(runner, 1000);
                    })
                })
            })
        };
        runner()


    }, [])

    return (
        <div
            className="container type-writer-effect-frame"
        >
            
            <div className="line">
                Hello I am 
                <div className="animated-text"></div>
            </div>

        </div>
    )
}

export default TypeWriterEffectFrame
