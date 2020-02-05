import React, { useState, useEffect } from "react";

export const Timer = props => {
  const { time } = useTimer(props.limit);
  return <div>{time} have passed.</div>;
};

const useTimer = limit => {
  const [time, setTime] = useState(0);
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setTime(t => {
        if (t < limit) return t + 1;
        else return t;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return { time };
};
