import React from 'react';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">

  <a class="navbar-brand">
  <img src="https://o.remove.bg/downloads/6049c90f-798a-42b4-a380-86d6f331d02a/pngtree-vector-internet-banking-icon-png-image_755759-removebg-preview.png" width="30" height="30" class="d-inline-block align-top" alt="">
   </img> Online Banking System</a>

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/login">Login for Internet Banking</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/register">Register for Internet Banking</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/createAccount">Open a new bank account</a>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;
