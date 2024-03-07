import React from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Profile } from '../../components/Profile'

export const User_Settings = () => {
  return (
    <>
    
    <Navbar />
    

   <section className='content'>

      <Profile />
      <div className='settings-right'>
      <nav><h2>Settings</h2> <button className='settings-save'>Save</button> </nav>
            <div className='settings-section'>
                 
              <img src="images/profile/profile1.jpg" alt="" />
                <form className='settings-inputs'>
              
              <label htmlFor="">Username</label>
              <input className='input' type="text" placeholder='Username'/>
              
              <label htmlFor="">Email</label>
              <input className='input' type="email" />

              <label htmlFor="">Password</label>
              <input  className='input' type="password" />

              <label htmlFor="">Confirm Password</label>
              <input className='input' type="password" />

              <label htmlFor="">Profile Picture</label>
              <input className='choose-file' type="file" />

              
              </form>

            </div>
      </div>

</section> 
    <Footer />
    
    </>
  )
}
