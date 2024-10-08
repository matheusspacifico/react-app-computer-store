import React from "react";
import "./TextArea.css";

function TextArea(props){
    return (
        <div className="TextArea">
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder} 
                required
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    );
}

export default TextArea;