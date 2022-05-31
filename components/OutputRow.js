import React from "react";
import "./OutputRow.css";
const OutputRow = (props) => {
  return (
    <>
      <input
        type="text"
        readOnly
        className="screen"
        style={props.textSize}
        value={props.value}
      />
    </>
  );
};

export default OutputRow;
