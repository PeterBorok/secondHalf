import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function EnterButton() {

    return (
        <div style={{textAlign: "center"}}>
            <Link to="/leagues" className="myButton" style={{textDecoration: "none"}}>ENTER</Link>
        </div>
    );
}