import React from 'react'
import { Footer } from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { CiLock, CiUser } from 'react-icons/ci';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

export const Signup = () => {
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
            
            
            <label htmlFor="username">Username</label>
            <div>
            <span><CiUser className='reg-password-icon'/> 
            <input type="text" placeholder='Enter Your Username '/>
            </span>
            </div>


            <label htmlFor="email">Email</label>
            <div>
            <span>
            <TfiEmail className='reg-email-icon' />
            <input type="email" placeholder='Enter Your Email ' />
            </span>
            </div>
            
            <label htmlFor="account-type">Account Type</label>
            <div>
            <span><MdOutlineSupervisorAccount className='reg-password-icon'/> 
            <select id="accountType">
            <option value="select-type">Select Account Type</option>
                <option value="candidate">Candidate Account</option>
                <option value="company">Company Account</option>
            </select>
            </span>
            </div>
            
            <label htmlFor="password">Password</label>
            <div>
            <span><CiLock className='reg-password-icon'/> 
            <input type="password" placeholder='Enter Your Password'/>
            </span>
            </div>
            
            <label htmlFor="confirm-password">Confirm-Password</label>
            <div>
            <span><IoIosLock  className='reg-password-icon'/> 
            <input type="password" placeholder='Confirm-Password'/>
            </span>
            </div>
            

        <button type='submit'>Signup</button>
        <p>Already Have An Account? <a href="/">Signin! </a></p>
        </form>

    </div>
    </section>
    <Footer />
    </>
  )
}
