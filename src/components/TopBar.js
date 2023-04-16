import React from 'react';
import './TopBar.css';
import SearchBar from './SearchBar';
import { FaGlobe, FaMoon, FaPalette, FaBell, FaUserCircle } from 'react-icons/fa'; // Importing icons from react-icons library

function TopBar() {
  return (
    <div className="top-bar-container">
      <div className="left-side">
        <SearchBar />
      </div>
      <div className="right-side">
        <FaGlobe className="icon" />
        <FaMoon className="icon" />
        <FaPalette className="icon" />
        <FaBell className="icon" />
        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <span className="profile-name">John Doe</span>
          <div className="dropdown">
            {/* Dropdown content */}
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
