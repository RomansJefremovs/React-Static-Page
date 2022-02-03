import React from "react";
import react_logo from "../Images/react-icon-small.png";
import "./navbar.css"

export default function Navbar(){
    return(
        <nav className="nav-container">
           <div className="nav-logo">
               <img src={react_logo}/>
               <h3>React Facts</h3>
           </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}