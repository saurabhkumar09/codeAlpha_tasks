import React from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="" className='nav-logo'>TRENDYMART</a>
        <FaUserCircle style={{ fontSize: '40px', color: 'gray' }} />
    </div>
  )
}

export default Navbar