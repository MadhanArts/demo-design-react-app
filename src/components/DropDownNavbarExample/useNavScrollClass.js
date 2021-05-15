import { useEffect, useState } from 'react'

function useNavScrollClass() {
    const [navClass, setNavClass] = useState("navbar scrolled")
    

    useEffect(() => {
        console.log("In Use Effect");
        let lastScrollTop = 0;
        const frame = document.getElementById("navbar-container-frame")
        const handleScroll = () => {
            console.log("In scroll Callback");
            // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // let scrollTop = frame.scrollTop;
            let scrollTop = frame.scrollTop;
            console.log(scrollTop);
            console.log(lastScrollTop);
            if(scrollTop >= lastScrollTop)
            {
                setNavClass("navbar");
            }
            else{
                setNavClass("navbar scrolled");
            }
            lastScrollTop = scrollTop;
        }

        // window.addEventListener("scroll", handleScroll);
        frame.addEventListener("scroll", handleScroll);

        return () => {
            console.log("In Clean up");
            // window.removeEventListener(handleScroll);
            frame.removeEventListener(handleScroll);
        }
    }, [])

    return navClass;
}

export default useNavScrollClass
