import React from "react";
import "./DropDownMenu.css";

function DropDownMenu(props){
    return (
        <div className="DropDownMenu">
            <label>{props.label}</label>
            <select required value={props.value} onChange={props.onChange}>
                {props.itens.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDownMenu;