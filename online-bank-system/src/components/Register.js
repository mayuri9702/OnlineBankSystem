import React,{useState} from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Register.css'

export const Register = () => {

  const navigate = useNavigate()

  const [accountNo, setAccountNo] = useState('')
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [transPassword, setTransPassword] = useState('')
  const [transPassword2, setTransPassword2] = useState('')
  const [otp, setOtp] = useState('')
  const [accountNoErr, setAccountNoErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [password2Err, setPassword2Err] = useState(false)
  const [transPasswordErr, setTransPasswordErr] = useState(false)
  const [transPassword2Err, setTransPassword2Err] = useState(false)
  const [otpErr, setOtpErr] = useState(false)
  const [accEmptyErr, setAccEmptyErr] = useState(false)
  const [passEmptyErr, setPassEmptyErr] = useState(false)
  const [transPassEmptyErr, setTransPassEmptyErr] = useState(false)

  async function save(event){
    event.preventDefault();
    if(accountNo===''){
      setAccEmptyErr(true)
    }else{
     setAccEmptyErr(false)
    }
    if(password===''){
      setPassEmptyErr(true)
    }else{
      setPassEmptyErr(false)
    }
    if(password2===''){
      setPassword2Err(true)
    }else{
      setPassword2Err(false)
    }
    if(transPassword===''){
      setTransPassEmptyErr(true)
    }else{
      setTransPassEmptyErr(false)
    }
    if(transPassword2===''){
      setTransPassword2Err(true)
    }else{
      setTransPassword2(false)
    }
    if(otp===''){
      setOtpErr(true)
    }else{
      setOtpErr(false)
    }
    if(accountNo!=='' && password!=='' && password2!=='' && transPassword!=='' && transPassword2!=='' && otp!==''){
    try{
      const response = await axios.post("http://localhost:8080/account/register",
      {
        account_number : accountNo,
        login_password : password,
        transaction_pin : transPassword
      });
        alert("Successfully registered for internet banking!!")
        navigate('/login')
        setAccountNo('')
        setPassword("")
        setPassword2("")
        setTransPassword("")
        setTransPassword2("")
      
    }
    catch(err){
      alert('Registration failed.')
    }
  }
}

  function accountNoHandler(e){
    let item = e.target.value
    if(/^\d{11}$/.test(item)){
      setAccountNoErr(false)
    }else{
    setAccountNoErr(true)
    }
    setAccountNo(e.target.value)
  }

    function passwordHandler(e){
      let item = e.target.value
      if(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(item)){
        setPasswordErr(false)
      }else{
      setPasswordErr(true)
      }
      setPassword(e.target.value)
    }

      function password2Handler(e){
        let item = e.target.value
        if(item!==password){
          setPassword2Err(true)
        }else{
        setPassword2Err(false)
        }
        setPassword2(e.target.value)
      }

      function transPasswordHandler(e){
        let item = e.target.value
        if(/^\d{6}$/.test(item)){
          setTransPasswordErr(false)
        }else{
          setTransPasswordErr(true)
        }
        setTransPassword(e.target.value)
      }

      function transPassword2Handler(e){
        let item = e.target.value
        if(item!==transPassword){
          setTransPassword2Err(true)
        }else{
        setTransPassword2Err(false)
        }
        setTransPassword2(e.target.value);
      }

      function otpHandler(e){
        let item = e.target.value
        if(/^\d{4}$/.test(item)){
          setOtpErr(false)
        }else{
          setOtpErr(true)
        }
          setOtp(e.target.value);
      }


        return (
            <div>
              <Navbar></Navbar>
            
  <section class="vh-100" style={{backgroundcolor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderradius:25+'px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register for Internet Banking</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="accountNumber">Account Number</label>
                      <input type="text" id="accountNumber" class="form-control"
                      value={accountNo} onChange={accountNoHandler} />
                      {accountNoErr?<span>Account Number should be 11 digits!</span>:""}
                      {accEmptyErr?<span>Account Number can't be empty!</span>:""}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="loginPassword">Set Login Password</label>
                      <input type="password" id="loginPassword" class="form-control"
                      value={password} onChange={passwordHandler} />
                      {passwordErr?<span>Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character!</span>:""}
                      {passEmptyErr?<span>Login password can't be empty!</span>:""}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="cLoginPassword">Confirm Login Password</label>
                      <input type="password" id="cLoginPassword" class="form-control"
                      value={password2} onChange={password2Handler} />
                       {password2Err?<span>Password doesn't match!</span>:""}
                    </div>
                  </div>

                  
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="transPassword">Set Transaction pin</label>
                      <input type="password" id="transPassword" class="form-control"
                      value={transPassword} onChange={transPasswordHandler} />
                      {transPasswordErr?<span>Transaction pin should be 6 digits!</span>:""}
                      {transPassEmptyErr?<span>Login password can't be empty!</span>:""}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="cTransPassword">Confirm Transaction Pin</label>
                      <input type="password" id="cTransPassword" class="form-control"
                      value={transPassword2} onChange={transPassword2Handler} />
                      {transPassword2Err?<span>Transaction pin doesn't match!</span>:""}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="otp">Enter OTP</label>
                      <input type="password" id="otp" class="form-control" 
                      value={otp} onChange={otpHandler}/>
                      {otpErr?<span>OTP doesn't match!</span>:""}
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={save}>Submit</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
        );
    }

