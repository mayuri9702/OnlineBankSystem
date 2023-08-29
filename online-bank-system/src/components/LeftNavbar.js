import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './LeftNavbar.css'
import { Link } from "react-router-dom"

export const LeftNavbar = () =>{

    const location = useLocation(); // Get the current route location
  const activeLinkStyle = {
    backgroundColor: '#87CEEB', // Set your desired background color here
  };
  const userID = location.state.userid
  const accountNo = location.state.accountno

    return(
        <div className="vertical-navbar">
            {/* <p>{props.userid}</p> */}
            <Link class = "active" to="/accountSummary" className={location.pathname === '/accountSummary' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/accountSummary' ? activeLinkStyle : {}} state={{userid:userID, accountno:accountNo}}>Account Summary</Link>

            <Link to="/fundTransfer" className={location.pathname === '/fundTransfer' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/fundTransfer' ? activeLinkStyle : {}} state={{userid:userID, accountno:accountNo}}>Fund Transfer</Link>

            <Link to="/accountStatement" className={location.pathname === '/accountStatement' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/accountStatement' ? activeLinkStyle : {}} state={{userid:userID, accountno:accountNo}}>Account Statement</Link>

            <Link to="/setNewPassword" className={location.pathname === '/setNewPassword' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/setNewPassword' ? activeLinkStyle : {}} state={{userid:userID, accountno:accountNo}}>Change Login Password</Link>

            <Link to="/displayAccount" className={location.pathname === '/displayAccount' ? 'active-link' : 'navbar-link'}
        style={location.pathname === '/displayAccount' ? activeLinkStyle : {}} state={{userid:userID, accountno:accountNo}}>Go back to accounts</Link>


        </div>
    )
}