import React, { useState } from "react";

const Timer = () => {
  let [currentTimer, setCurrentTimer] = useState(3);

  const handleTimeout = () => {
    console.log("BOOM");
    setTimeout(() => {
      setCurrentTimer(4);
    }, 3000);
  };

  const startTimer = () => {
    setTimeout(() => {
      if (currentTimer === 0) {
        handleTimeout();
      } else {
        setCurrentTimer(currentTimer - 1);
      }
    }, 1000);
  };

  startTimer();
  return <div>{currentTimer}</div>;
};

export default Timer;
