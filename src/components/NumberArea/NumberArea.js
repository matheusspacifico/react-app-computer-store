import React from "react";
import "./NumberArea.css";

function NumberArea(props){
    return (
        <div className="NumberArea">
            <label>{props.label}</label>
            <input 
                type="number" 
                placeholder={props.placeholder} 
                min="0" 
                step="0.01"
                required
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    );
}

export default NumberArea;