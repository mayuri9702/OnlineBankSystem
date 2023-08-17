import React from 'react'
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import './AccountStatement.css'


export const AccountStatement = () => {
    return(
        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar></LeftNavbar></div>
          <main className="content">
            <div>
            <div>
            <h3>Account Statement</h3>
            </div>
            <div>
              <div className="form-container">
                <div className='form-row'>
                  <label for="from">From:  </label>
                  <input type='date' id="from"/>
                  <label for="to">To:  </label>
                  <input type='date' id="to"/>
                </div>
              </div>
            </div>
            <div>
              <table className='bordered-table'>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Account Number</th>
                    <th>Name</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div style={{justifyContent:'right'}}>
              <button>Submit</button>
            </div>
            </div>
          </main>
        </div>
      </div>
    )
}