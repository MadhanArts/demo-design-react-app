import React from 'react'
import "./NavBar.css";
import useNavScrollClass from './useNavScrollClass';
// import useScrollYOffset from './useScrollYOffset';

function NavBar() {

    // const yOffset = useScrollYOffset();
    // const navClass = (yOffset > 100) ? 'navbar scrolled' : 'navbar';    

    const navClass = useNavScrollClass();

    return (
        <nav className={navClass} >
            <div>Logo</div>
            <div>Login</div>
        </nav>
    )
}

export default NavBar
