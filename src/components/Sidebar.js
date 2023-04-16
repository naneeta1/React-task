import React from 'react';
import './Sidebar.css';
import { FiHome, FiUser, FiCreditCard, FiDollarSign, FiSend, FiFileText, FiSettings } from 'react-icons/fi'; // Importing icons from react-icons library

const Sidebar = ({ activeLink, setActiveLink }) => {
 
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>Wa-one</h1>
      </div>
      <ul className="sidebar-options">
      <li
          onClick={() => setActiveLink('Dashboard')}
          className={activeLink === 'Dashboard' ? 'active' : ''}
        >
          <FiHome className="sidebar-icon" />
          Dashboard
        </li>
        <li
          onClick={() => setActiveLink('Account')}
          className={activeLink === 'Account' ? 'active' : ''}
        >
          <FiUser className="sidebar-icon" />
          Account
        </li>
        <li
          onClick={() => setActiveLink('Cards')}
          className={activeLink === 'Cards' ? 'active' : ''}
        >
          <FiCreditCard className="sidebar-icon" />
          Cards
        </li>
        <li
          onClick={() => setActiveLink('transactions')}
          className={activeLink === 'transactions' ? 'active' : ''}
        >
         <FiDollarSign className="sidebar-icon" />
          Transactions
        </li>
        <li
          onClick={() => setActiveLink('payment')}
          className={activeLink === 'payment' ? 'active' : ''}
        >
        <FiSend className="sidebar-icon" />
        Payment
        </li>
        <li
          onClick={() => setActiveLink('invoicing')}
          className={activeLink === 'invoicing' ? 'active' : ''}
        >
       <FiFileText className="sidebar-icon" />
       Invoicing
        </li>
        <li
          onClick={() => setActiveLink('settings')}
          className={activeLink === 'settings' ? 'active' : ''}
        >
      <FiSettings className="sidebar-icon" />
       Settings
        </li>   
      </ul>
    </div>
  );
};

export default Sidebar;
