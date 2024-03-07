import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Apply = () => {
  return (
    <>
    <Navbar />

<div className="main-section">
    
<h1>Application</h1>
    <form action="">
        <label htmlFor="">Email</label>
        <input type="email" />

        <label htmlFor=""> City</label>
        <input type="text" />
        
        <label htmlFor="">Cover Letter</label>
        <textarea name="cover-letter" id="" cols="30" rows="10"></textarea>

        <label htmlFor="">Resume/CV</label>
        <input type="file" />
        <button>Apply</button>
    </form>
</div>

<Footer />
    
    </>
  )
}
