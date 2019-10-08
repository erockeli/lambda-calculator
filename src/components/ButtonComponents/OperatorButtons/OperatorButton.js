import React from "react";

const OperatorButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  className ="operator button" onClick={()=>{props.handleOperatorClick(props.text.value)}}>
      {props.text.char}
    </button>
    </>
  );
};
