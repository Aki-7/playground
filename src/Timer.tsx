import React, { FC, useEffect, useState } from "react";

type Props = { limit: number };

export const Timer: FC<Props> = props => {
  const { time } = useTimer(props.limit);
  return <div>{time} sec have passed.</div>;
};

const useTimer = (limit: number) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => (t < limit ? t + 1 : t));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return { time };
};
