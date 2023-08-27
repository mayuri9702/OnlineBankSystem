import React, { useState } from "react";
import {AdminNavbar} from './AdminNavbar'
import './AccountHolders.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axio from 'axios';
import moreDetails from '../images/moreDetails.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const AccountHolders = () =>{
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const location = useLocation()
  const adminUserId = location.state.adminUserId
    const token = localStorage.getItem('jwtToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
  
    const requestOptionsGet = {
      method: 'GET',
      headers: headers,
    }

    console.log(search)
    
  useEffect(()=>{
    axio.get(`http://localhost:8081/logins/admin/${adminUserId}/users`,requestOptionsGet)
    .then(response=>{
      setUsers(response.data)
      console.log(response.data)
      console.log(response.data[0].account[0])
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

  const filteredUsers = users.filter(user=>user.admin==0)

    return(
        <div>
            <AdminNavbar></AdminNavbar>
        <center>
            <div>
                <h3 style={{marginTop:10+'px'}}>Account Holders Details</h3>
                <div className="search-input">
                  <Form>
                      <InputGroup>
                        <Form.Control 
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder='Search an account holder by User ID'/>
                      </InputGroup>
                  </Form>
                </div>
                <table className="bordered-table" striped bordered hover>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email ID</th>
                        {/* <th>Name</th> */}
                        <th>View Accounts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.filter((user)=>{
                      return search.toLowerCase()===''
                      ? user
                      : user.userid.toLowerCase().includes(search.toLowerCase());
                    }).map(user=>(
                    <tr key={user.userid}>
                        <td>{user.userid}</td>
                      <td>{user.emailid}</td>
                      {/* <td>{user.account[0]}</td> */}
                      <td><Link to="/viewAccounts" state={{userid:user.userid, adminUserId:adminUserId}}><img src={moreDetails} alt="view image"/></Link></td>
                    </tr>
                  ))}
                    </tbody>
                </table>
              </div>
              </center>
        </div>
    )
}