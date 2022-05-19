import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const interval = useRef();

  const tick = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else if (minutes === 0 && seconds === 0) {
      setHours((hours) => hours - 1);
      setMinutes(59);
      setSeconds(59);
    } else if (seconds === 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval.current);
  });

  return (
    <div className="App">
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
}
