import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import { AccountCard } from "./AccountCard";
import { AccountCardDeactivated } from "./AccountCardDeactivated";
import axio from 'axios';
import { useEffect } from "react";

export const ViewAccounts=()=>{

    const location = useLocation()
    const userID = location.state.userid
    const [accounts, setAccounts] = useState([])

    useEffect(()=>{
        axio.get(`http://localhost:8081/accounts/user/${userID}`)
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
                        <AccountCard key={index} account={account}/>
                    ))}
                     {suspendedAccounts.map((account,index)=>(
                        <AccountCardDeactivated key={index} account={account}/>
                    ))}
                </div>
                </div>
            </center>
        </div>
    )
}