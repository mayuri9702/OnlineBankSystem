import React from 'react';
import './PopUp.css'; // Import your CSS file with styles

const PopUp = ({ onClose, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        <button className="close-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUp;
