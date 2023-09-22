
import React from 'react';
import '../assets/Dashboard.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Header from './Header';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header/>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;