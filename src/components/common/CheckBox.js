import React from 'react';
import ReactDOM from 'react-dom';
import './CheckBox.css';

function CheckBox() {
  return (
    <html>
    <div >
      <input type="checkbox" id="to-do" name="to-do" ></input>
      <span> Happy </span>
    </div>
    <div>
      <input type="checkbox" id="to-do" name="to-do" ></input>
      <span> Sad </span>
    </div>
    <div>
      <input type="checkbox" id="to-do" name="to-do" ></input>
      <span> Angry </span>
    </div>  
    <div>
      <input type="checkbox" id="to-do" name="to-do" ></input>
      <span> Optimistic </span>
    </div>
    </html>
  );
}

export default CheckBox;
