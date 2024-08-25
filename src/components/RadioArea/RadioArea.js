import React from "react";
import "./RadioArea.css";

function RadioArea(props){
    return (
        <div className="RadioArea">
            <label>{props.label}</label>
            <input 
                type="radio" 
                name={props.name} 
                required
                checked={props.checked}
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    );
}

export default RadioArea;