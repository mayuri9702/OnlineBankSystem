import React, {  useEffect, useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import axio from 'axios';
import './AccountSummary.css'
import { useLocation } from 'react-router-dom';

export const AccountSummary = () => {
  const [accounts, setAccounts] = useState([])
  
  const location = useLocation()
  const userID = location.state.userid

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

    return (
        <div className="app">
        <header className="header"><NavbarLogout/></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar state={{userid:userID}}/></div>
          <main className="content">
            <div className='app-container'>
              <h5>Welcome, {userID}</h5>
              <table className='items-table'>
                <thead>
                  <tr>
                    <th>Account Number</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map(account=>(
                    <tr key={account.accountNo}>
                      <td>{account.accountNo}</td>
                      <td>{account.accounttype}</td>
                      <td>{account.balance}</td>
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