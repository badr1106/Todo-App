import React from "react";
import ReactDOM from "react-dom";
import "./CheckBox.css";

function CheckBox(props) {
  return (
    <>
      <div className="checkbox-card">
        <input type="checkBox" checked={props.item.completed} />
        <h3>{props.item.text} </h3>
      </div>
    </>
  );
}

export default CheckBox;
