import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import PopUp from '../components/PopUp';
import '../components/Login.css'
import '../components/NavbarLogout'
import admin from '../images/adminLogin.png'

export const AdminLogin = () => {

      const navigate = useNavigate()

      const [popUpState, setPopUpState] = useState(false)
      const [userID, setUserID] = useState('')
      const [password, setPassword] = useState('')
      const [userIDErr, setUserIDErr] = useState(false)
      const [passwordErr, setPasswordErr] = useState(false)
      const [loginStatus, setLoginStatus] = useState(null)

      const imageStyle = {
        width:'500px',
        height:'500px',
      }
     
 
      const openPopUp = () => {
        setPopUpState(1);
      };
      const closePopUp = () => {
        setPopUpState(0);
      };
     

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
        try{
        const response = await axios.get(`http://localhost:8081/logins/admin/${userID}`);
        localStorage.setItem('jwtToken', response.data.token);
        console.log(response)
        if(response.data.user.userid===userID && response.data.user.password===password && response.data.user.admin===1){
            navigate('/accountHolders',{state:{adminUserId:userID}})
            alert("Admin login successfully!!")
        }
        else if(response.data.user.admin === 0){
          setLoginStatus("You are not an admin")
          setPopUpState(1)
        }
        else{
          setLoginStatus("Incorrect Password!!")
          setPopUpState(1)
        }
      }
        catch(error){
          console.log('invalid username/password')
          setLoginStatus("Invalid username or password")
          setPopUpState(1)
        }
      }

        return (
            <div>
                <nav class="navbar navbar-expand-sm">
            <a class="navbar-brand">
              <img src="https://cdn2.iconfinder.com/data/icons/buildings-56/48/12-512.png" alt="Application image">
              </img> <span className="s">Online Banking System</span>
              <Link className="item" to="/">User Login</Link>
            </a>
            
           </nav>
                <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img style={imageStyle} src={admin}
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h1 style={{color:'#6082B6'}}>Admin Login</h1>
        <form style={{marginTop:20+'px'}}>
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

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-lg" style={{backgroundColor:'#7CA1D9'}}
              onClick={save}>Login</button>
          </div>

        </form>
      </div>
    </div>

  </div>
</section>
{popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          <p>{loginStatus}</p>
        </PopUp>
      )}
      
            </div>
        
        );
    }


