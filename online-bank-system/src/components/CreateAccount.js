import React, { useState } from 'react';
import './CreateAccount.css'
import axios from 'axios';
import Navbar from './Navbar'
import PopUp from './PopUp';
import { useNavigate } from 'react-router-dom';


export const CreateAccount = () => {

  const navigate = useNavigate()

 
  const [isValidUserId, setIsValidUserId] = useState(false);
  const [userId, setUserId] = useState('');
  const [password,setPassword]=useState('');
  // const [email,setEmail]=useState('');
  
  const [email, setEmail] = useState('');
  const [popUpState, setPopUpState] = useState(0)
  const [status, setStatus] = useState('')
  const [navigatePage, setNavigatePage] = useState('')
  const openPopUp = () => {
    setPopUpState(1);
  };

  const closePopUp = () => {
    setPopUpState(0);
    console.log(popUpState)
    console.log('hello')
    navigate('/login')
    if(navigatePage==='success'){
      reset()
    }
  };

  const reset = () =>{
    setAccountType('default');
    setTitle('default');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setFatherName('');
    setAadharNumber('');
    setDateOfBirth('')
    setResAddr(''); setResState(''); setResCity(''); setResPinCode('');
    setPerAddr(''); setPerState(''); setPerCity(''); setPerPinCode('');
    setAnnualIncome('');
    setSourceIncome('');
    setMobileNumber('');
    setOccupationType('');
  }

  const generateAccountNumber = () => {
    const  accountNumber = Math.floor(10000000000 + Math.random() * 90000000000);
    return accountNumber;
  };

  
 
  const handleUserIdSubmit = async () => {
        
    

     

    try {
      const response = await axios.get(`http://localhost:8081/logins/user/${userId}`);

      console.log(response);
      if (response.status === 200 && response.data.password === password) {
        setIsValidUserId(true);
        
        // setUserId(response.data.userId);
        // setPassword(response.data.password);
        // setEmail(response.data.email);
        
      } else {
        setIsValidUserId(false);
      }
    } catch (error) {
      setIsValidUserId(false);
    }
  
  };

  const [accountType,setAccountType]=useState('default');
  const [title,setTitle]=useState('default');
  const [firstName,setFirstName]=useState("");
  const [middleName,setMiddleName]=useState("");
  const [lastName,setLastName]=useState("");
  const [fatherName,setFatherName]=useState("");
  const [dateOfBirth,setDateOfBirth]=useState("");
  const [mobileNumber,setMobileNumber]=useState("");
  const [aadharNumber,setAadharNumber]=useState("");
  const [resAddr,setResAddr]=useState("");
  const [resState,setResState]=useState("");
  const [resCity,setResCity]=useState("");
  const [resPinCode,setResPinCode]=useState("");
  const [perAddr,setPerAddr]=useState("");
  const [perState,setPerState]=useState("");
  const [perCity,setPerCity]=useState("");
  const [perPinCode,setPerPinCode]=useState("");
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
  const handleResAddr=(e)=>{setResAddr(e.target.value);}
  const handleResState=(e)=>{setResState(e.target.value);}
  const handleResCity=(e)=>{setResCity(e.target.value);}
  const handleResPinCode=(e)=>{setResPinCode(e.target.value);}
  const handlePerAddr=(e)=>{setPerAddr(e.target.value);}
  const handlePerState=(e)=>{setPerState(e.target.value);}
  const handlePerCity=(e)=>{setPerCity(e.target.value);}
  const handlePerPinCode=(e)=>{setPerPinCode(e.target.value);}
  const handleOccupationType=(e)=>{setOccupationType(e.target.value);}
  const handleSourceIncome=(e)=>{setSourceIncome(e.target.value);}
  const handleAnnualIncome=(e)=>{setAnnualIncome(e.target.value);}


  const handleFormSubmit = async () => {
  
    if(isValidUserId){
    try {

      if(accountType==='default')
      {
        alert("Please select a valid account type!!");
        return;
      }

      if(title==='defalut'){
        alert("Please select a valid title!!");
        return
      }

      if(firstName===""){
        alert("Please enter your first name!!");
        return;
      }

      if(lastName===""){
        alert("Please enter your first name!!");
        return;
      }

      if(fatherName===""){
        alert("Please enter your father's name");
        return;
      }

      if(mobileNumber==="" || mobileNumber.toString().trim().length!=10){
        alert("Please enter a valid mobile number ");
        return;
      }

      if(aadharNumber==="" || aadharNumber.toString().trim().length!=12){
        alert("Please enter a valid Aadhar number");
        return;
      }

      if(dateOfBirth===""){
        alert("Please enter your date of birth");
        return;
      }

     if(resAddr==="" || resState==="" || resCity==="" || resPinCode==="" || resPinCode.toString().trim().length!=6){
      alert("Please enter a valid residential address!!");
      return;
     }

     if(perAddr==="" || perState==="" || perCity==="" || perPinCode==="" || perPinCode.toString().trim().length!=6){
      alert("Please enter a valid permanent address!!");
      return;
     }

      if(occupationType===""){
        alert("Please enter your occupation");
        return;
      }

      if(sourceIncome===""){
        alert("Please enter your source of income");
        return;
      }

      if(annualIncome===""){
        alert("Please enter your annual income");
        return;
      }

     const accountNo=generateAccountNumber();

     const residentialAddress={
      resAddr:resAddr,
      resState:resState,
      resCity:resCity,
      resPinCode: Number(resPinCode)
     };

     const permanentAddress={
      perAddr:perAddr,
      perState:perState,
      perCity:perCity,
      perPinCode:Number(perPinCode)
     }


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
      residentialAddress: JSON.stringify(residentialAddress),
      permanentAddress: JSON.stringify(permanentAddress),
      occupationtype: occupationType,
      sourceofincome:  sourceIncome,
      annualincome: Number(annualIncome),
      balance: Number(100000),
      userid:userId
      };
      console.log(accountNo);

      console.log(formData);
    
      const response = await axios.post(`http://localhost:8081/accounts/${userId}`, formData);
      if (response.status === 200) {
        // Account created successfully
        setPopUpState(1)
        setStatus('Account created successfully!! \n Your account number is :'.concat(formData['accountNo']).concat("\n Don't share your account number with anyone."))
        setNavigatePage('success')
        console.log('Account created successfully');
      } else {
        // Handle error
        setPopUpState(1)
        setStatus('Failed to create an account!')
    
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
                        <select className="form-select mt-3" required onChange={handleAccountType} name="accountType" value={accountType}>
                              <option selected disabled value="default" >Select Type of Account</option>
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
                        <select className="form-select mt-3" required={true} onChange={handleTitle} name="title" value={title}>
                              <option selected disabled  value="default">Title</option>
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
                    <input type="date" id="dateOfBirth" className="form-control form-control-lg" placeholder='Date of Birth'onChange={handledDateOfBirth} value ={dateOfBirth} name="dateOfBirth" required="true"/>
                  </div>


                  <div className="form-outline mb-4">
                    <h5>Residential Adress</h5>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="resAddr" className="form-control form-control-lg" placeholder='Address Line' onChange={handleResAddr} value={resAddr}  name="resAddr" required/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="resState" className="form-control form-control-lg" placeholder='State' onChange={handleResState} value={resState}  name="resState" required/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="resCity" className="form-control form-control-lg" placeholder='City' onChange={handleResCity} value={resCity}  name="resCity" required/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="number" id="resPinCode" className="form-control form-control-lg" placeholder='Pin Code' onChange={handleResPinCode} value={resPinCode}  name="perPinCode" required/>
                  </div>  
                  

                  <div className="form-outline mb-4">
                    <h5>Permanent Adress</h5>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="perAddr" className="form-control form-control-lg" placeholder='Address Line' onChange={handlePerAddr} value={perAddr}  name="perAddr" required/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="perState" className="form-control form-control-lg" placeholder='State' onChange={handlePerState} value={perState}  name="perState" required/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="perCity" className="form-control form-control-lg" placeholder='City' onChange={handlePerCity} value={perCity}  name="perCity" required/>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="number" id="perPinCode" className="form-control form-control-lg" placeholder='Pin Code' onChange={handlePerPinCode} value={perPinCode}  name="perPinCode" required/>
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
                <label for="userid">Username</label>
                <input
                  type="text"
                  id='userid'
                  placeholder="USER ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <label for="password">Password</label>
                <input type="password"
                id='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleUserIdSubmit}>Submit</button>
                {!isValidUserId && <p className="error-message">Invalid Username or Password</p>}
              </div>
)}
             
                      </div>
                    </div>
                  </div>
                </div>
            {popUpState === 1 &&(
              <PopUp onClose={closePopUp}>
                <div>
                  <h3>
                    {status}
                  </h3>
                </div>
              </PopUp>
            )}
          </section>
          </div>
);
}



