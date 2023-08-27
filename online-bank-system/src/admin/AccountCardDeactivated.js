import React, { useState } from "react";
import './AccountCard.css'
import open from '../images/open.png'
import { Link,useLocation } from "react-router-dom";
import name from '../images/name.png';
import birthDate from '../images/birthDate.png'
import mobile from '../images/mobile.png'
import number from '../images/number.png'
import aadharCard from '../images/aadharCard.jpg'
import axios from "axios";
import { ForbiddenPage } from "../components/ForbiddenPage";

export const AccountCardDeactivated = ({account,currentStatus, receiveStatus}) =>{
    const location = useLocation()
    const adminUserId = location.state.adminUserId
    const token = localStorage.getItem('jwtToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    const requestOptionsPut = {
      method: 'PUT',
      headers: headers,
    }
    if(token === "null")
    {
    return(<ForbiddenPage />)
    }
    async function handleActivate (event)  {
        event.preventDefault()
        try{
        const updatedAccount ={
            suspend : 0
        };
        const response1 = await axios.put(`http://localhost:8081/accounts/admin/${adminUserId}/updateSuspendDeactive/${account.accountNo}`,updatedAccount,requestOptionsPut);
        console.log(response1)
            if(response1.status===200){
                alert("Account activated successfully")
                if(currentStatus === 0)
                {
                    receiveStatus(1)
                }
                else if(currentStatus === 1)
                {
                    receiveStatus(0)
                }
            }
        } catch(error)
            {
            console.log('Error:', error.message);
            }
    }

    return(
       <div className="account-card-deactive">
            <Link className="view" to="/viewTransactions" state={{adminUserId:adminUserId, accountno:account.accountNo}}><img src={open} alt=""/></Link>
            <center>
            <div style={{justifyContent:'center'}}>
            <p><img src={number} alt="Account Number Image"/> {account.accountNo}</p>
            <p><img src={name} alt="Name Image"/> {account.title} {account.firstname} {account.middlename} {account.lastname}</p>
            <p><img src={aadharCard} alt="Aadhar Card Image" height="10px" width="10px"/> {account.aadharnumber}</p>
            <p><img src={mobile} alt="Mobile Image"/>{account.mobilenumber}</p>
            <p><img src={birthDate} alt="Birth Date Image"/>{account.dob}</p>
            <button className="deactivate-button" onClick={handleActivate}>Activate</button>
            </div>
            </center>
           
                
            
       </div>
    )
}