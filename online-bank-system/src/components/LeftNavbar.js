import React from "react";
import './LeftNavbar.css'

export const LeftNavbar = () =>{
    return(
        <div className="vertical-navbar">
            <a href="#">Account Details</a>
            <a href="#">Account Summary</a>
            <a href="#">Fund Transfer</a>
            <a href="#">Account Statement</a>
        </div>
    )
}