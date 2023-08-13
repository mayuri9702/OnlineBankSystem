import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgetPassword = () => {
    const navigate = useNavigate();
        return (
            <div>
                <section class="vh-100">
                    <div class="container py-5 h-100">
                        <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                    <h1>Forget Password</h1>
                            </div>

                            <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="userID">Enter User ID</label>
                                <input type="text" id="userID" class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="otp">Enter OTP</label>
                                <input type="text" id="otp" class="form-control form-control-lg" />
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={()=>navigate('setNewPassword')}>Proceed</button>
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={()=>navigate(-1)}>Back</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </div>
        )
}