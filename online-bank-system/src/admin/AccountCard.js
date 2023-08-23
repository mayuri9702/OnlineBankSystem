import React from "react";
import './AccountCard.css'
import open from '../images/open.png'
import { Link } from "react-router-dom";
import name from '../images/name.png';
import birthDate from '../images/birthDate.png'
import mobile from '../images/mobile.png'
import number from '../images/number.png'
import aadharCard from '../images/aadharCard.jpg'


export const AccountCard = ({account}) =>{
    return(
       <div className="account-card">
            <Link className="view" to="/viewTransactions" state={{accountno:account.accountNo}}><img src={open} alt=""/></Link>
            <div style={{float:'left'}}>
            <p><img src={number} alt="Account Number Image"/> {account.accountNo}</p>
            <p><img src={name} alt="Name Image"/> {account.title} {account.firstname} {account.middlename} {account.lastname}</p>
            <p><img src={aadharCard} alt="Aadhar Card Image" height="10px" width="10px"/> {account.aadharnumber}</p>
            <p><img src={mobile} alt="Mobile Image"/>{account.mobilenumber}</p>
            <p><img src={birthDate} alt="Birth Date Image"/>{account.dob}</p>
            </div>
            <div class="button-container">
                <button className="deactivate-button">Deactivate</button>
                <button className="delete-button">Delete</button>
            </div>
       </div>
    )
}