import React, { useState } from 'react';
import './Assets/login.css';
import ParallaxTilt from 'react-parallax-tilt';
import { toast, Toaster } from 'react-hot-toast';
import { FacebookOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons/lib/icons';
import { TwitterOutlined } from '@ant-design/icons/lib/icons';
import { GoogleOutlined } from '@ant-design/icons/lib/icons';

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [settings, setSettings] = useState({}); 

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  
  const saveSettings = async (settings) => {
    
    try {
    
      setSettings(settings);

      
      return 'Info saved!😃';
    } catch (error) {
    
      throw new Error('Could not save.');
    }
  };

  const handleSaveSettings = async () => {
    
    const userName = document.getElementsByName('txt')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('pswd')[0].value;

    if (!userName || !email || !password) {
      
      toast.error('Please fill the content😢');
      return;
    }

    try {
      const message = await toast.promise(
        saveSettings(settings),
        {
          loading: 'Saving...',
          success: (data) => <b>{data}</b>, 
          error: (error) => <b>{error.message}</b>, 
        }
      );
      console.log('Save Settings Result:', message);
    } catch (error) {
      console.error('Error while saving settings:', error);
    }
    
  };

  return (
    <div>
      <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
        />
    <ParallaxTilt
      perspective={500}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      gyroscope={false}
    >
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={toggleCheckbox} />
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={toggleCheckbox} />

      <div className="signup">
     
        <form>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="button" onClick={handleSaveSettings}>Sign up</button>
        </form>
        <div style={{marginLeft:'20px'}}className="icons">
     
     <span>
     {/* <button  > <FacebookOutlined  /></button> */}
    <a href="https://www.facebook.com/"><FacebookOutlined /></a>
     </span>
     <span>
     <a href="https://www.instagram.com/">< InstagramOutlined/></a>
     </span>
     <span>
     <a href="https://www.twitter.com/">< TwitterOutlined/></a>
     </span>
     <span>
     {/* <a><Link to='/home' className="click">Home</Link></a> */}
     <a href="https://www.google.com/">< GoogleOutlined/></a>
     </span>
       </div>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="button" onClick={handleSaveSettings}>Login</button>

        </form>
        
      </div>
    </div>
    </div>
    
 

    </ParallaxTilt>

    </div>
  );
}

export default  LoginPage;

