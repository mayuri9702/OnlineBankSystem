import React, {  useEffect, useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import axio from 'axios';
import './AccountSummary.css'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const DisplayAccount = () => {
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

  if(accounts.length===0){
    return(
      <div className="app">
        <header className="header"><NavbarLogout/></header>
        <div className="container">
          <main className="content">
            <div className='app-container'>
      <h5>Welcome, {userID}</h5>
      <p>You don't have any account yet!</p>
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
              
              <table className='items-table'>
                <thead>
                  <tr>
                    <th>Account Number</th>
                    <th>Account Type</th>
                    <th>Account Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccounts.map(account=>(
                    <tr key={account.accountNo}>
                      <td>{account.accountNo}</td>
                      <td>{account.accounttype}</td>
                      <td><Link to="/accountSummary" state={{userid:userID,accountno:account.accountNo}}>View Account</Link></td>
                    </tr>
                  ))}
                  {suspendedAccounts.map(account=>(
                    <tr key={account.accountNo} style={{backgroundColor:'#A9A9A9'}}>
                      <td>{account.accountNo}</td>
                      <td>{account.accounttype}</td>
                      <td>Account deactivated</td>
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