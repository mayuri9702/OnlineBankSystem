import React from "react";
import './LeftNavbar.css'

export const LeftNavbar = () =>{
    return(
        <div className="vertical-navbar">
            <a href="/accountDetails">Account Details</a>
            <a href="#">Account Summary</a>
            <a href="/fundTransfer">Fund Transfer</a>
            <a href="/accountStatement">Account Statement</a>
            <a href="/setNewPassword">Change Login Password</a>
        </div>
    )
}