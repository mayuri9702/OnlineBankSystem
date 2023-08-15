import React, { useState } from 'react';
import './CreateAccount.css'
import Navbar from './Navbar';

export const CreateAccount = () => {
       
        return (
          <div>
            <Navbar></Navbar>
          
            <section class="vh-100 bg-image"
            style ={ { backgroundImage: "url('https://i.pinimg.com/originals/5d/e0/8d/5de08de24459fedac3d28b10a039e2a6.jpg')" } }>
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
              <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div class="card" style={{borderradius: 15+"px"}}>
                      <div class="card-body p-5">
                        <h2 class="text-uppercase text-center mb-5">Open an Account</h2>
          
                        <form>

                        <div class="col-md-12">
                                <select class="form-select mt-3" required="true">
                                      <option selected disabled value="">Select Type of Account</option>
                                      <option value="savings">Savings</option>
                                      <option value="current">Current</option>
                                      <option value="salary">Salary</option>
                                      <option value="fixedDeposit">Fixed Deposit</option>
                                      <option value="recurringDeposit">Recurring Deposit</option>
                                      <option value="nri">NRI</option>
                               </select>
                               <br></br>
                           </div>

                        <div class="col-md-12">
                                <select class="form-select mt-3" required="true">
                                      <option selected disabled value="">Title</option>
                                      <option value="mr">Mr.</option>
                                      <option value="mrs">Mrs.</option>
                                      <option value="miss">Miss.</option>
                               </select>
                               <br></br>
                           </div>
                        
          
                          <div class="form-outline mb-4">
                            <input type="text" id="firstName" class="form-control form-control-lg" placeholder='First Name' required="true"/>
                          </div>
          
                          <div class="form-outline mb-4">
                            <input type="text" id="middleName" class="form-control form-control-lg" placeholder='Middle Name'/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="lastName" class="form-control form-control-lg" placeholder='Last Name' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="fatherName" class="form-control form-control-lg" placeholder="Father's Name" required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="mobileNumber" class="form-control form-control-lg" placeholder='Mobile Number' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="email" id="emailID" class="form-control form-control-lg" placeholder='Email ID'/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="aadharNumber" class="form-control form-control-lg" placeholder='Aadhar Card Number' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="dateOfBirth" class="form-control form-control-lg" placeholder='Date of Birth' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="middleName" class="form-control form-control-lg" placeholder='Middle Name' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <h5>Residential Address</h5>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="rAddressLine1" class="form-control form-control-lg" placeholder='Address Line 1' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="rAddressLine2" class="form-control form-control-lg" placeholder='Address Line 2' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="rLandmark" class="form-control form-control-lg" placeholder='Landmark'/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="rState" class="form-control form-control-lg" placeholder='State' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="rCity" class="form-control form-control-lg" placeholder='City' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="rPincode" class="form-control form-control-lg" placeholder='Pincode' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <h5>Permanent Address</h5>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="pAddressLine1" class="form-control form-control-lg" placeholder='Address Line 1' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="pAddressLine2" class="form-control form-control-lg" placeholder='Address Line 2' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="pLandmark" class="form-control form-control-lg" placeholder='Landmark'/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="pState" class="form-control form-control-lg" placeholder='State' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="pCity" class="form-control form-control-lg" placeholder='City' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="pPincode" class="form-control form-control-lg" placeholder='Pincode' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <h5>Occupation Details</h5>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="occupationType" class="form-control form-control-lg" placeholder='Occupation Type' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="sourceIncome" class="form-control form-control-lg" placeholder='Source of Income' required="true"/>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="text" id="annualIncome" class="form-control form-control-lg" placeholder='Gross Annual Income' required="true"/>
                          </div>

                          <div class="form-check-inline">
                                <label class="form-check-label" required="true">Do you want a debit card?
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="debitRadio"/>Yes
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="debitRadio"/>No
                                </label>
                            </div>

                          <div class="form-check d-flex mb-5">
                            <input class="form-check-input me-2" type="checkbox" value="" id="optNetBanking" />
                            <label class="form-check-label" for="optNetBanking" required="true">Opt for Net Banking</label>
                          </div>
          
                          <div class="form-check d-flex mb-5">
                            <input class="form-check-input me-2" type="checkbox" value="" id="agree" />
                            <label class="form-check-label" for="agree" required="true">I agree...</label>
                          </div>
          
                          <div class="d-flex justify-content-center">
                            <button type="button"
                              class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                          </div>
          
                        </form>
          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        );
    }


