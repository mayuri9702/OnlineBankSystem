import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {CreateAccount} from './components/CreateAccount';
import {ForgetPassword} from './components/ForgetPassword';
import {ForgetUserID} from './components/ForgetUserID';
import{SetNewPassword} from './components/SetNewPassword';
import {AccountStatement} from './components/AccountStatement';
import {AccountSummary} from './components/AccountSummary';
import { FundTransfer } from './components/FundTransfer';
import {AddPayee} from './components/AddPayee'
import {InitiateTransaction} from './components/InitiateTransaction';
import {TransferSuccess} from './components/TransferSuccess'; 
import {NewUser} from './components/NewUser';
import {SessionExpired} from './components/SessionExpired'
import './App.css';
import React from 'react';
import {DisplayAccount} from './components/DisplayAccounts'
import {AdminLogin} from './admin/AdminLogin'



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
      <Route exact path='/accountSummary' element={<AccountSummary/>}/>
      <Route exact path='/fundTransfer' element={<FundTransfer/>}/>
      <Route exact path='/fundTransfer/addPayee' element={<AddPayee/>}/>
      <Route exact path='/fundTransfer/initiateTransaction' element={<InitiateTransaction/>}/>
      <Route exact path='/transferSuccess' element={<TransferSuccess/>}/>
      <Route exact path='/newUser' element={<NewUser/>}/>
      <Route exact path='/sessionExpired' element={<SessionExpired/>}/>
      <Route exact path='/displayAccount' element={<DisplayAccount/>}/> 
      <Route exact path='/adminLogin' element={<AdminLogin/>}/>
    </Routes>
  
  
   </Router>

  
  
   
   
  );
}

export default App;
