import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
        return (
            <section class="vh-100 bg-image"
            style ={ { backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63998.jpg?w=2000')" } }>
            
            <div class="justify-content-center">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <h1>Online Banking System</h1>
                </div>
                <br></br><br></br>
                
                    <div class="h-100 d-flex align-items-center justify-content-center">
                        <img src="https://freesvg.org/img/1544644532.png" class="img-fluid" style={{width:1+'em'}} alt="Responsive"></img>
                        <p class="h5">Login for Internet Banking</p>
                    </div>
                <div class="justify-content-center">
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn btn-outline-info btn-lg" onClick={()=>navigate('login')}>Login</button>
                    </div>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn btn-outline-info btn-lg" onClick={()=>navigate('register')}>New User? Register</button>
                    </div>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn btn-outline-info btn-lg" onClick={()=>navigate('createAccount')}>Apply Online for Account</button>
                    </div>
                </div>
            </div>
            </section>
        );
    }

