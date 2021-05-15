import { useEffect, useState } from 'react'

function useScrollYOffset() {
    const [offset, setOffset] = useState(0)
    
    const handleScroll = () => {
        console.log("In scroll Callback");
        setOffset(window.scrollY);
    }
    
    useEffect(() => {
        console.log("In useEffect");
        window.addEventListener("scroll", handleScroll); 

        return () => {
            console.log("In Cleanup");
            window.removeEventListener(handleScroll);
        };   
    }, [])
    
    return offset;
}

export default useScrollYOffset
