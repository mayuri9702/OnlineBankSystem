import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'

export const ForgetUserID = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showUserId, setShowUserId] = useState(false);
    const [verificationResult, setVerificationResult] = useState('');
    const [userId, setUserId] = useState('');

   const containerStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
   }

   const errorStyle={
    color: 'red',
    marginTop: '10px',
   }

   const linkStyle={
    marginTop: '15px',
    display: 'block',
    textAlign: 'center',
    color: '#007bff',
   }

   const buttonStyle={
    backgroundColor: '#007bff;',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
   }

   const modalContentStyle={
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
   }

   const cardStyle={
    maxWidth: '500px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
   }

   const formControlStyle={
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
   }
   


    const handleSendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8081/logins/emailid', {
                emailid: email
            });

            if (response.data.message === 'OTP sent successfully') {
                setShowOtpModal(true);
            } else {
                setVerificationResult('Invalid email ID');
            }
        } catch (error) {
            console.error(error);
            // Handle error or show error message
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8081/logins/verify-otp', {
                emailid: email,
                otp: otp
            });

            if (response.data.message === 'OTP verified successfully') {
                setVerificationResult(response.data.message);
                setUserId(response.data.userId);
                setShowOtpModal(false);
                setShowUserId(true);
            } else {
                setVerificationResult('Incorrect OTP, please try again.');
            }
        } catch (error) {
            if (error.response && error.response.status===400){
                setVerificationResult('Incorrect OTP, please try again.');
            }else{
                console.error(error);
            // Handle error or show error message
            }
        }
    };

    

    return (
        <div>
            <Navbar></Navbar>
        
        <div className='container' style={containerStyle}>
            <div className='card' style={cardStyle}>
                <div className="card-header">Forgot User ID</div>
                <div className="card-body">
                    <div className="form-group" style={{ marginBottom: 15+'px'}}>
                        <input
                            type="text"
                            className="form-control" style={formControlStyle}
                            placeholder="Enter Email ID"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: 15+'px'}}>
                        <button type="button" className="btn btn-primary btn-lg btn-block" style={buttonStyle} onClick={handleSendOTP}>Send OTP</button>
                    </div>


                    {verificationResult && <p className="error-message" style={{errorStyle}}>{verificationResult}</p>}


                    {showOtpModal && (
                        <div className="modal-container" style={{marginTop: 20+'px'}}>
                            <div className="modal-content" style={{modalContentStyle}}>
                                <h5 style={{ marginBottom: 15+'px'}}>Enter OTP</h5>
                                <input
                                    type="text"
                                    className="form-control" style={formControlStyle}
                                    value={otp}
                                    onChange={e => setOtp(e.target.value)}
                                />
                                <button type="button" className="btn btn-primary" style={buttonStyle} onClick={handleVerifyOTP}>Submit</button>
                            </div>
                        </div>
                    )}


                    {showUserId && (
                        <div>
                            <h5>User ID: {userId}</h5>
                            <Link to="/login" className="link" style={linkStyle}>Go back to Home</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};




