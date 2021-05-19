import React from "react";
import "./Navbar.css";
import logo from "../../logo.png";
import CustomToggleSwitch from "../ToggleSwitchExample/CustomToggleSwitch";

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='' />
        <div>Madhan Arts</div>
      </div>

      <div className='button login'>Login</div>
      {/* <button
        className="button change-theme"
          onClick={() => {
            document.body.classList.toggle("dark-mode");
          }}
        >
          Change theme
        </button> */}
        <div className="button change-theme">
          <div>Dark Mode</div>
        <CustomToggleSwitch
        className='button change-theme'
        onToggle={() => {
          document.body.classList.toggle("dark-mode");
        }}
      />
        </div>
    </div>
  );
}

export default NavBar;
