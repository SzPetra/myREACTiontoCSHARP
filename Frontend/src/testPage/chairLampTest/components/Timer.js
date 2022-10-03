import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ( { handleMinute }) => {
    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(false);
  
    useEffect(() => {
      let timerId;
  
      if (runTimer) {
        setCountDown(60 * 2);
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    useEffect(() => {
      if (countDown < 0 && runTimer) {
        console.log("expired");
        setRunTimer(false);
        setCountDown(0);
      }
    }, [countDown, runTimer]);
  
    const togglerTimer = () => setRunTimer((t) => !t);
  
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    return (
      <div className="">
        <div>
          Time: {minutes}:{seconds}
            {
            handleMinute(seconds, minutes)
            }
        </div>
  
        <button type="button" onClick={togglerTimer}>
          {runTimer ? "Stop" : "Start"}
        </button>
      </div>
    );
  }

export default Timer