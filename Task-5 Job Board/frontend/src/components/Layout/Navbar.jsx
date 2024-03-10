import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';





const Navbar = () => {
const { show, setShow } = useState(false);
const { isAuthorized, setIsAuthorized, user } = useContext(Context);
const navigateTo = useNavigate();

const handleLogout = async () => {
  try{
    const response= await axios.get("http://localhost:4000/api/v1/user/getuser", {withCredentials: true});
    toast.success(response.data.message);
    setIsAuthorized(false);
    navigateTo("/login");
  }catch(error){
    setIsAuthorized(true);
    toast.error(error.response.data.message);
  }
}

  return (
   <>
   
   <nav className={`navbar navbar-expand-lg bg-body-tertiary navbarShow ${isAuthorized ? "navbarShow" : "navbarHide" }` }   >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Naukri.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 &{!show ? "menu":"show-menu menu} `} >
        <li className="nav-item">
          <Link className="nav-link active" to={"/"} onClick={() => setShow(false)} aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/job/getall"} aria-current="page" onClick={() => setShow(false)} >All Jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/application/me"} aria-current="page" onClick={() => setShow(false)}>
            {
            user && user.role === "Employer" ? "APPLICANT'S APPLICATIONS" : "MY APPLICATIONS"
            }
            </Link>
        </li>
        {
          user && user.role === "Employer" ?(
            <>
            <li>
              <Link to={'/job/post'} onClick={() => setShow(false)}>Post New Job</Link>
            </li>
            <li>
              <Link to={'/job/me'} onClick={() => setShow(false)}>View Your Jobs</Link>
            </li>
            </>
          ):<></>
          
        }
      </ul>
      
        <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
      
    </div>
  </div>
</nav>
   
   </>
  )
}
export default Navbar