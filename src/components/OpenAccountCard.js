import React from 'react';
import './OpenAccountCard.css'; // Importing custom CSS for the card

const OpenAccountCard = () => {
  return (
    <div className="card-container">
      <div className="card-text">
        <h2>Open Another Account</h2> {/* Render the bold text */}
        <p>Transact in multiple currencies</p> {/* Render the text below in normal font */}
      </div>
      <div className="card-button">
        <button className="now-button">Now</button> {/* Render the "Now" button */}
      </div>
    </div>
  );
};

export default OpenAccountCard;
