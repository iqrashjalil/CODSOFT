import React from 'react'
import { CiLogout, CiSettings } from 'react-icons/ci'

export const Profile = () => {
  return (
    <>
    <div className='content-left'>
                <div className="home-profile">
                    <img src="images/profile/profile2.jpg" alt="" />
                    <h4>Iqrash Jalil</h4>
                    <p>MERN Stack Developer</p>
                    
                </div>
                <hr />
                <div className='content-options'>
                <button className='settings-btn'> <CiSettings className='icon' /> Settings</button> 
                <button className='logout-btn'> <CiLogout className='icon' />  Logout</button>
                </div>
        </div>
    
    </>
  )
}
