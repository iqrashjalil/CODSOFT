import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section className='container-fluid'>
      <div className='container '>
        <img src="/404.png" alt="" />

        <h1>404</h1>
        <Link className='row justify-content-center' to={"/"}>Return To Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound