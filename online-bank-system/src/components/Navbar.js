import React from 'react';
import './NavbarLogout.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm">

  <a class="navbar-brand">
  <img src="https://cdn2.iconfinder.com/data/icons/buildings-56/48/12-512.png" alt="Application image">
   </img> <span className="s">Online Banking System</span></a>

  <ul class="navbar-nav">
  <li class="nav-item">
      <Link className="item" to="/login">Login</Link>
    </li>
    <li class="nav-item">
      <Link className="item" to="/newUser">Register/New User</Link>
    </li>
    <li class="nav-item">
      <Link className="item" to="/register">Register for Internet Banking</Link>
    </li>
    <li class="nav-item">
      <Link className="item" to="/createAccount">Open a new bank account</Link>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;
