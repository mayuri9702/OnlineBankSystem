import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css'

export const Home = () => {
    const navigate = useNavigate();
        return (
            <div className="two-cards-layout">
      <div className="left-card">
        <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="Card 1" />
        <h2>Left Card</h2>
        <p>This is the content of the left card.</p>
      </div>
      <div className="right-card">
        <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="Card 2" />
        <h2>Right Card</h2>
        <p>This is the content of the right card.</p>
      </div>
    </div>
        );
    }

