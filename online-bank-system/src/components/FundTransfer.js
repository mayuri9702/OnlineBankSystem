import React, { useState } from 'react';
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const FundTransfer = () => {
    const location = useLocation()
    const userID = location.state.userid
    const navigate = useNavigate()
    const [mode, setMode] = useState('')
    const [modeErr, setModeErr] = useState(false)

    function radioValue(event){
        setMode(event.target.value)
    }

    function proceed(event){
        event.preventDefault()
        if(mode===''){
            setModeErr(true)
        }else{
            try{
                navigate('/fundTransfer/initiateTransaction',{state:{userid:userID}})
            }catch{

            }
        }
    }

    return (

        <div className="app">
        <header className="header"><NavbarLogout></NavbarLogout></header>
        <div className="container">
          <div className="sidebar"><LeftNavbar state={{userid:userID}}/></div>
          <main className="content">
            <div>
                <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                onClick={()=>navigate("/fundTransfer/addPayee", {state:{suerid:userID}})}>Add Payee</button>
                </div>
                <hr></hr>
                <div class="text-center text-lg-start mt-4 pt-2">
                    <div>
                        <h5 style={{color:"#6082B6"}}>Select Payment Option</h5>
                        {modeErr?<span>Please select transaction type</span>:""}
                    </div>

                <div  onChange={radioValue}>
                <div class="form-check-inline">
                                <label class="form-check-label" required="true">Transaction Type
                                </label>
                            </div>
                            
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="mode" value="IMPS"/>IMPS
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="mode" value="NEFT"/>NEFT
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="mode" value="RTGS"/>RTGS
                                </label>
                            </div>
                            </div>
                        </div>
                        <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg"
                onClick={proceed}>Proceed</button>
                </div>
            </div>
          </main>
        </div>
      </div>
    )
}