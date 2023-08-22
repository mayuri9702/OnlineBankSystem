import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css'
import './NavbarLogout'

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
            <div class="card-group">
            <div class="card mb-2 border-0" style={{paddingRight: '50px'}} onClick={() => navigate('/adminLogin')}>
              <img src="https://cdn-icons-png.flaticon.com/128/7952/7952741.png" class="card-img-top"
                alt="Hollywood Sign on The Hill" />
              <div class="card-body"> 
                <h5 class="card-title">Admin</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
            <div class="card mb-2 border-0" style={{paddingLeft: '50px'}} onClick={() => navigate('/login')}>
              <img src="https://icon-library.com/images/users-icon/users-icon-20.jpg" class="card-img-top"
                alt="Palm Springs Road" />
              <div class="card-body">
                <h5 class="card-title">User</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          </div>
        );
    }

