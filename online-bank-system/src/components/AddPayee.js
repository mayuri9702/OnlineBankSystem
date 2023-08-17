import React, { useState } from "react";
import { NavbarLogout } from "./NavbarLogout";
import { useNavigate } from "react-router-dom";

export const AddPayee = () =>{

    const [name, setName] = useState('')
    const [accNo, setAccNo] = useState('')
    const [reAccNo, setReAccNo] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [accNoErr, setAccNoErr] = useState(false)
    const [reAccNoErr, setReAccNoErr] = useState(false)
    const navigate = useNavigate()
 
    async function save(e){
        e.preventDefault()
        if(name===''){
            setNameErr(true)
        }else{
            setNameErr(false)
        }
        if(accNo===''){
            setAccNoErr(true)
        }else{
            setAccNoErr(false)
        }
        if(reAccNo===''){
            setReAccNoErr(true)
        }else{
            setReAccNoErr(false)
        }
        if(name!=='' && accNo!=='' && reAccNo!==''){
            navigate('/fundTransfer')
        }
    }

    function ReAccNoHandler(e){
        let item=e.target.value
        if(item===''){
          setReAccNoErr(true)
        }else{
          setPasswordErr(false)
        }
        setPassword(item)
    }

    return(
        <div>
       <NavbarLogout></NavbarLogout>
   <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://www.transparentpng.com/thumb/user/add-user-male-transparent-icon--6vjB7f.png"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
                        <label class="form-label" for="name">Beneficiary Name</label>
                        <input type="text" id="name" class="form-control form-control-lg border"
                        value={name} />
                        {nameErr?<span>Name can't be empty!</span>:""}
    
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="acc">Beneficiary Account Number</label>
                        <input type="text" id="acc" class="form-control form-control-lg"
                        value={accNo}/>
                        {accNoErr?<span>Account number can't be empty!</span>:""} 
                    </div>

                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="accR">Re-enter Account Number</label>
                        <input type="text" id="accR" class="form-control form-control-lg"
                        value={reAccNo} onChange={ReAccNoHandler} />
                        {nameErr?<span>Account number doesn't match!</span>:""}
                    </div>

                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="nick">Nick Name</label>
                        <input type="text" id="nick" class="form-control form-control-lg" />
                    </div>

                    <div class="d-flex justify-content-around align-items-center mb-4">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Save As Beneficiary</button>
                    </div>

        </form>
      </div>
    </div>

  </div>
</section>
            </div>

    )
}