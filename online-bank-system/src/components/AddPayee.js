import React, { useState } from "react";
import { NavbarLogout } from "./NavbarLogout";
import { useLocation,useNavigate } from "react-router-dom";
import { LeftNavbar } from "./LeftNavbar";
import './dashboard.css'
import axios from 'axios';
import { ForbiddenPage } from "./ForbiddenPage";
import PopUp from "./PopUp";


export const AddPayee = () =>{
    const location = useLocation()
    const userID = location.state.userid
    const accountNo = location.state.accountno
    const [name, setName] = useState('')
    const [accNo, setAccNo] = useState('')
    const [reAccNo, setReAccNo] = useState('')
    const [nick, setNick] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [accNoErr, setAccNoErr] = useState(false)
    const [reAccNoErr, setReAccNoErr] = useState(false)
    const [popUpState, setPopUpState] = useState(0);
    const [popUpMsg, setPopUpMsg] = useState(0)
    const navigate = useNavigate()
    const token = localStorage.getItem('jwtToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    const requestOptionsPost = {
        method: 'POST',
        headers: headers,
      }
    if(token === "null")
    {
    return(<ForbiddenPage />)
    }
    const openPopUp = () => {
        setPopUpState(1);
      };

    const closePopUp = () => {
        setPopUpState(0);
        navigate('/fundTransfer',{state:{userid:userID, accountno:accountNo}})
        
      };
    async function save(e){
        e.preventDefault()
        if(name===''){
            setNameErr(true)
        }else{
            setNameErr(false)
        }
        if(accNo===''){
            setAccNoErr(true)
        }else{
            setAccNoErr(false)
        }
        if(reAccNo===''){
            setReAccNoErr(true)
        }else{
            setReAccNoErr(false)
        }
        if(name!=='' && accNo!=='' && reAccNo!=='' && accNo === reAccNo){
            try{
                const payeedetails={
                    payeeaccountno: accNo,
                    payeename: name,
                    nickname: nick
                    // accountNo: accountNo
                };
                const response = await axios.post(`http://localhost:8081/payees/${accountNo}`, payeedetails,requestOptionsPost);
                if(response.status === 200)
                {
                    setPopUpState(1)
                    setPopUpMsg("Payee added successfully")
                    // console.log(response)
                }
                console.log(response)
            //    setName('')
            //    setAccNo('')      
            //    setReAccNo('')      
            }
            catch(err){
              alert('Payee can not be added')
            }
        }
        else {
            alert("account number should be same")
        }
    }

    function reAccNoHandler(e){
        // let item=e.target.value
        // if(item!==accNo){
        //   setReAccNoErr(true)
        // }else{
        //   setReAccNoErr(false)
        // }
        setReAccNo(e.target.value)
    }

    function nickHandler(e){
        setNick(e.target.value)
    }

    function accNoHandler(e){
        setAccNo(e.target.value)
    }

    function nameHandler(e){
        setName(e.target.value)
    }

    return(
        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar state={{userid:userID, accountno:accountNo}}/></div>
          <main className="content">
          <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
    
        <form>
          <div class="form-outline mb-4">
          
                        <label class="form-label" for="name">Beneficiary Name</label>
                        <input type="text" id="name" class="form-control form-control-lg border"
                        value={name} onChange={nameHandler} />
                        {nameErr?<span>Name can't be empty!</span>:""}
    
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="acc">Beneficiary Account Number</label>
                        <input type="number" id="acc" class="form-control form-control-lg"
                        value={accNo} onChange={accNoHandler}/>
                        {accNoErr?<span>Account number can't be empty!</span>:""} 
                    </div>

                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="accR">Re-enter Account Number</label>
                        <input type="number" id="accR" class="form-control form-control-lg"
                        value={reAccNo} onChange={reAccNoHandler} />
                        {reAccNoErr?<span>Account number doesn't match!</span>:""}
                    </div>

                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="nick">Nick Name</label>
                        <input type="text" id="nick" class="form-control form-control-lg"
                        value={nick} onChange={nickHandler} />
                    </div>

                    <div class="d-flex justify-content-around align-items-center mb-4">
                        <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={save}>Save As Beneficiary</button>
                    </div>

        </form>
        </div>
      </div>
    </section>

          </main>
        </div>
        {popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          {popUpMsg}
        </PopUp>
      )}
      </div>
    )
}