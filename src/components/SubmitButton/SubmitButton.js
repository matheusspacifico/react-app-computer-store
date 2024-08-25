import React from "react";
import "./SubmitButton.css";

function SubmitButton(props){
    return (
        <button className="SubmitButton">{props.name}</button>
    );
}

export default SubmitButton;