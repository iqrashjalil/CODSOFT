import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer';
import { Jobcard } from '../components/Jobcard';
import { Banner } from '../components/Banner';
import { Profile } from '../components/Profile';

export const Home = () => {
  return (
    <>
    <Navbar />
    <Banner title = "Job"/>
    <section className='content'>
        {/* <div className='content-left'> */}
        <Profile />
        {/* </div> */}
        <div className='content-right'>
            <h3>Results</h3>

                <div className="job-div">
            
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />

            



          


            
            </div>
        </div>

    </section>
    



    <Footer />






    </>
  )
}
