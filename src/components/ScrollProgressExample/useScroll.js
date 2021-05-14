import { useEffect, useState } from 'react';

function useScroll(parentId) {
    const [percentageScrolled, setPercentageScrolled] = useState(0);

    

    useEffect(() => {

        function totalPageHeight() {
            // const windowHeight = window.innerHeight;
            // const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = parent.clientHeight;
            const documentHeight = parent.scrollHeight;
    
            // console.log(windowHeight);
            // console.log(documentHeight);
    
            return documentHeight - windowHeight;
        }
    
        function calculateScrollPercentage() {
            // const scrollOffset = window.pageYOffset;
            // const scrollPercentage = Math.floor((scrollOffset / totalPageHeight()) * 100);
            const scrollOffset = parent.scrollTop;
            const scrollPercentage = Math.floor((scrollOffset / totalPageHeight()) * 100);
            
            // console.log(scrollOffset);
            // console.log(totalPageHeight());
            
            return scrollPercentage;
        }

        const scroll = () => setPercentageScrolled(calculateScrollPercentage());
        // console.log(parent);
        let parent = document.getElementById(parentId);
        // console.log(parent);
        // document.addEventListener("scroll", scroll);
        parent.addEventListener("scroll", scroll);

        return () => parent.removeEventListener("scroll", scroll);
    })

    return percentageScrolled;

}

export default useScroll;
