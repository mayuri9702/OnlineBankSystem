import React,{useState} from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const Register = () => {

  const navigate = useNavigate()

  const [accountNo, setAccountNo] = useState('')
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [transPassword, setTransPassword] = useState('')
  const [transPassword2, setTransPassword2] = useState('')

  async function save(event){
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:8080/account/register",
      {
        account_number : accountNo,
        login_password : password,
        transaction_pin : transPassword
      });
      if(response.data=="added"){
        alert("Successfully registered for internet banking!!")
        navigate('/login')
        setAccountNo('')
        setPassword("")
        setPassword2("")
        setTransPassword("")
        setTransPassword2("")
      }
    }
    catch(err){
      alert('Registration failed.')
    }
  }

  function handleValidations(event){
    event.preventDefault();
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
                      value={accountNo} onChange={(event)=>{setAccountNo(event.target.value)}} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="loginPassword">Set Login Password</label>
                      <input type="password" id="loginPassword" class="form-control"
                      value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="cLoginPassword">Confirm Login Password</label>
                      <input type="password" id="cLoginPassword" class="form-control"
                      value={password2} onChange={(event)=>{setPassword2(event.target.value)}} />
                    </div>
                  </div>

                  
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="transPassword">Set Transaction Password</label>
                      <input type="password" id="transPassword" class="form-control"
                      value={transPassword} onChange={(event)=>{setTransPassword(event.target.value)}} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="cTransPassword">Confirm Transaction Password</label>
                      <input type="password" id="cTransPassword" class="form-control"
                      value={transPassword2} onChange={(event)=>{setTransPassword2(event.target.value)}} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="otp">Enter OTP</label>
                      <input type="password" id="otp" class="form-control" />
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


