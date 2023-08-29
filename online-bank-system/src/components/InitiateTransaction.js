import React, {useEffect, useState} from 'react';
import "./InitiateTransaction.css";
import { LeftNavbar } from './LeftNavbar';
import { NavbarLogout } from './NavbarLogout';
import './dashboard.css';
import axios from 'axios';
import PopUp from './PopUp';
import { useLocation, useNavigate } from 'react-router-dom'
import { ForbiddenPage } from './ForbiddenPage';


export const InitiateTransaction=()=>{
      const location = useLocation()
      const navigate = useNavigate()
      const userID = location.state.userid
      const accountNo = location.state.accountno
      const mode = location.state.mode
      const [fromAccount,setFromAccount]=useState(accountNo);
      const [toAccount,setToAccount]=useState('');
      const [amount,setAmount]=useState('');
      const [remark,setRemark]=useState("");
      const [pin, setPin] = useState('')
      const [fromAccErr, setFromAccErr]=useState(false);
      const [toAccErr, setToAccErr]=useState(false);
      const [amtErr, setAmtErr]=useState(false);
      const [pinErr, setPinErr] = useState(false)
      const [allPayee, setAllPayee] = useState([])
      const [popUpState, setPopUpState] = useState(0);
      const [displayMessage, setDisplayMessage] = useState('')
      const token = localStorage.getItem('jwtToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    const requestOptionsGet = {
      method: 'GET',
      headers: headers,
    }
    const requestOptionsPost = {
      method: 'POST',
      headers: headers,
    }
    const requestOptionsPut = {
      method: 'PUT',
      headers: headers,
    }

    if(token === "null")
    {
    return(<ForbiddenPage />)
    }
    // const responsepayee = axios.get(`http://localhost:8081/payees/${accountNo}`);
      // console.log(responsepayee)
      useEffect(()=>{
        axios.get(`http://localhost:8081/payees/${accountNo}`,requestOptionsGet)
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
        navigate('/fundTransfer',{state:{userid:userID, accountno:accountNo}})
      };
      
      
      const handlePayeeDetails=(e)=>{
        setToAccount(e.target.value);
      }

      function reset(event){
        event.preventDefault();
        setFromAccount("");
        setToAccount("");
        setAmount("");
        setRemark("");
      }

      const generateTransactionNumber = () => {
        const  transactiontNumber = Math.floor(100000000000 + Math.random() * 900000000000);
        return transactiontNumber;
      };

      async function continueTransaction (event){
        event.preventDefault();
        try{
        const responseaccount = await axios.get(`http://localhost:8081/accounts/${accountNo}`,requestOptionsGet);
        console.log('get by account number')
        console.log(responseaccount)
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
        console.log(accountNo,toAccount,amount,pin)
        console.log(pin,responseaccount.data.transactionpin)
        console.log(amount, responseaccount.data.balance)
        if(pin == responseaccount.data.transactionpin && amount<=responseaccount.data.balance){
          const updatedBalance = responseaccount.data.balance - amount;
          const updatedAccount ={
            balance: updatedBalance
        };
        console.log(updatedBalance)
        const response1 = await axios.put(`http://localhost:8081/accounts/accbalance/${accountNo}`,updatedAccount,requestOptionsPut);
        // console.log(response1)
        
        const transactionNo = generateTransactionNumber()
        const today = new Date()
        var date ;
        if(today.getMonth() + 1 <=9)
        {
          date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
        }
        else{
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        }
        const transactiondetails ={
          transactionid: transactionNo,
          toaccno :toAccount,
          amount:amount,
          date:date,
          remarks:remark,
          mode:mode
        };
        console.log(transactiondetails)
        const responsepost = await axios.post(`http://localhost:8081/transactions/${accountNo}`,transactiondetails,requestOptionsPost);
      
          // openPopUp()
          // console.log(responsepost)
          console.log(('-------------------------------'))
          // navigate('/fundTransfer',{state:{userid:userID, accountno:accountNo}})
          setDisplayMessage(
            <h4 style={{color:"green"}}>Transaction Successful</h4>
          )
      }
      else 
      {
        if(pin != responseaccount.data.transactionpin){
          setDisplayMessage(
            <h4 style={{color:"red"}}>Incorrect Pin!</h4>
          )
        }
        if(amount>responseaccount.data.balance)
        {
        setDisplayMessage(
          <>
          <h4 style={{color:"red"}}>Insufficient Fund!</h4>
            <ul>
              <li>The money in your account is not enough for this payment.</li>
              <li>Check account balance and try again.</li>
            </ul>
          </>
        )
        }
      }
      
        }
        catch(error)
        {
          console.log('Error:', error.message);
        }
      // console.log('------------------------------')
      // navigate('/fundTransfer',{state:{userid:userID, accountno:accountNo}})
      openPopUp()
      

      }

    return (
      <div>
                    <NavbarLogout></NavbarLogout>
                    <LeftNavbar state={{useid:userID, accountno:accountNo,mode:mode}}/>
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
                                value={toAccount} />
                                {toAccErr?<span>To Account Number can't be empty!</span>:null}
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="fromAccountNumber">From Account Number</label>
                                <input type="number" id="fromAaccountNumber" class="form-control form-control-lg"
                                value={accountNo} />
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
                                <input type="number" id = "pin" class="form-control form-control-lg" 
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
                                <button type="submit" style={{marginRight:10+'px'}} class="btn btn-primary btn-lg btn-block" onClick={reset}>Reset</button>
                                <button type="submit" style={{marginLeft:10+'px'}} class="btn btn-primary btn-lg btn-block" onClick={continueTransaction}>Continue</button>
                            </div>
                        </form>

                    </div>
                </div>
 {popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          {displayMessage}
        </PopUp>
      )}
            </div>
        )

}
