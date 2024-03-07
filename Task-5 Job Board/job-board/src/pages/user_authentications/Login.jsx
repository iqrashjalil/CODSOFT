import React from 'react'
import { Footer } from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { CiLock } from 'react-icons/ci';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineSupervisorAccount } from 'react-icons/md';


export const Login = () => {
  return (
    <>
    <Navbar />
    <section className='registration'>
    <div className="registration-left">

        <img src="images/pic1.gif" alt="" />

    </div>

    <div className="registration-right">

        <form className='reg-form' action="">
            
            <h1>Welcome To Naukri.com</h1>
            
            
            <label htmlFor="email">Email</label>
            <div>
            <span>
            <TfiEmail className='reg-email-icon' />
            <input type="email" placeholder='Enter Your Email '/>
            </span>
            </div>
            
            <label htmlFor="password">Password</label>
            <div>
            <span><CiLock className='reg-password-icon'/> 
            <input type="password" placeholder='Enter Your Password '/>
            </span>
            </div>

           

        <button type='submit'>Login</button>
        <p>Don't Have An Account? <a href="/">Sign Up!</a></p>
        </form>

    </div>
    </section>
    <Footer />
    
    </>
  )
}
