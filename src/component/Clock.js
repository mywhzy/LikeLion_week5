import React, { useEffect } from "react";
import {useState} from "react";

function Clock(){
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  },[]);

  return(
    <div className="clock">
     <h3 className="date">Today is {time.toLocaleDateString()}</h3>
     <h3 className="time">{time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default Clock;
