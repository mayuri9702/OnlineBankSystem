import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css'

export const Home = () => {
    const navigate = useNavigate();
        return (
          <div>
          <nav class="navbar navbar-expand-sm bg-primary navbar-dark">

          <a class="navbar-brand">
          <img src="https://o.remove.bg/downloads/6049c90f-798a-42b4-a380-86d6f331d02a/pngtree-vector-internet-banking-icon-png-image_755759-removebg-preview.png" width="30" height="30" class="d-inline-block align-top" alt="">
           </img> Online Banking System</a>
           </nav>
            <div class="card-group">
            <div class="card mb-2 border-0" style={{paddingRight: '50px'}} onClick={() => navigate('login')}>
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
            <div class="card mb-2 border-0" style={{paddingLeft: '50px'}} onClick={() => navigate('login')}>
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

