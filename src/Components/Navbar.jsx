import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='navb'>
        <div className='Logo'>
            <img alt='logo'/>
            Grocery
        </div>
        <div className='actual-nav'>
            <Link to="/Home">Home</Link>
            <Link to="/InventoryFormSection">Form</Link>
            <Link to="/InventoryTabelList">List</Link>
        </div>
    </nav>
  )
}

export default Navbar