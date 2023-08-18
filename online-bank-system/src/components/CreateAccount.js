import React, { useState } from 'react';
import './CreateAccount.css'
import axios from 'axios';

export const CreateAccount = () => {
  const [showUserIdPopup, setShowUserIdPopup] = useState(true);
  const [userId, setUserId] = useState('');
  const [isValidUserId, setIsValidUserId] = useState(true);
  const [userData, setUserData] = useState({
    userId: '',
    password: '',
    email: '',
  });


  const generateAccountNumber = () => {
    const upperPart = Math.floor(Math.random * 100000) * 1000000000;
    const lowerPart = Math.floor(Math.random * 1000000000);
    const accountNumber = upperPart + lowerPart;
    return accountNumber;
  };

  const [accountno, setAccount_no] = useState(generateAccountNumber());

  
 
  async function handleUserIdSubmit(e) {
    e.preventDefault()
    console.log(accountno)
    try {
      const response = await axios.get(`http://localhost:8081/logins/user/${userId}`);

      if (response.data.message === 'User ID is valid') {
        setIsValidUserId(true);
        setShowUserIdPopup(false);
        setUserData({
          userId: response.data.userId,
          password: response.data.password,
          email: response.data.email,
        });
        console.log(userData.userId);
      } else {
        setIsValidUserId(false);
      }
    } catch (error) {
      setIsValidUserId(false);
    }
  };

  const handleFormSubmit = async () => {
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:8081/logins', formData);
      if (response.status === 200) {
        // Account created successfully
        console.log('Account created successfully');
      } else {
        // Handle error
        console.log('Invalid credentials');
      }
    } catch (error) {
      // Handle error
      console.log('Error:', error.message);
    }
  };

  
  const [formData, setFormData] = useState({
  user_id: userData.userId,
  password: userData.password,
  email: userData.email,
  isadmin: 0,
  Account: [
    {
      account_no: accountno,
      accountType: "",
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      mobileNumber: 0,// Change to the correct default value if needed
      aadharNumber: 0, // Change to the correct default value if needed
      dateOfBirth: "", 
      residentialAddress: `{
        rAddressLine1: "",
        rAddressLine2: "",
        rLandmark: "",
        rState: "",
        rCity: "",
        rPincode: "",
      }`,
      permanentAddress: `{
        pAddressLine1: "",
        pAddressLine2: "",
        pLandmark: "",
        pState: "",
        pCity: "",
        pPincode: "",
      }`,
      occupationType: "",
      sourceIncome: "",
      annualIncome: "",
    },
  ],
});

