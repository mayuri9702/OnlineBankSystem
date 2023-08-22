import React from "react";
import './dashboard.css'
import { NavbarLogout } from "./NavbarLogout";
import { LeftNavbar } from "./LeftNavbar";
import { useLocation } from "react-router-dom";

export const TransferSuccess=()=>{
  const location=useLocation()
  const userID = location.state.userid 
  const accountNo = location.state.accountno
  return(
    <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar state={{userid:userID, accountno:accountNo}}/></div>
          <main className="content" style={{backgroundColor:'#D6F6D5'}}>
            <div>
              <div class="row" style={{marginBottom:5+'rem'}}>
                <h2>Transfer Successful</h2>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-md-2">
                    <label for="ref">Transaction ID - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="ref"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2">
                    <label for="mode">Mode - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="mode"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2">
                    <label for="paid">Paid to Account - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="paid"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2">
                    <label for="amt">Amount - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="amt"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2">
                    <label for="fromAcc">From Account - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="fromAcc"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2">
                    <label for="date">On - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="date"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2">
                    <label for="remark">Remark - </label>
                  </div>
                  <div class="col-md-10">
                    <p id="remark"></p>
                  </div>
                </div>

              </div>

              

            </div>
          </main>
        </div>
      </div>
  )
}