import React from 'react';
import apiRequest from '../requests/apiRequest';
import postOptions from '../requests/apiRequest';

const ToggleBtn = (btnprops) => {
    const [toggleState, setToggleState] = btnprops.toggle;
    const url = "https://localhost:44490/weather/encrypt";
    const toggleButtonState = ([toggleState, setToggleState]) => {
      apiRequest(url, [toggleState, setToggleState], postOptions(toggleState));
    };

  return (
    <button onClick={ () => {toggleButtonState([toggleState, setToggleState])} }>
        Send 
    </button>
  )
};

export default ToggleBtn;