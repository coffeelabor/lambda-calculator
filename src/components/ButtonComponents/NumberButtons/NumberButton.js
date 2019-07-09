import React from "react";

export const NumberButton = props => {
  console.log("props inside NumberButton", props);
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.digit}</button>
    </div>
  );
};
