import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { AccountCard } from "./AccountCard";
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

    return(
        <div>
            <AdminNavbar></AdminNavbar>
            <center>
                <div>
                <h3>You are viewing {userID} accounts</h3>
                <div class="card-container">
                    {accounts.map((account,index)=>(
                        <AccountCard key={index} account={account}/>
                    ))}
                </div>
                </div>
            </center>
        </div>
    )
}