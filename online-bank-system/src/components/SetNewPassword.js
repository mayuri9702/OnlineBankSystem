import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarLogout } from './NavbarLogout';
import { LeftNavbar } from './LeftNavbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const SetNewPassword = () => {
    const location = useLocation()
    const userID = location.state.userid
    const [newPassword, setNewPassword] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPasswordErr, setNewPasswordErr] = useState(false)
    const [newPassword1Err, setNewPassword1Err] = useState(false)
    const [message, setMessage] = useState('')

    const handleP = (e) =>{
        let item = e.target.value
        if(item===''){
            setNewPasswordErr(true)
        }else{
            setNewPasswordErr(false)
        }
        setNewPassword(e.target.value)
    }

    const handleP1 = (e) =>{
        let item = e.target.value
        if(item!==newPassword){
            setNewPassword1Err(true)
        }else{
            setNewPassword1Err(false)
        }
        setNewPassword1(e.target.value)
    }
    const formData={
        newPassword:newPassword
    };
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(newPassword===''){
            setNewPasswordErr(true)
        }else{
            setNewPasswordErr(false)
        }
        if(newPassword1===''){
            setNewPassword1Err(true)
        }else{
            setNewPassword1Err(false)
        }
        if(newPassword!=='' && newPassword1!==''){
            axios.put(`http://localhost:8081/logins/updatePassword/${userID}`,formData)
            .then(reponse=>{
                setMessage('Password updated successfully!!')
            })
            .catch(error=>{
                console.log(error)
                setMessage('Password update failed.')
            })
        }
    }

    const navigate = useNavigate();
        return (
            <div>
                
                    <NavbarLogout></NavbarLogout>
                    
          <LeftNavbar state={{userid:userID}}/>
                        <div class="row d-flex align-items-center justify-content-center h-100" style={{marginTop:5+'rem'}}>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                    <h1>Set New Password</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginPassword">New Login Password</label>
                                <input type="password" id="loginPassword" class="form-control form-control-lg" value={newPassword} onChange={handleP}/>
                                {newPasswordErr?<span>Password can't be empty!</span>:""}
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="cLoginPassword">Confirm New Login Password</label>
                                <input type="password" id="cLoginPassword" class="form-control form-control-lg" value={newPassword1} onChange={handleP1}/>
                                {newPassword1Err?<span>Password doesn't match!</span>:""}
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                            </div>
                        </form>
                    <p>{message}</p>
                    </div>
                </div>
  </div>

        )
}
