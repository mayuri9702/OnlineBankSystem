import React, { useEffect } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'

export const AccountSummary = () => {

    return (
        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar></LeftNavbar></div>
          <main className="content">Account Summary</main>
        </div>
      </div>
    )
}