import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [activeLink, setActiveLink] = useState('Dashboard'); // Initialize activeLink state with 'Dashboard'

  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
        <div className="main-content">
          <TopBar />
         <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
