import React, { useState } from 'react'
import { CgMenu, CgClose } from "react-icons/cg";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
    
    <>
    <header>
        <div className="logo">
            <img src="images/logo.png" alt="" />
            <h3>Job Board </h3>
        </div>
        
    <nav className={openMenu ? "active":""}>
        
        <ul className='navbar-list'>
            
            <CgClose className='mobile-close' onClick={()=>{setOpenMenu(false)}}/>    
            <li><a href="/">Home</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>

        

    <div className='profile'>
        <button className='signin'>Signin</button>
        <button className='signup primary-color'>Signup</button>
    </div>
    <CgMenu className='mobile-menu' onClick={()=>{setOpenMenu(true)}}/>
    </header>
    </>
  )
}
