import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStartTime() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <div className="py-3 gap-5">
        <span>
          <Button variant="primary" className="me-3" onClick={handleStartTime}>
            Start time
          </Button>
        </span>
        <span>
          <Button variant="secondary" onClick={handleStop}>
            Stop time
          </Button>
        </span>
      </div>
    </>
  );
};
