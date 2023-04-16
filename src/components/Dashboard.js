import React from 'react';
import './Dashboard.css';
import OpenAccountCard from './OpenAccountCard';
import Card from './Card';
import { FaEuroSign, FaDollarSign, FaRupeeSign } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi'; // Importing filter icon from react-icons library
import CardSlider from './CardSlider';
import TransactionGraph from './TransactionGraph';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1> {/* Render the heading "Dashboard" */}
        <div className="dashboard-filter">
          <FiFilter className="dashboard-filter-icon" /> {/* Render the filter icon */}
          <p>Filter</p>
        </div>
      </div>
      <div className="dashboard-content">
        
          <OpenAccountCard />
          <Card icon={'euro'} title="Dollars" amount="2000" className='card' />
          <Card icon={'dollar'} title="Euro" amount="1000" />
          <Card icon={'inr'} title="INR" amount="1000" />
        
        <div className="dashboard-profile-row">
          <div className="dashboard-profile-greeting">
            <div className="dashboard-profile-icon">
              <img src="/path/to/profile-image.png" alt="Profile" />
            </div>
            <div className="dashboard-profile-text">
              <h2>Good Evening, Mr JohnDoe</h2>
              <p>Welcome to WA-One</p>
            </div>
          </div>
          <div className="dashboard-card-row">
            <Card icon={'euro'} title="Current Balance" amount="$34564" />
            <Card icon={'dollar'} title="Title 2" amount="Amount 2" />
            <Card icon={'inr'} title="Title 3" amount="Amount 3" />
          </div>
        </div>
        
        <div className="dashboard-slider-graph-row">
          <div className="dashboard-card-slider">
            <CardSlider />
          </div>
          <div className="dashboard-transaction-graph" >
            <TransactionGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
