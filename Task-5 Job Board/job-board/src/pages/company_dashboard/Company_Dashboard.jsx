import React from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const Company_Dashboard = () => {
  return (
    <>
    <Navbar />

        <div className="main-section">
            
        <h1>Post A Job</h1>
            <form action="">
                <label htmlFor="">Job Title</label>
                <input type="text" />

                <label htmlFor=""> City</label>
                <input type="text" />
                
                <label htmlFor="">Description</label>
                <textarea name="description" id="" cols="30" rows="10"></textarea>

                <label htmlFor="">Salary</label>
                <input type="text" />

                <label htmlFor="">Job Type</label>
                <input type="text" />

                <button>Post</button>
            </form>
        </div>

    <Footer />
    
    
    </>
  )
}
