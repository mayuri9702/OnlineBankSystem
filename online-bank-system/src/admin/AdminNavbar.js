import React from 'react';
import '../components/NavbarLogout.css'
import {Link, useNavigate} from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  return (
  
    <nav class="navbar navbar-expand-sm">

  <a class="navbar-brand">
  <img src="https://cdn2.iconfinder.com/data/icons/buildings-56/48/12-512.png" alt="Application image">
   </img> <span className="s">Online Banking System</span></a>

  <ul class="navbar-nav">
    <li class="nav-item">
      <Link className="item" to="/adminLogin" style={{marginLeft:900+'px'}}>Logout</Link>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;