const handleInputChange = (event) => {
  const { name, value, type, checked } = event.target;
  const newvalue = type === 'checkbox' ? checked : value;

  if(name==='account_no'){
    setAccount_no(newvalue);
  }

  if (name.startsWith('Account.')) {
    const fieldName = name.split('.')[1];
    const accountData = formData.Account[0];
    const updatedAccountData = {
      ...accountData,
      [fieldName]: newvalue,
    };
    setFormData((prevData) => ({
      ...prevData,
      Account: [updatedAccountData],
    }));
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: newvalue,
    }));
  }
};




        return (
          <div>

                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderradius: 15+"px"}}>
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Open an Account</h2>
          {isValidUserId ?(
                        <form>

                        <div className="col-md-12">
                                <select className="form-select mt-3" required="true" onChange={handleInputChange} name="accountType">
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

                        <div className="col-md-12">
                                <select className="form-select mt-3" required="true" onChange={handleInputChange} name="title">
                                      <option selected disabled value="">Title</option>
                                      <option value="mr">Mr.</option>
                                      <option value="mrs">Mrs.</option>
                                      <option value="miss">Miss.</option>
                               </select>
                               <br></br>
                           </div>
                        
          
                          <div className="form-outline mb-4">
                            <input type="text" id="firstName" className="form-control form-control-lg" placeholder='First Name' onChange={handleInputChange} name="firstName" required="true"/>
                          </div>
          
                          <div className="form-outline mb-4">
                            <input type="text" id="middleName" className="form-control form-control-lg" placeholder='Middle Name'
                            onChange={handleInputChange} name="middleName"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Last Name' onChange={handleInputChange} name="lastName" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="fatherName" className="form-control form-control-lg" placeholder="Father's Name" onChange={handleInputChange} name="fatherName" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="mobileNumber" className="form-control form-control-lg" placeholder='Mobile Number' onChange={handleInputChange} name="mobileNumber" required="true"/>
                          </div>



                          <div className="form-outline mb-4">
                            <input type="text" id="aadharNumber" className="form-control form-control-lg" placeholder='Aadhar Card Number' onChange={handleInputChange} name="aadharNumber" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="dateOfBirth" className="form-control form-control-lg" placeholder='Date of Birth'onChange={handleInputChange} name="dateOfBirth" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <h5>Residential Address</h5>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rAddressLine1" className="form-control form-control-lg" placeholder='Address Line 1' onChange={handleInputChange} name="residentialAddress.rAddressLine1" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rAddressLine2" className="form-control form-control-lg" placeholder='Address Line 2' onChange={handleInputChange} name="residentialAddress.rAddressLine2" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rLandmark" className="form-control form-control-lg" placeholder='Landmark'
                            onChange={handleInputChange} name="residentialAddress.rLandmark"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rState" className="form-control form-control-lg" placeholder='State' required="true" onChange={handleInputChange} name="residentialAddress.rState"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rCity" className="form-control form-control-lg" placeholder='City' required="true" onChange={handleInputChange} name="residentialAddress.rCity"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rPincode" className="form-control form-control-lg" placeholder='Pincode' required="true" onChange={handleInputChange} name="residentialAddress.rPincode"/>
                          </div>

                          <div className="form-outline mb-4">
                            <h5>Permanent Address</h5>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pAddressLine1" className="form-control form-control-lg" placeholder='Address Line 1' required="true"
                            onChange={handleInputChange} name="permanentlAddress.pAddressLine1"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pAddressLine2" className="form-control form-control-lg" placeholder='Address Line 2' required="true"
                            onChange={handleInputChange} name="permanentAddress.pAddressLine2"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pLandmark" className="form-control form-control-lg" placeholder='Landmark'
                            onChange={handleInputChange} name="permanentAddress.pLandmark"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pState" className="form-control form-control-lg" placeholder='State' 
                            required="true"
                            onChange={handleInputChange} name="permanentAddress.pState"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pCity" className="form-control form-control-lg" placeholder='City' required="true"
                            onChange={handleInputChange} name="permanentAddress.pCity"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pPincode" className="form-control form-control-lg" placeholder='Pincode' required="true"
                            onChange={handleInputChange} name="permanentAddress.pPincode"/>
                          </div>

                          <div className="form-outline mb-4">
                            <h5>Occupation Details</h5>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="occupationType" className="form-control form-control-lg" placeholder='Occupation Type' required="true"
                            onChange={handleInputChange} name="occupationType"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="sourceIncome" className="form-control form-control-lg" placeholder='Source of Income' required="true"
                            onChange={handleInputChange} name="sourceIncome"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="annualIncome" className="form-control form-control-lg" placeholder='Gross Annual Income' required="true"
                            onChange={handleInputChange} name="annualIncome"/>
                          </div>

                          <div className="form-check-inline">
                                <label className="form-check-label" required="true"
                                onChange={handleInputChange} name="wantDebitCard">Do you want a debit card?
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="debitRadio"/>Yes
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="debitRadio"/>No
                                </label>
                            </div>

                          <div className="form-check d-flex mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="optNetBanking" />
                            <label className="form-check-label" for="optNetBanking" required="true"
                            onChange={handleInputChange} name="optNetBanking">Opt for Net Banking</label>
                          </div>
          
                          <div className="form-check d-flex mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="agree" />
                            <label className="form-check-label" for="agree" required="true"
                            onChange={handleInputChange} name="agree">I agree...</label>
                          </div>
          
                          <div className="d-flex justify-content-center">
                            <button type="button"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleFormSubmit}>
                                Submit</button>
                          </div>
          
                        </form>):(<div className="user-id-popup">
                        <h2>Enter Your User ID</h2>
                        <input
                          type="text"
                          placeholder="USER ID"
                          value={userId}
                          onChange={(e) => setUserId(e.target.value)}
                        />
                        <button onClick={handleUserIdSubmit}>Submit</button>
                        {!isValidUserId && <p className="error-message">Invalid User ID</p>}
                      </div>
)}
              
                      </div>
                    </div>
                  </div>
                
              </div>
          {showUserIdPopup &&(
            <div className="user-id-popup">
              <h2>Enter Your User ID</h2>
              <input
                type="text"
                placeholder="USER ID"
                value={userId}
                onChange={(e)=> setUserId(e.target.value)}
              />
              <button onClick={handleUserIdSubmit}>Submit</button>
              {!isValidUserId && <p className="error-message">Invalid User Id</p>}
            </div>
          )}
          </div>
        );
    }


