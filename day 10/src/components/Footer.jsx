import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-l'>
                Copyright 2023 @ MaX Inc
            </div>
            <div className='footer-r'>
                <Link to='/privacy'>Privacy Policy</Link>
                <Link to='/terms'>Terms & Conditions</Link>
                <Link to='/faq'>FAQ</Link>
                {/* <Link to='/admin/login'>Admin</Link> */}
                <Link to='/feedback' className='feedback-link'>Feedback</Link>
            </div>
        </div>

    </div>
  )
}
export default Footer