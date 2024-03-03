import React from 'react'
import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Profile } from '../components/Profile'
import { Company_card } from '../components/Company_card'

export const Companies = () => {
  return (
   <>
   <Navbar/>
   <Banner title = "Company"/>
   


   <section className='content'>

        <Profile />
        <div className='content-right'>
            <h3>Companies Listed In Naukri.com</h3>

                <div className="job-div">
            
            
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />
              <Company_card />

              
          


            
            </div>
        </div>

    </section>

   <Footer />
   
   </>
  )
}
