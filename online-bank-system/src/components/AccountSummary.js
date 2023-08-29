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
  let [perAddr, setPerAddr] = useState([]) 
  const [resAddr, setResAddr] = useState([])
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
      const fetchData = response.data;
      setAccount(fetchData)
      const parsedPerAddress = JSON.parse(fetchData.permanentAddress)
      setPerAddr(parsedPerAddress)
      const parsedResAddress = JSON.parse(fetchData.residentialAddress)
      setResAddr(parsedResAddress)
     
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
             <table className='items-table'>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Account Number</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.accountNo}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Account Holder Name</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.title} {account.firstname} {account.middlename} {account.lastname}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Account Type</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.accounttype}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Balance</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.balance}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Aadhar card number</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.aadharnumber}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Date of Birth</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.dob}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Occupation Type</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.occupationtype}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Source of Income</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.sourceofincome}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Annual Income</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{account.annualincome}</td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Permanent Address</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{perAddr.perAddr}, {perAddr.perCity}, {perAddr.perState}, {perAddr.perPincode} </td>
                </tr>
                <tr style={{backgroundColor:'aliceblue'}}>
                  <td style={{fontWeight:'bold'}}>Residential Address</td>
                  <td style={{fontWeight:'bold'}}>:</td>
                  <td>{resAddr.resAddr}, {resAddr.resCity}, {resAddr.resState}, {resAddr.resPincode}</td>
                </tr>
             </table> 
            </div>
          </main>
        </div>
      </div>
    )
}