import React, { useState } from "react";
import AdminNavbar from './AdminNavbar'
import './AccountHolders.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axio from 'axios';
import moreDetails from '../images/moreDetails.png'

export const AccountHolders = () =>{
    const [users, setUsers] = useState([])

    
  useEffect(()=>{
    axio.get(`http://localhost:8081/logins/users`)
    .then(response=>{
      setUsers(response.data)
      console.log(response.data)
    })
    .catch(error=>{
      console.error('Error fetching data: ',error)
    })
  },[])

  if(users.length===0){
    return(
      <div className="app">
        <header className="header"><AdminNavbar></AdminNavbar></header>
        <div className="container">
          <main className="content">
            <div className='app-container'>
                <p>No users login yet!</p>
            </div>
        </main>
        </div>
    </div>
    )
  }

    return(
        <div>
            <AdminNavbar></AdminNavbar>
        <center>
            <div>
                <h3 style={{marginTop:10+'px'}}>Account Holders Details</h3>
                <table className="bordered-table">
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Account Holder Email ID</th>
                        <th>View Accounts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user=>(
                    <tr key={user.userid}>
                        <td>{user.userid}</td>
                      <td>{user.emailid}</td>
                      <td><Link to="/viewAccounts" state={{userid:user.userid}}><img src={moreDetails} alt="view image"/></Link></td>
                    </tr>
                  ))}
                    </tbody>
                </table>
              </div>
              </center>
        </div>
    )
}