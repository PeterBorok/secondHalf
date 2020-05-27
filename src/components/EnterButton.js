import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function EnterButton() {

    return (
        <div>

            <Link to="/leagues" class="myButton" style={{textDecoration: "none"}}>ENTER</Link>

        </div>
    );
}