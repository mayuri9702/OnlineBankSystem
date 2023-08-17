import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarLogout } from './NavbarLogout';
import { LeftNavbar } from './LeftNavbar';

export const SetNewPassword = () => {
    const navigate = useNavigate();
        return (
            <div>
                
                    <NavbarLogout></NavbarLogout>
                    
          <LeftNavbar></LeftNavbar>
                        <div class="row d-flex align-items-center justify-content-center h-100" style={{marginTop:5+'rem'}}>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                    <h1>Set New Password</h1>
                            </div>

                            <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginPassword">Login Password</label>
                                <input type="password" id="loginPassword" class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="cLoginPassword">Confirm Login Password</label>
                                <input type="text" id="cLoginPassword" class="form-control form-control-lg" />
                            </div>

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={()=>navigate('/login')}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
  </div>

        )
}
