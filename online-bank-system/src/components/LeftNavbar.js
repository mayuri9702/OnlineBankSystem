import React from "react";
import { useLocation } from "react-router-dom";
import './LeftNavbar.css'

export const LeftNavbar = () =>{

    const location = useLocation(); // Get the current route location
  const activeLinkStyle = {
    backgroundColor: '#87CEEB', // Set your desired background color here
  };

    return(
        <div className="vertical-navbar">

            <a class = "active" href="/accountSummary" className={location.pathname === '/accountSummary' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/accountSummary' ? activeLinkStyle : {}}>Account Summary</a>

            <a href="/fundTransfer" className={location.pathname === '/fundTransfer' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/fundTransfer' ? activeLinkStyle : {}}>Fund Transfer</a>

            <a href="/accountStatement" className={location.pathname === '/accountStatement' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/accountStatement' ? activeLinkStyle : {}}>Account Statement</a>

            <a href="/setNewPassword" className={location.pathname === '/setNewPassword' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/setNewPassword' ? activeLinkStyle : {}}>Change Login Password</a>

        </div>
    )
}