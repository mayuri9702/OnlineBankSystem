import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import "./Login.css"

export const Login = () => {
        return (
            <div>
                <Navbar></Navbar>
                <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
            <input type="text" id="userID" class="form-control form-control-lg"
              placeholder="Enter a User ID" />
            <label class="form-label" for="userID">User ID</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="password" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="password">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <a href="/forgetPassword" class="text-decoration-none link-info">Forgot Password?</a>
          </div>

          <br></br>

          <div class="d-flex justify-content-between align-items-center">
            <a href="/forgetUserID" class="text-decoration-none link-info">Forgot User ID?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              >Login</button>
          </div>

        </form>
      </div>
    </div>

  </div>
</section>
            </div>
        );
    }


