import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa';
import { FaList, FaThList, FaListAlt } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className='sidebar-item'>
        <FaPlusCircle/>
        <p>Add Product</p>
      </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className='sidebar-item'>
        <FaListAlt/>
        <p>Product List</p>
      </div>
      </Link>

    </div>
  )
}

export default Sidebar