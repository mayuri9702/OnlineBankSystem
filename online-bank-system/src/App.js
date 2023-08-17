import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {CreateAccount} from './components/CreateAccount';
import {ForgetPassword} from './components/ForgetPassword';
import {ForgetUserID} from './components/ForgetUserID';
import{SetNewPassword} from './components/SetNewPassword';
import {AccountStatement} from './components/AccountStatement';
import {AccountDetails} from './components/AccountDetails';
import { FundTransfer } from './components/FundTransfer';
import {AddPayee} from './components/AddPayee'
import {InitiateTransaction} from './components/InitiateTransaction';
import './App.css';
import React from 'react';


function App() {
  return (
   <Router>
    <Routes>
    <Route exact path="/" element= {<Home/>} />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/createAccount' element={<CreateAccount/>}/>
      <Route exact path='/forgetPassword' element={<ForgetPassword/>}/>
      <Route exact path='/forgetUserID' element={<ForgetUserID/>}/>
      <Route exact path='/setNewPassword' element={<SetNewPassword/>}/>
      <Route exact path='/accountStatement' element={<AccountStatement/>}/>
      <Route exact path='/accountDetails' element={<AccountDetails/>}/>
      <Route exact path='/fundTransfer' element={<FundTransfer/>}/>
      <Route exact path='/addPayee' element={<AddPayee/>}/>
      <Route exact path='/initiateTransaction' element={<InitiateTransaction/>}/>
    </Routes>
  
   </Router>
  
   
   
  );
}

export default App;
