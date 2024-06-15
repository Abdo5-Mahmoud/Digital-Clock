import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  let [clock, setclock] = useState("");
  let thedate = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let currentTime = hours + ":" + minutes + ":" + seconds;
    setclock(currentTime);
  };

  useEffect(() => {
    setInterval(() => {
      thedate();
    }, 1000);
  }, []);
  return <div> {clock} </div>;
}

export default Clock;
