import React from "react";
import { Link } from "react-router-dom";

export default function Nav () {
    return (
    <div className="knucklebones__nav">
        {console.log(window.location.pathname)}
        <ul>
            {window.location.pathname !== "/" ? 
            <li className="knucklebones__nav__item"><Link to="/">Home</Link></li> : ""}
             
             {window.location.pathname !== "/rules" ? 
             <li className="knucklebones__nav__item"><Link to="/rules">Rules</Link></li> : ""}
             
             {window.location.pathname !== "/play" ? 
             <li className="knucklebones__nav__item"><Link to="/play">Play</Link></li> : ""}
        </ul>
    </div>
    )
}