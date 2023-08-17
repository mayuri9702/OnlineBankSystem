import React from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import { useNavigate } from 'react-router-dom';

export const FundTransfer = () => {
    const navigate = useNavigate()
    return (
        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar></LeftNavbar></div>
          <main className="content">
            <div>
                <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                onClick={()=>navigate("/addPayee")}>Add Payee</button>
            </div>
            </div>
          </main>
        </div>
      </div>
    )
}