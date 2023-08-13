import React from 'react';
import {Link} from 'react-router-dom';

export const Login = () => {
        return (
            <div>
                <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

      <div class="d-flex justify-content-around align-items-center mb-4">
            <h1>Login to your Account</h1>
          </div>

        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" class="form-control form-control-lg" />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="password">Password</label>
            <input type="password" id="password" class="form-control form-control-lg" />
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
          </div>
          </form>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <Link to="/register">First Time User? Register</Link>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <Link to="/forgetUserID">Forget User ID?</Link>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <Link to="/forgetPassword">Forget Password?</Link>
          </div>

      </div>
    </div>
  </div>
</section>
            </div>
        );
    }


