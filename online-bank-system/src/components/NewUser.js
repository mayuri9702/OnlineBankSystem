import React, { useState } from 'react';
import Navbar from './Navbar';
import './NewUser.css'; // Import the CSS file for NewUser component
import axios from 'axios';

export const NewUser = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [emailid, setemailid] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null); // State for registration status

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userid);
    console.log(password);
    console.log(emailid);


    // Validate constraints
    if (userid.length !== 10 || password.length !== 10) {
      console.error('User input violates constraints');
      return;
    }

    const newUser = {
      userid,
      password,
      admin: 0,
      emailid
    };

   
try {
    const response = await axios.post('http://localhost:8081/logins', newUser);
  

    if (response.status === 201) {
      console.log('User registered successfully');
      setRegistrationStatus('success');
    }
  } catch (error) {

    console.error('User registration failed', error);
    setRegistrationStatus('error');
  }
};


  return (
    <div>
      <Navbar />
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
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
                  {userid.length !== 10 && (
                    <div className="hint">User ID must be exactly 10 characters long.</div>
                  )}
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control form-control-lg"
                    placeholder="Enter Login Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password.length !== 10 && (
                    <div className="hint">Password must be exactly 10 characters long.</div>
                  )}
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

                {registrationStatus === 'success' && (
                  <p className="text-center text-success mt-3">User registered successfully!</p>
                )}
                {registrationStatus === 'error' && (
                  <p className="text-center text-danger mt-3">User registration failed. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
