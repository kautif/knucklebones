import React from "react";
import { BrowserRouter as Router,
    Switch, Routes, Route, Link } from "react-router-dom";

export default function Nav () {
    return (
        <Routes>
            <div className="knucklebones__nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/how">How To</Link></li>
                    <li><Link to="/play">Play</Link></li>
                </ul>
            </div>
        </Routes>
    )
}