
import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPassword.css';

export const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showPasswordReset, setShowPasswordReset] = useState(false);
    const [verificationResult, setVerificationResult] = useState('');
    const [passwordResetResult, setPasswordResetResult] = useState('');

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
            if (error.response && error.response.status === 400) {
                setVerificationResult('Incorrect OTP, please try again.');
            } else {
                console.error(error);
                // Handle error or show error message
            }
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8081/logins/verify-otpp', {
                emailid: email,
                otp: otp
            });

            if (response.data.message === 'OTP verified successfully') {
                setShowOtpModal(false);
                setShowPasswordReset(true);
                setVerificationResult('');
            } else {
                setVerificationResult('Incorrect OTP, please try again.');
            }
        } catch (error) {
            console.error(error);
            // Handle error or show error message
        }
    };

    const handlePasswordReset = async () => {
        try {
            if (newPassword === confirmPassword) {
                const response = await axios.put(`http://localhost:8081/logins/${email}`, {
                    newPassword: newPassword
                });

                if (response.data.message === 'Password reset successful') {
                    setPasswordResetResult('Password has been reset successfully.');
                    setNewPassword('');
                    setConfirmPassword('');
                }
            } else {
                setPasswordResetResult('Passwords do not match.');
            }
        } catch (error) {
            console.error(error);
            // Handle error or show error message
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    {showPasswordReset ? (
                        <div>
                            <h2 className="card-title">Reset Password</h2>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm New Password"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={handlePasswordReset}>Reset Password</button>
                            {passwordResetResult && <p className="success-message">{passwordResetResult}</p>}
                        </div>
                    ) : (
                        <div>
                            <h2 className="card-title">Forgot Password</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email ID"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={handleSendOTP}>Send OTP</button>
                            {verificationResult && <p className="error-message">{verificationResult}</p>}
                        </div>
                    )}

                    {showOtpModal && (
                        <div className="card">
                            <div className="card-body">
     
                           <h5 className="card-title">Enter OTP</h5>
                                <input
                                    type="text"
   
                                 className="form-control"
                                    value={otp}
                                    onChange={e => setOtp(e.target.value)}
                                />
                                <button className="btn btn-primary" onClick={handleVerifyOTP}>Submit</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
