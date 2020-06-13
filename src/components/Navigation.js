import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    
    return (
        <nav className="gnb-box">
            <ul className="gnb">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
