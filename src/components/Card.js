import React from 'react';
import './Card.css';
import { FaEuroSign, FaDollarSign, FaRupeeSign } from 'react-icons/fa'; // Importing icons from react-icons library


const Card = (props) => {
  const { icon, title, amount } = props; // Destructure the props

  // Render the icon based on the prop passed
  const renderIcon = () => {
    switch (icon) {
      case 'euro':
        return <FaEuroSign />;
      case 'dollar':
        return <FaDollarSign />;
      case 'inr':
        return <FaRupeeSign />;
      default:
        return null;
    }
  };

  return (
    <div className="card-container">
      <div className="card-icon">{renderIcon()}</div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{amount} USD</p>
      </div>
    </div>
  );
};

export default Card;
