import React, {  useEffect, useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import './dashboard.css'
import axio from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ForbiddenPage } from './ForbiddenPage';

export const DisplayAccount = () => {
  const [accounts, setAccounts] = useState([])
  
  const location = useLocation()
  const userID = location.state.userid
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
    axio.get(`http://localhost:8081/accounts/user/${userID}`,requestOptions)
    .then(response=>{
      setAccounts(response.data)
      console.log(response.data)
    })
    .catch(error=>{
      console.error('Error fetching data: ',error)
    })
  },[])

  if(accounts.length===0){
    return(
      <div className="app">
        <header className="header"><NavbarLogout/></header>
        <div className="container">
          <main className="content">
            <div className='app-container'>
      <h5>Welcome, {userID}</h5>
      <p>You don't have any ccount yet!</p>
    </div>
    </main>
    </div>
    </div>
    )
  }

  const filteredAccounts = accounts.filter(account=>account.suspend==0)
  const suspendedAccounts = accounts.filter(account=>account.suspend==1)

    return (
        <div className="app">
        <header className="header"><NavbarLogout/></header>
        <div className="container">
          <main className="content">
            <div className='app-container'>
              <h5>Welcome, {userID}</h5>
              
              <table className='items-table' style={{border:"1px solid black"}}>
                <thead>
                  <tr>
                    <th style={{border:"1px solid black"}}>Account Number</th>
                    <th style={{border:"1px solid black"}}>Account Type</th>
                    <th style={{border:"1px solid black"}}>Account Details</th>
                  </tr>
                </thead>
                <tbody  style={{border:"1px solid black"}}>
                  {filteredAccounts.map(account=>(
                    <tr key={account.accountNo} style={{backgroundColor:'aliceblue'}}>
                      <td style={{border:"1px solid black"}}>{account.accountNo}</td>
                      <td style={{border:"1px solid black"}}>{account.accounttype}</td>
                      <td style={{border:"1px solid black"}}><Link to="/accountSummary" state={{userid:userID,accountno:account.accountNo}}>View Account</Link></td>
                    </tr>
                  ))}
                  {suspendedAccounts.map(account=>(
                    <tr key={account.accountNo} style={{border:"1px solid black", backgroundColor:'#969892'}}>
                      <td style={{border:"1px solid black"}}>{account.accountNo}</td>
                      <td style={{border:"1px solid black"}}>{account.accounttype}</td>
                      <td style={{border:"1px solid black"}}>Account deactivated</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    )
}