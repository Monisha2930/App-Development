import React from 'react';
import '../assets/Dashboard.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Header from './Header';
import Navbar from './Navbar';
import MainDash from './MainDash/MainDash';
import RightSide from './RigtSide/RightSide';
import './script.js';
import '../assets/Main.css'
import Updates from './Updates/Updates';
// import '../assets/Sidebar.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
     
      <Header/>
      <Sidebar />
      
   <MainDash/>

   
    </div>
  );
};

export default Dashboard;