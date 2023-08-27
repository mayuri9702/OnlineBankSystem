import React, {  useEffect, useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import axio from 'axios';
import './AccountSummary.css'
import { useLocation } from 'react-router-dom';
import { ForbiddenPage } from './ForbiddenPage';

export const AccountSummary = () => {
 
  let [account, setAccount] = useState([]) 
  const location = useLocation()
  const userID = location.state.userid
  const accountNo = location.state.accountno
  const token = localStorage.getItem('jwtToken')
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const requestOptions = {
    method: 'GET',
    headers: headers,
  }
  if(token === "null")
    {
    return(<ForbiddenPage />)
    }

  useEffect(()=>{
   fetchData()
  },[account])

  const fetchData = () =>{
    axio.get(`http://localhost:8081/accounts/${accountNo}`,requestOptions)
    .then(response=>{ 
      setAccount(response.data) 
    })
    .catch(error=>{
      console.error('Error fetching data: ',error)
    })
  }

  

    return (
        <div className="app">
        <header className="header"><NavbarLogout/></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar state={{userid:userID, accountno:accountNo}}/></div>
          <main className="content">
            <div className='app-container'>
             <h1>Account Details</h1>
             <table>
                <tr>
                  <td>Account Number</td>
                  <td>:</td>
                  <td>{account.accountNo}</td>
                </tr>
                <tr>
                  <td>Account Holder Name</td>
                  <td>:</td>
                  <td>{account.title} {account.firstname} {account.middlename} {account.lastname}</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>:</td>
                  <td>{account.accounttype}</td>
                </tr>
                <tr>
                  <td>Balance</td>
                  <td>:</td>
                  <td>{account.balance}</td>
                </tr>
                <tr>
                  <td>Aadhar card number</td>
                  <td>:</td>
                  <td>{account.aadharnumber}</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>:</td>
                  <td>{account.dob}</td>
                </tr>
                <tr>
                  <td>Occupation Type</td>
                  <td>:</td>
                  <td>{account.occupationtype}</td>
                </tr>
                <tr>
                  <td>Source of Income</td>
                  <td>:</td>
                  <td>{account.sourceofincome}</td>
                </tr>
                <tr>
                  <td>Annual Income</td>
                  <td>:</td>
                  <td>{account.annualincome}</td>
                </tr>
                <tr>
                  <td>Permanent Address</td>
                  <td>:</td>
                  <td>{account.permanentAddress}</td>
                </tr>
                <tr>
                  <td>Residential Address</td>
                  <td>:</td>
                  <td>{account.residentialAddress}</td>
                </tr>
             </table> 
            </div>
          </main>
        </div>
      </div>
    )
}