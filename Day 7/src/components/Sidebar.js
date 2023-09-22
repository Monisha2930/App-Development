import React from 'react';
import '../assets/Sidebar.css';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router';
const Sidebar = () => {
    const nav = new useNavigate();
    const dispatch = useDispatch();
    const handlelogout=()=>{
        dispatch(logout());
        nav("/");
    }
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className='bx bxs-dashboard'></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/products">
            <i className='bx bxs-shopping-bag-alt'></i>
            <span className="text">My Store</span>
          </a>
        </li>
        <li>
          <a href="/nmn">
            <i className='bx bxs-doughnut-chart'></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="/nma">
            <i className='bx bxs-message-dots'></i>
            <span className="text">Message</span>
          </a>
        </li>
        <li>
          <a href="/team">
            <i className='bx bxs-group'></i>
            <span className="text">Team</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="/kk">
            <i className='bx bxs-cog'></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="/mm" className="logout">
            <i className='bx bxs-log-out-circle'></i>
            <span className="text" onClick={handlelogout}>Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;