import React, { useState } from 'react';
import './CreateAccount.css'
import axios from 'axios';
import Navbar from './Navbar'


export const CreateAccount = () => {
  const [showUserIdPopup, setShowUserIdPopup] = useState(true);
 
  const [isValidUserId, setIsValidUserId] = useState(false);
  const [userId, setUserId] = useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  


  const generateAccountNumber = () => {
    const upperPart = Math.floor(Math.random() * 100000) * 1000000000;
    const lowerPart = Math.floor(Math.random() * 1000000000);
    const accountNumber = upperPart + lowerPart;
    return accountNumber;
  };

  
 
  const handleUserIdSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/logins/user/${userId}`);

      console.log(response);
      if (response.data.message === 'User ID is valid') {
        setIsValidUserId(true);
        setShowUserIdPopup(false);
        // setUserData({
        //   userId: response.data.userId,
        //   password: response.data.password,
        //   email: response.data.email,
        // });
        // console.log(userData.userId);
        setUserId(response.data.userId);
        setPassword(response.data.password);
        setEmail(response.data.email);
        
      } else {
        setIsValidUserId(false);
      }
    } catch (error) {
      setIsValidUserId(false);
    }
  };

  const [accountType,setAccountType]=useState("");
  const [title,setTitle]=useState("");
  const [firstName,setFirstName]=useState("");
  const [middleName,setMiddleName]=useState("");
  const [lastName,setLastName]=useState("");
  const [fatherName,setFatherName]=useState("");
  const [dateOfBirth,setDateOfBirth]=useState("");
  const [mobileNumber,setMobileNumber]=useState("");
  const [aadharNumber,setAadharNumber]=useState("");
  const [residentialAddress,setResidentialAddress]=useState("");
  const [permanentAddress,setPermanentAddress]=useState("");
  const [occupationType,setOccupationType]=useState("");
  const [sourceIncome,setSourceIncome]=useState("");
  const [annualIncome,setAnnualIncome]=useState("");

  const handleAccountType=(e)=>{
    setAccountType(e.target.value);
  }

  const handleTitle=(e)=>{
    setTitle(e.target.value);
  }

  const handleFirstName=(e)=>{
    setFirstName(e.target.value);
  }

  const handleMiddleName=(e)=>{
    setMiddleName(e.target.value);
  }

  const handleLastName=(e)=>{
    setLastName(e.target.value);
  }

  const handleFatherName=(e)=>{
    setFatherName(e.target.value);
  }

  const handledDateOfBirth=(e)=>{setDateOfBirth(e.target.value);}
  const handleMobileNumber=(e)=>{setMobileNumber(e.target.value);}
  const handleAadharNumber=(e)=>{setAadharNumber(e.target.value);}
  const handleResidentialAddress=(e)=>{setResidentialAddress(e.target.value);}
  const handlePermanentAddress=(e)=>{setPermanentAddress(e.target.value);}
  const handleOccupationType=(e)=>{setOccupationType(e.target.value);}
  const handleSourceIncome=(e)=>{setSourceIncome(e.target.value);}
  const handleAnnualIncome=(e)=>{setAnnualIncome(e.target.value);}


  const handleFormSubmit = async () => {
  
    if(isValidUserId){
    try {

     const accountNo=generateAccountNumber();

      const formData={
      accountNo: accountNo,
      accounttype: accountType,
      title: title,
      firstname: firstName,
      middlename: middleName,
      lastname: lastName,
      fathersname: fatherName,
      mobilenumber: Number(mobileNumber),
      aadharnumber: Number(aadharNumber), 
      dob: dateOfBirth, 
      residentialAddress: residentialAddress,
      permanentAddress: permanentAddress,
      occupationtype: occupationType,
      sourceofincome:  sourceIncome,
      annualincome: Number(annualIncome),
      balance: Number(1000),
      userid:userId
      };
      console.log(accountNo);

      console.log(formData);
      const response = await axios.post(`http://localhost:8081/accounts/${userId}`, formData);
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
  }
  };








