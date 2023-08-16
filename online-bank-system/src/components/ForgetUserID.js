import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgetUserID = () => {
    const navigate = useNavigate();
        return (
            <div>
                    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <a class="navbar-brand">
          <img src="https://o.remove.bg/downloads/6049c90f-798a-42b4-a380-86d6f331d02a/pngtree-vector-internet-banking-icon-png-image_755759-removebg-preview.png" width="30" height="30" class="d-inline-block align-top" alt="">
           </img> Online Banking System</a>
           </nav>
                        <div class="row d-flex align-items-center justify-content-center h-100" style={{marginTop:5+'rem'}}>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                    <h1>Forget User ID</h1>
                            </div>

                            <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="accountNumber">Enter Account Number</label>
                                <input type="text" id="accountNumber" class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="otp">Enter OTP</label>
                                <input type="text" id="otp" class="form-control form-control-lg" />
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={()=>navigate('/login')}>Proceed</button>
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={()=>{navigate('/login');}}>Back</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
}