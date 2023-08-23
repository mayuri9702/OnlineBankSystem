import React from 'react';
import '../components/NavbarLogout.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm">

  <a class="navbar-brand">
  <img src="https://cdn2.iconfinder.com/data/icons/buildings-56/48/12-512.png" alt="Application image">
   </img> <span className="s">Online Banking System</span></a>

  <ul class="navbar-nav">
  <li class="nav-item">
      <Link className="item" to="/adminDashboard">Dashboard</Link>
    </li>
    <li class="nav-item">
      <Link className="item" to="/accountHolders">Account Holder</Link>
    </li>
    <li class="nav-item">
      <Link className="item" to="#">Logout</Link>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;
