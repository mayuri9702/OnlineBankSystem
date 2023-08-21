import React, {  useEffect, useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import axio from 'axios';
import './AccountSummary.css'
import { useLocation } from 'react-router-dom';

export const AccountSummary = () => {
 
  
  const location = useLocation()
  const userID = location.state.userid
  const accountNo = location.state.accountno
  
  useEffect(()=>{
    axio.get(`http://localhost:8081/accounts/${accountNo}}`)
    .then(response=>{
      
    //  console.log("hello:",accountNo)
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
          <div className="sidebar"><LeftNavbar state={{userid:userID, accountno:accountNo}}/></div>
          <main className="content">
            <div className='app-container'>
              <h5>Welcome</h5>
              
            </div>
          </main>
        </div>
      </div>
    )
}