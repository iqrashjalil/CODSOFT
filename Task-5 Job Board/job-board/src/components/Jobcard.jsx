import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

export const Jobcard = () => {
  return (
    <>
    <div className='job-card'>
                <div className="job-details">
                <img src="images/profile/profile1.jpg" alt="" />
                <div className="info">
                    <p>Systems Limited</p>
                    <h5>Graphic Designer</h5>
                    <p> <IoLocationSharp className='location-icon' /> Lahore</p>
                    </div>
                    <FaRegBookmark className='bookmark-icon'/>
                    </div>
                    <hr />
                    <div className='description'>
                        <p>This is a full stack developer job in lahore which includes best packages for you as well and best benefits as well and what is thefull job etc waghera waghera</p>
                    </div>
                

            </div>
    
    </>
  )
}
