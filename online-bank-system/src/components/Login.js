import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import "./Login.css"

export const Login = () => {

      const navigate = useNavigate()

      const [userID, setUserID] = useState('')
      const [password, setPassword] = useState('')
      const [userIDErr, setUserIDErr] = useState(false)
      const [passwordErr, setPasswordErr] = useState(false)

      function userIDHandler(e){
        let item=e.target.value
        if(item===''){
          setUserIDErr(true)
        }else{
          setUserIDErr(false)
        }
        setUserID(item)
      }

      function passwordHandler(e){
        let item=e.target.value
        if(item===''){
          setPasswordErr(true)
        }else{
          setPasswordErr(false)
        }
        setPassword(item)
      }

      async function save(e){
        e.preventDefault()
        if(userID===''){
          setUserIDErr(true)
        }else{
          setUserIDErr(false)
        }
        if(password===''){
          setPasswordErr(true)
        }else{
          setPasswordErr(false)
        }
        if(userID!=='' && password!==''){
          try{
              navigate('/dashboard')
             setUserID('')
             setPassword('')            
          }
          catch(err){
            alert('Login failed.')
          }
        }
      }

        return (
            <div>
                <Navbar></Navbar>
                <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
          <label class="form-label" for="userID">User ID</label>
            <input type="text" id="userID" class="form-control form-control-lg"
              placeholder="Enter a User ID" value={userID} onChange={userIDHandler}/>
              {userIDErr?<span>UserID can't be empty!</span>:""}
          </div>

          <div class="form-outline mb-3">
            <label class="form-label" for="password">Password</label>
            <input type="password" id="password" class="form-control form-control-lg"
              placeholder="Enter password" value={password} onChange={passwordHandler} />
            {passwordErr?<span>Password can't be empty!</span>:""}
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <a href="/forgetPassword" class="text-decoration-none link-info">Forgot Password?</a>
          </div>

          <br></br>

          <div class="d-flex justify-content-between align-items-center">
            <a href="/forgetUserID" class="text-decoration-none link-info">Forgot User ID?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              onClick={save}>Login</button>
          </div>

        </form>
      </div>
    </div>

  </div>
</section>
            </div>
        );
    }


