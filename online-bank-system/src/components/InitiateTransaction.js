import React, {useState} from 'react';
import "./InitiateTransaction.css";
import { LeftNavbar } from './LeftNavbar';
import { NavbarLogout } from './NavbarLogout';
import './dashboard.css';


export const InitiateTransaction=()=>{

      const [fromAccount,setFromAccount]=useState("");
      const [toAccount,setToAccount]=useState("");
      const [amount,setAmount]=useState("");
      const [remark,setRemark]=useState("");
      const mode="NEFT";

      function reset(event){
        event.preventDefault();
        setFromAccount("");
        setToAccount("");
        setAmount("");
        setRemark("");
      }

      async function continueTransaction (event){
        event.preventDefault();
      }

    return (
      <div className="app">
      <header className="header"><NavbarLogout></NavbarLogout></header>
      <div className="container">
        <div className="sidebar"><LeftNavbar></LeftNavbar></div>
        <main className="content">
          <div>
          <div class="neft-transaction">
            Initiate Payment
          </div>

          <div class="transaction-form">
               <form>
                <div class="form-outline flex-fill mb-0">
                <label class="form-label" for ="fromAccount">Enter From Account</label>
                <input class="form-control" type="number" id="fromAccount" value={fromAccount} onChange={(event)=>{setFromAccount(event.target.value)}}></input>
                </div>
                <div class="form-outline flex-fill mb-0">
                <label class="form-label"for ="toAccount">Enter To Account</label>
                <input class="form-control"type="number" id="toAccount" value={toAccount} onChange={(event)=>{setToAccount(event.target.value)}}></input>
                </div>
                <div class="form-outline flex-fill mb-0">
                <label class="form-label" for ="amount">Enter Amount</label>
                <input class="form-control" type="number" id="amount" value={amount} onChange={(event)=>{setAmount(event.target.value)}}></input>
                </div>

                <div class="form-outline flex-fill mb-0">
                <label class="form-label" for ="remark">Enter Remarks</label>
                <input class="form-control" type="text" id="remark" value={remark} onChange={(event)=>{setRemark(event.target.value)}}></input>
                </div>

                <div class="button-form">
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={reset}>Reset</button>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={continueTransaction}>Continue</button>
                  </div>
                 </div> 
               </form>


          </div>
          </div>
        </main>
        </div>
        </div>
    );

}
