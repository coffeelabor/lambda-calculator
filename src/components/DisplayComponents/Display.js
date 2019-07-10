import React from "react";

export const Display = props => {
  console.log("Display Props", props);
  return (
    <div>
      <h1>display here</h1>
      <div>{props.display.number}</div>
      <div>{props.display.totalResult}</div>
      <div>{props.number}</div>
    </div>
  );
};
