import React from 'react';
import './NavbarLogout.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const NavbarLogout = () =>{

    const navigate = useNavigate()
    async function handleLogout() {
        navigate('/login')
      } 

    return (
        <nav class="navbar navbar-expand-sm">
               <a className="navbar-brand">
            <img src="https://cdn2.iconfinder.com/data/icons/buildings-56/48/12-512.png" alt="Application image">
            </img> <span className="s">Online Banking System</span></a>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <button onClick={handleLogout}>Logout</button>
            </li>
        </ul>
    </nav>
    )
}