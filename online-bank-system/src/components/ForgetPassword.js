import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import PopUp from './PopUp'

export const ForgetPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [popUpState, setPopUpState] = useState(false)
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showPasswordReset, setShowPasswordReset] = useState(false);
    const [verificationResult, setVerificationResult] = useState('');
    const [passwordResetResult, setPasswordResetResult] = useState('');
    const [otpVerificationResult, setOtpVerificationResult] = useState('');
    
    const openPopUp = () => {
        setPopUpState(1);
      };
      const closePopUp = () => {
        setPopUpState(0);
        navigate('/login')
      };

    const containerStyle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f9',
    }

    const successStyle={
        color:'green',
        marginTop:'10px',
    }

    const btnStyle={
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '12px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s',
    }

    const cardTitleStyle={
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
    }

    const cardStyle={
        maxWidth: '400px',
        width: '100%',
        backgroundcolor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'center',
    }

    const formControlStyle={
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        transition: 'border-color 0.3s',
    }

    const errMessageStyle={
        color: 'red',
        marginTop: '10px',
    }

    const handleSendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8081/logins/emailid', {
                emailid: email
            });

            if (response.status === 200) {
                setShowOtpModal(true);
            } else {
                setVerificationResult('Invalid email ID');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setVerificationResult('Invalid email id, please try again.');
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
            console.log(response)
            if (response.status === 200) {
                setShowOtpModal(false);
                setShowPasswordReset(true);
                // setVerificationResult('');
                setOtpVerificationResult('OTP verified successfully')
            } else {
                // setVerificationResult('Incorrect OTP, please try again.');
                setOtpVerificationResult('Incorrect OTP!!!')
                // setPopUpState(1)
            }
        } catch (error) {
            setOtpVerificationResult('Incorrect OTP, please try again.');
            console.error(error);
            // setPopUpState(1)
            // Handle error or show error message
        }
    };

    const handlePasswordReset = async () => {
        try {
            if (newPassword === confirmPassword) {
                const response = await axios.put(`http://localhost:8081/logins/${email}`, {
                    newPassword: newPassword
                });
                console.log(response)
                if (response.status === 200) {
                    setPasswordResetResult('Password has been reset successfully.');
                    console.log("password reset successfully", newPassword)
                    setPopUpState(1)
                    // setNewPassword('');
                    // setConfirmPassword('');
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
        <div>
            <Navbar></Navbar>
        
        <div className="container" style={containerStyle}>
            <div className="card" style={cardStyle}>
                <div className="card-body" style={{padding: 20+'px'}}>
                    {showPasswordReset ? (
                        <div>
                            <h2 className="card-title" style={cardTitleStyle}>Reset Password</h2>
                            <div className="form-group" style={{marginBottom: 15+'px'}}>
                                <input
                                    type="password"
                                    className="form-control" style={formControlStyle}
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: 15+'px'}}>
                                <input
                                    type="password"
                                    className="form-control" style={formControlStyle}
                                    placeholder="Confirm New Password"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" style={btnStyle} onClick={handlePasswordReset}>Reset Password</button>
                            {passwordResetResult && <p className="error-message" style={errMessageStyle}>{passwordResetResult}</p>}
                        </div>
                    ) : (
                        <div>
                            <h2 className="card-title" style={cardTitleStyle}>Forgot Password</h2>
                            <div className="form-group" style={{ marginBottom: 15+'px'}}>
                                <input
                                    type="text"
                                    className="form-control" style={formControlStyle}
                                    placeholder="Enter Email ID"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" style={btnStyle} onClick={handleSendOTP}>Send OTP</button>
                            {verificationResult && <p className="error-message" style={errMessageStyle}>{verificationResult}</p>}
                        </div>
                    )}

                    {showOtpModal && (
                        <div className="card">
                            <div className="card-body">
     
                           <h5 className="card-title" style={cardTitleStyle}>Enter OTP</h5>
                                <input
                                    type="text"
                                    style={formControlStyle}
                                 className="form-control"
                                    value={otp}
                                    onChange={e => setOtp(e.target.value)}
                                />
                                <button className="btn btn-primary" style={btnStyle} onClick={handleVerifyOTP}>Submit</button>
                                {otpVerificationResult && <p className="error-message" style={errMessageStyle}>{otpVerificationResult}</p>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {popUpState === 1 && (
        <PopUp onClose={closePopUp}>
          <p>{passwordResetResult}</p>
        </PopUp>
      )}
        </div>
    );
};
