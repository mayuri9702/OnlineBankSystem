import React from 'react';
import './NavbarLogout.css'
import axios from 'axios'

export const NavbarLogout = () =>{

    async function handleLogout() {
      } 

    return (
        <nav class="navbar navbar-expand-sm">
               <a class="navbar-brand">
            <img src="https://o.remove.bg/downloads/6049c90f-798a-42b4-a380-86d6f331d02a/pngtree-vector-internet-banking-icon-png-image_755759-removebg-preview.png" width="30" height="30" class="d-inline-block align-top" alt="">
            </img> Online Banking System</a>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <button onClick={handleLogout}>Logout</button>
            </li>
        </ul>
    </nav>
    )
}