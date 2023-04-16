import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons library
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  const handleChange = (event) => {
    // Handle input change
    // You can add your own logic here
  };

  const handleIconClick = () => {
    // Handle icon click
    // You can add your own logic here, e.g., trigger search
    handleSearch();
  };

  return (
    <div className="search-bar-container">
    <FaSearch className="search-icon" onClick={handleIconClick} />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={handleChange}
      />
      
    </div>
  );
};

export default SearchBar;
