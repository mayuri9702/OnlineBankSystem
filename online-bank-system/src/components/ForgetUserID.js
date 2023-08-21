

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './ForgetUserID.css';


export const ForgetUserID = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showUserId, setShowUserId] = useState(false);
    const [verificationResult, setVerificationResult] = useState('');
    const [userId, setUserId] = useState('');


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
        <div className="card-container">
            <div className="card">
                <div className="card-header">Forgot User ID</div>
                <div className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email ID"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleSendOTP}>Send OTP</button>
                    </div>


                    {verificationResult && <p className="error-message">{verificationResult}</p>}


                    {showOtpModal && (
                        <div className="modal-container">
                            <div className="modal-content">
                                <h5>Enter OTP</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={otp}
                                    onChange={e => setOtp(e.target.value)}
                                />
                                <button type="button" className="btn btn-primary" onClick={handleVerifyOTP}>Submit</button>
                            </div>
                        </div>
                    )}


                    {showUserId && (
                        <div>
                            <h5>User ID: {userId}</h5>
                            <Link to="/login" className="link">Go back to Home</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};