return (
  <div>
    <Navbar></Navbar>
    <section className="vh-100 bg-image"
    style ={ { backgroundImage: "url('https://i.pinimg.com/originals/5d/e0/8d/5de08de24459fedac3d28b10a039e2a6.jpg')" } }>
   
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{borderradius: 15+"px"}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Open an Account</h2>
  {isValidUserId ?(
                <form>


                <div className="col-md-12">
                        <select className="form-select mt-3" required onChange={handleAccountType} name="accountType">
                              <option selected disabled value={accountType}>Select Type of Account</option>
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
                        <select className="form-select mt-3" required={true} onChange={handleTitle} name="title">
                              <option selected disabled value={title}>Title</option>
                              <option value="mr">Mr.</option>
                              <option value="mrs">Mrs.</option>
                              <option value="miss">Miss.</option>
                        </select>
                        <br></br>
                    </div>
                
  
                  <div className="form-outline mb-4">
                    <input type="text" id="firstName" className="form-control form-control-lg" placeholder='First Name' onChange={handleFirstName} value ={firstName} name="firstName" required/>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="middleName" className="form-control form-control-lg" placeholder='Middle Name'
                    onChange={handleMiddleName} value={middleName} name="middleName"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Last Name' onChange={handleLastName} value={lastName} name="lastName" required="true"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="fatherName" className="form-control form-control-lg" placeholder="Father's Name" onChange={handleFatherName} value={fatherName} name="fatherName" required="true"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="number" id="mobileNumber" className="form-control form-control-lg" placeholder='Mobile Number' onChange={handleMobileNumber} value={mobileNumber} name="mobileNumber" required="true"/>
                  </div>






                  <div className="form-outline mb-4">
                    <input type="number" id="aadharNumber" className="form-control form-control-lg" placeholder='Aadhar Card Number' onChange={handleAadharNumber} value={aadharNumber} name="aadharNumber" required="true"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="dateOfBirth" className="form-control form-control-lg" placeholder='Date of Birth'onChange={handledDateOfBirth} value ={dateOfBirth} name="dateOfBirth" required="true"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="residentialAddress" className="form-control form-control-lg" placeholder='Residential Address' onChange={handleResidentialAddress} value={residentialAddress}  name="residentialAddress" required="true"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="permanentAddress" className="form-control form-control-lg" placeholder='Permanent Address' onChange={handlePermanentAddress} value={permanentAddress}  name="permanentAddress" required="true"/>
                  </div>

      


                  <div className="form-outline mb-4">
                    <h5>Occupation Details</h5>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="occupationType" className="form-control form-control-lg" placeholder='Occupation Type' required="true"
                    onChange={handleOccupationType} value={occupationType} name="occupationType"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="sourceIncome" className="form-control form-control-lg" placeholder='Source of Income' required="true"
                    onChange={handleSourceIncome} value={sourceIncome} name="sourceIncome"/>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="number" id="annualIncome" className="form-control form-control-lg" placeholder='Gross Annual Income' required="true"
                    onChange={handleAnnualIncome} value={annualIncome} name="annualIncome"/>
                  </div>

                 

                  <div className="form-check-inline">
                        <label className="form-check-label" required="true"
                          name="wantDebitCard">Do you want a debit card?
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
                    <input className="form-check-input me-2" type="checkbox" value="" id="optNetBanking" required="true" />
                    <label className="form-check-label" for="optNetBanking" required="true"
                      name="optNetBanking">Opt for Net Banking</label>
                  </div>
  
                  <div className="form-check d-flex mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="agree" required="true"/>
                    <label className="form-check-label" for="agree" required="true"
                      name="agree">I agree...</label>
                  </div>
  
                  <div className="d-flex justify-content-center">
                    <button type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleFormSubmit}>
                        Submit</button>
                  </div>
  
                </form>):(
                <div className="user-id-popup">
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
            
          </section>
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
              {isValidUserId && <p className="error-message">Invalid User Id</p>}
            </div>
          )}
          </div>
        );
    }






