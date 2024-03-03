import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export const Banner = (props) => {
  return (
    <>
    <section className="hero">
        <h1>Let's Find Your <span>Dream</span> {props.title} Here!</h1>
        <form action="">
            <div>
            <span>
            <CiSearch className='search-icon'/>
            </span>
            <input type="search" placeholder={`Enter ${props.title} To Search`} />
            </div>
            <button type="submit">Search <IoChevronForwardSharp /> </button>

        </form> 
    </section>
    
    </>
  )
}
