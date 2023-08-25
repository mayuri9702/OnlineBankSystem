import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css'
import adminIcon from '../images/adminIcon.png'
import userIcon from '../images/user.webp'

export const Home = () => {
    const navigate = useNavigate();
    
        return (
          <div>
          <nav class="navbar navbar-expand-sm">
            <a class="navbar-brand">
              <img src="https://cdn2.iconfinder.com/data/icons/buildings-56/48/12-512.png" alt="Application image">
              </img> <span className="s">Online Banking System</span>
            </a>
           </nav>
            <div className="body" style={{backgroundImage:'url("https://www.wallpaperflare.com/static/674/247/756/abstract-shapes-minimalism-blue-background-wallpaper.jpg")'}}>
              <div className="c"onClick={()=>navigate("/adminLogin")}>
                <div class="image-content">
                  <span class="overlay"></span>
                  <div class="card-image">
                    <img src={adminIcon} alt="Admin Icon Image" class="card-img"/>
                  </div>
                </div>
                <div class="card-content">
                  <h2 class="name">Admin</h2>
                  <p class="description">Admin can suspend & delete the account, monitor transactions and search the account holders.</p>
                </div>
              </div>
              <div className="c" onClick={()=>navigate("/login")}>
                <div class="image-content">
                  <span class="overlay"></span>
                  <div class="card-image">
                    <img src={userIcon} alt="User Icon Image" class="card-img"/>
                  </div>
                </div>
                <div class="card-content">
                  <h2 class="name">User</h2>
                  <p class="description">User can create account, register for internet banking, add payee and transfer funds.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }

