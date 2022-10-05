import React from "react";
import { useState, useEffect, useContext } from "react";
import { runTimer } from "./ChairLampTestPage";

const Timer = ({ handleMinute }) => {
  const [countDown, setCountDown] = useState(0);
  const { isRuntime, setIsRuntime } = useContext(runTimer);

  useEffect(() => {
    let timerId;

    if (isRuntime) {
      setCountDown(60 * 2);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isRuntime]);

  useEffect(() => {
    if (countDown < 0 && isRuntime) {
      setIsRuntime(false);
      setCountDown(0);
    }
  }, [countDown, isRuntime]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  return (
    <div className="">
      <div>{handleMinute(seconds, minutes)}</div>
    </div>
  );
};

export default Timer;
