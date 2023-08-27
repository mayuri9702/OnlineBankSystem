import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import PopUp from "./PopUp";

export const Register = () => {
  const navigate = useNavigate();

  const [popUpState, setPopUpState] = useState(false);

  const [accountNo, setAccountNo] = useState("");
  const [transPassword, setTransPassword] = useState("");
  const [transPassword2, setTransPassword2] = useState("");
  const [accountNoErr, setAccountNoErr] = useState(false);
  const [transPasswordErr, setTransPasswordErr] = useState(false);
  const [transPassword2Err, setTransPassword2Err] = useState(false);
  const [accEmptyErr, setAccEmptyErr] = useState(false);
  const [transPassEmptyErr, setTransPassEmptyErr] = useState(false);
  const [transPass2EmptyErr, setTransPass2EmptyErr] = useState(false);
  const [isValidUserId, setIsValidUserId] = useState(false);
  const [userId, setUserId] = useState('');
  const [password,setPassword]=useState('');
  const imageStyle = {
    width:'500px',
    height:'500px'
  }

  const openPopUp = () => {
    setPopUpState(1);
  };

  const closePopUp = () => {
    setPopUpState(0);
  };
  const handleUserIdSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/logins/user/${userId}`);
      
      console.log(response);
      if (response.status === 200 && response.data.user.userid === userId && response.data.user.password === password) {
        localStorage.setItem('jwtToken', response.data.token);
        setIsValidUserId(true);
        
        // setUserId(response.data.userId);
        // setPassword(response.data.password);
        // setEmail(response.data.email);
        
      } else {
        setIsValidUserId(false);
      }
    } catch (error) {
      setIsValidUserId(false);
    }
  };

  async function save(event) {
    event.preventDefault();
    if (accountNo === "") {
      setAccEmptyErr(true);
    } else {
      setAccEmptyErr(false);
    }

    if (transPassword === "") {
      setTransPassEmptyErr(true);
    } else {
      setTransPassEmptyErr(false);
    }
    if (transPassword2 === "") {
      setTransPass2EmptyErr(true);
    } else {
      setTransPass2EmptyErr(false);
    }
    const token = localStorage.getItem('jwtToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
  
    const requestOptionsGet = {
      method: 'GET',
      headers: headers,
    }
    const requestOptionsPut = {
      method: 'PUT',
      headers: headers,
    }
    if (
      accountNo !== "" &&
      transPassword !== "" &&
      transPassword2 !== "" &&
      transPassword === transPassword2
    ) {
      try {
        console.log(accountNo, transPassword, transPassword2)
        const response = await axios.get(
          `http://localhost:8081/accounts/${accountNo}`,requestOptionsGet
        );

        console.log(response);
        const updatedAccount = {
          transactionpin: transPassword
        };
        const response1 = await axios.put(
          `http://localhost:8081/accounts/transpin/${accountNo}`,updatedAccount,requestOptionsPut
        );
        // console.log(response1.status)
        console.log(response1);
        localStorage.setItem('jwtToken',null);
        alert("Successfully registered for internet banking!!");
        navigate("/login");
        console.log("registration done");
      } catch (err) {
        alert("Account number Invalid!");
      }
    }
     else if(transPassword!=="" && transPassword2!=="" && accountNo !== "") {
      alert("transaction pin should be same for both");
    }
  }

  function accountNoHandler(e) {
    let item = e.target.value;
    if (/^\d{11}$/.test(item)) {
      setAccountNoErr(false);
    } else {
      setAccountNoErr(true);
    }
    setAccountNo(e.target.value);
  }

  function transPasswordHandler(e) {
    let item = e.target.value;
    if (/^\d{6}$/.test(item)) {
      setTransPasswordErr(false);
    } else {
      setTransPasswordErr(true);
    }
    setTransPassword(e.target.value);
  }

  function transPassword2Handler(e) {
    let item = e.target.value;
    if (item !== transPassword) {
      setTransPassword2Err(true);
    } else {
      setTransPassword2Err(false);
    }
    setTransPassword2(e.target.value);
  }

  return (
    <div>
      <Navbar></Navbar>
      <section class="vh-100 bg-image"
   style={{backgroundColor: '#BBD2EC'}}>
   
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ width : 1300+'px' }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register for Internet Banking
                      </p>
{isValidUserId?(<form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="accountNumber">
                              Account Number
                            </label>
                            <input
                              maxLength={11}
                              type="text"
                              id="accountNumber"
                              class="form-control"
                              value={accountNo}
                              onChange={accountNoHandler} 
                            />
                            {accountNoErr ? (
                              <span>Account Number should be 11 digits!</span>
                            ) : null}

                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="transPassword">
                              Set Transaction pin
                            </label>
                            <input
                            maxLength={6}
                              type="password"
                              id="transPassword"
                              class="form-control"
                              value={transPassword}
                              onChange={transPasswordHandler} 
                            />
                            {transPasswordErr ? (
                              <span>Transaction pin should be 6 digits!</span>
                            ) : null}
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="cTransPassword">
                              Confirm Transaction Pin
                            </label>
                            <input
                            maxLength={6}
                              type="password"
                              id="cTransPassword"
                              class="form-control"
                              value={transPassword2}
                              onChange={transPassword2Handler}
                            />
                            {transPassword2Err ? (
                              <span>Transaction pin doesn't match!</span>
                            ) : null}
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={save}
                          >
                            Submit
                          </button>
                        </div>
                      </form>):(
                <div className="user-id-popup">
                <label for="userid">Username</label>
                <input
                  type="text"
                  id='userid'
                  placeholder="USER ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <label for="password">Password</label>
                <input type="password"
                id='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleUserIdSubmit}>Submit</button>
                {!isValidUserId && <p className="error-message">Invalid Username or Password</p>}
              </div>
)}
                      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://www.logmeonce.com/wp-content/uploads/2022/10/image-5.png"
                        class="img-fluid" style={imageStyle}
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </section>
  
      {popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          <p>User registered successfully!!</p>
        </PopUp>
      )}
    </div>
  );
};
