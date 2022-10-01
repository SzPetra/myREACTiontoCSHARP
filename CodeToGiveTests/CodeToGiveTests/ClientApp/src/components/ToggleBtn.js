
import React from 'react'

const ToggleButton = (btnprops) => {
    const [toggleState, setToggleState] = btnprops.toggle;

    const toggleButtonState = (toggleState) => {
        setToggleState(toggleState === true ? false : true);
        console.log(toggleState);
    };

  return (
    <button onClick={ () => {toggleButtonState(toggleState)} }>
        {toggleState ? 'Event' : 'Song'}
    </button>
  )
};

export default ToggleButton;