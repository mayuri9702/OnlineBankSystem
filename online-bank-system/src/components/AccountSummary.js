import React, { useContext, useEffect, useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import axio from 'axios';
import './AccountSummary.css'

export const AccountSummary = () => {
  
  const [accounts, setAccounts] = useState([])
  

  useEffect(()=>{
    axio.get(`http://localhost:8081/accounts/user/${user}`)
    .then(response=>{
      setAccounts(response.data)
      console.log(response.data)
      console.log(user)
    })
    .catch(error=>{
      console.error('Error fetching data: ',error)
    })
  },[])

    return (
        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar></LeftNavbar></div>
          <main className="content">
            <div className='app-container'>
              <h5>Welcome, {user}</h5>
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