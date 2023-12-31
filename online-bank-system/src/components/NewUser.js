import React, { useState } from 'react';
import Navbar from './Navbar';
import './NewUser.css'; // Import the CSS file for NewUser component
import axios from 'axios';
import PopUp from './PopUp';
import validator from 'validator'

export const NewUser = () => {
  const [popUpState, setPopUpState] = useState(false)
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [emailid, setemailid] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null); // State for registration status
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
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
  // function isStrongPassword(password) {

  //   const minLength = 6;
  //   const hasUpperCase = /[A-Z]/.test(password);
  //   const hasLowerCase = /[a-z]/.test(password);
  //   const hasDigit = /\d/.test(password);
  
  //   return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit;
  // };

  const validatePassword = (value) => {
    setPassword(value);
    if(validator.isStrongPassword(value, {
      minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers:1, minSymbols:1
    })){
      setPasswordErrorMessage('')
    }
    else{
      setPasswordErrorMessage('Password must contain atleast 1 uppercase, 1 lowercase and 1 digit and length should be minimum 6')
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userid);
    console.log(password);
    console.log(emailid);


  
    const newUser = {
      userid,
      password,
      admin: 0,
      emailid
    };
    

   
try {
    const response = await axios.post('http://localhost:8081/logins', newUser);
  

    if (response.status === 201) {
      console.log('User registered successfully!!');
      setRegistrationStatus('User registered successfully!!');
      setPopUpState(1)
    }
  } catch (error) {

    console.error('User registration failed!!', error);
    setRegistrationStatus('User registration failed!!');
    setPopUpState(1)
  }
  
};


  return (
    <div>
      <Navbar />
      <section className="vh-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://tutorgenix.com/static/images/my-password.png"
                className="img-fluid"
                style={imageStyle}
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="accountNumber"
                    className="form-control form-control-lg"
                    placeholder="Enter User Id"
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                  />
                  {(userid.length <6 || userid.length >16) && (
                    <div className="hint">User ID must be between 6 to 16 characters long.</div>
                  )}
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control form-control-lg"
                    placeholder="Enter Login Password"
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                  />

                  {passwordErrorMessage === '' ? null : <span className='hint'>{passwordErrorMessage}</span>}
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="emailid"
                    id="emailid"
                    className="form-control form-control-lg"
                    placeholder="Enter emailid"
                    value={emailid}
                    onChange={(e) => setemailid(e.target.value)}
                  />
                  {!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailid) && (
                    <div className="hint">Please enter a valid emailid address.</div>
                  )}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg">Register</button>
                </div>

                {registrationStatus === 'User registered successfully!!' && (
                  <a href="/login">Back to login</a>
                )}
                {registrationStatus === 'User registration failed!!' && (
                  <p className="text-center text-danger mt-3">User ID already exist. Please try again!!</p>
                )}
              </form>
            </div>
          </div>
       
      </section>
      {popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          <p>{registrationStatus}</p>
        </PopUp>
      )}
    </div>
  );
};
