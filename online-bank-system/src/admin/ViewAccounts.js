import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {AdminNavbar} from './AdminNavbar';
import { AccountCard } from "./AccountCard";
import { AccountCardDeactivated } from "./AccountCardDeactivated";
import axio from 'axios';
import { useEffect } from "react";
import { ForbiddenPage } from "../components/ForbiddenPage";

export const ViewAccounts=()=>{

    const location = useLocation()
    const userID = location.state.userid
    const adminUserId = location.state.adminUserId
    const [accounts, setAccounts] = useState([])
    const [showAccounts, setShowAccounts] = useState('')
    const token = localStorage.getItem('jwtToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
  
    const requestOptionsGet = {
      method: 'GET',
      headers: headers,
    }
    if(token === "null")
    {
    return(<ForbiddenPage />)
    }
    useEffect(()=>{
        axio.get(`http://localhost:8081/accounts/admin/${adminUserId}/user/${userID}`,requestOptionsGet)
        .then(response=>{
          setAccounts(response.data)
          console.log(response.data)
        })
        .catch(error=>{
          console.error('Error fetching data: ',error)
        })
      },[])
      
    const filteredAccounts = accounts.filter(account=>account.suspend==0)
    const suspendedAccounts = accounts.filter(account=>account.suspend==1)
      

    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <center>
                <div>
                <h3>You are viewing {userID} accounts</h3>
                <div class="card-container">
                {filteredAccounts.map((account,index)=>(
                    <AccountCard key={index} account={account} state={{adminUserId:adminUserId}}/>
                ))}
                 {suspendedAccounts.map((account,index)=>(
                    <AccountCardDeactivated key={index} account={account} state={{adminUserId:adminUserId}}/>
                ))}
            </div>
                </div>
            </center>
        </div>
    )
}