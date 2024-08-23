import React from "react";
import "./TextArea.css";

function TextArea(props){
    return (
        <div className="TextArea">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    );
}

export default TextArea;