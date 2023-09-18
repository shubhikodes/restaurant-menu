import React from "react";
import Card from "./Card";
import App from "./App"

const Button = (props) => {
    
    return <button className="navbutton" onClick={props.onSelect} name={props.bname}>{props.bname}</button>;
}
export default Button;