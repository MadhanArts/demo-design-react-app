import React from "react";
import "./CustomToggleSwitch.css";

function CustomToggleSwitch({onToggle}) {
  return (
    <label className='switch-toggle'>
      <input onChange={onToggle} type='checkbox' className='checkbox' />
      <span className='switch-button'></span>
    </label>
  );
}

export default CustomToggleSwitch;
