import React, {useEffect, useState} from 'react';
import "./InitiateTransaction.css";
import { LeftNavbar } from './LeftNavbar';
import { NavbarLogout } from './NavbarLogout';
import './dashboard.css';
import axios from 'axios';
import PopUp from './PopUp';
import { useLocation } from 'react-router-dom'


export const InitiateTransaction=()=>{
      const location = useLocation()
      const userID = location.state.userid
      const accountNo = location.state.accountno
      const mode = location.state.mode
      const [fromAccount,setFromAccount]=useState("");
      const [toAccount,setToAccount]=useState("");
      const [amount,setAmount]=useState("");
      const [remark,setRemark]=useState("");
      const [pin, setPin] = useState('')
      const [fromAccErr, setFromAccErr]=useState(false);
      const [toAccErr, setToAccErr]=useState(false);
      const [amtErr, setAmtErr]=useState(false);
      const [pinErr, setPinErr] = useState(false)
      const [payeeAccountNo,setPayeeAccountNo]=useState(0);
      const [allPayee, setAllPayee] = useState([])
      const [popUpState, setPopUpState] = useState(0);
      const [response, setResponse] = useState(1)


      // const responsepayee = axios.get(`http://localhost:8081/payees/${accountNo}`);
      // console.log(responsepayee)
      useEffect(()=>{
        axios.get(`http://localhost:8081/payees/${accountNo}`)
        .then(response=>{
          setAllPayee(response.data)
          console.log(response.data)
        })
        .catch(error=>{
          console.error('Error fetching data: ',error)
        })
      },[])

      const openPopUp = () => {
        setPopUpState(1);
      };

      const closePopUp = () => {
        setPopUpState(0);
      };

      const handlePayeeDetails=(e)=>{
        setPayeeAccountNo(e.target.value);
      }

      function reset(event){
        event.preventDefault();
        setFromAccount("");
        setToAccount("");
        setAmount("");
        setRemark("");
      }

      async function continueTransaction (event){
        const responseaccount = await axios.get(`http://localhost:8081/accounts/${accountNo}`);
        event.preventDefault();
        if(fromAccount===''){
          setFromAccErr(true)
        }else{
          setFromAccErr(false)
        }
        if(toAccount===''){
          setToAccErr(true)
        }else{
          setToAccErr(false)
        }
        if(amount===''){
          setAmtErr(true)
        }else{
          setAmtErr(false)
        }
        if(pin===''){
          setPinErr(true)
        }else{
          setPinErr(false)
        }

        if(fromAccount!=='' && toAccount!=='' && amount!=='' && pin!=='' && pin === responseaccount.data.transactionpin && amount<=responseaccount.data.balance){
          
          if(response===1){
            setPopUpState(1)
          }

      }

      }

    return (
      <div>
                    <NavbarLogout></NavbarLogout>
                    <LeftNavbar state={{useid:userID, accountno:accountNo}}/>
                        <div class="row d-flex align-items-center justify-content-center h-100" style={{marginTop:5+'rem'}}>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                    <h1>Initiate Payment</h1>
                            </div>

                            <form>
                              <div class="form-outline mb-4">
                              
                            <select className="form-select mt-3" name="payee" required onChange={handlePayeeDetails}>
                              <option selected disabled value={0} >Select a payee</option>
                              {allPayee.map(payee=>(

                                <option value={payee.payeeaccountno}>{payee.payeename}</option>
                              ))

                              }
                              {/* <option value="current">Current</option>
                              <option value="salary">Salary</option>
                              <option value="fixedDeposit">Fixed Deposit</option>
                              <option value="recurringDeposit">Recurring Deposit</option>
                              <option value="nri">NRI</option> */}
                            </select>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="toAccountNumber">To Account Number</label>
                                <input type="number" id="toAaccountNumber" class="form-control form-control-lg"
                                value={payeeAccountNo} />
                                {toAccErr?<span>To Account Number can't be empty!</span>:null}
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="fromAccountNumber">From Account Number</label>
                                <input type="number" id="fromAaccountNumber" class="form-control form-control-lg"
                                value={accountNo} onChange={(e)=>setFromAccount(e.target.value)} />
                                {fromAccErr?<span>From Account Number can't be empty!</span>:null}
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="amount">Enter Amount</label>
                                <input type="number" id="amount" class="form-control form-control-lg" 
                                value={amount} onChange={(e)=>setAmount(e.target.value)} required={true}/>
                                {amtErr?<span>Amount can't be empty!</span>:null}
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="pin">Enter Transaction Pin</label>
                                <input type="password" id = "pin" class="form-control form-control-lg" 
                                value={pin} onChange={(e)=>setPin(e.target.value)} maxLength={6} required={true}/>
                                {pinErr?<span>Transaction Pin can't be empty!</span>:null}
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="review">Mode</label>
                                <input type="text" id="review" class="form-control form-control-lg"
                                value={mode} />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="review">Enter Remark</label>
                                <input type="text" id="review" class="form-control form-control-lg"
                                value={remark} onChange={(e)=>setRemark(e.target.value)} />
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={reset}>Reset</button>
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={continueTransaction}>Continue</button>
                            </div>
                        </form>

                    </div>
                </div>
 {popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          <h4 style={{color:"red"}}>Insufficient Fund!</h4>
          <ul>
            <li>The money in your account is not enough for this payment.</li>
            <li>Check account balance and try again.</li>
          </ul>
        </PopUp>
      )}
            </div>
        )

}
