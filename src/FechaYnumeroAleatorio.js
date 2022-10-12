import React from "react";

export const PrimerEjercicio = () => {
  var today = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  options.timeZone = "UTC";
  options.timeZoneName = "short";

  var now = today.toLocaleString("en-US", options);
  console.log(now);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(120));

  return <div></div>;
};