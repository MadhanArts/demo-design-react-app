import React from 'react'
import './Navbar.css'

function NavBar() {
    return (
        <div className='navbar'>
        <div className='logo'>
          <img src='' alt='' />
          <div>Madhan Arts</div>
        </div>

        <div className='button login'>Login</div>
        <button
        className="button change-theme"
          onClick={() => {
            document.body.classList.toggle("dark-mode");
          }}
        >
          Change theme
        </button>
      </div>
    )
}

export default NavBar
