import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const Footer = () => {

  const { isAuthorized } = useContext(Context);
  return (
    <>
    
    <footer  className={isAuthorized ? "showFooter" : "hideFooter" }>
      <div className="container">
        <div className="wrapper">
          <div className="footer-widget">
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <h3>Naukri.com </h3>
        </div>
            <p className="desc">
              "Discover endless opportunities with Naukri.com - Your trusted partner in finding the perfect job. Join millions of job seekers and employers worldwide. Start your journey today!"
            </p>
            <ul className="socials">
              <li>
                <a to={""}>
                <FaFacebookF />
                </a>
              </li>
              <li>
                <a to={""}>
                <FaTwitter />
                </a>
              </li>
              <li>
                <a to={""}>
                <FaInstagram />
                </a>
              </li>
              <li>
                <a to={""}>
                <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Quick Link</h6>
            <ul className="links">
              <li><a to={""}>home</a></li>
              <li><a to={""}>Find Jobs</a></li>
              <li><a to={""}>Companies</a></li>
              <li><a to={""}>Career Tips</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Services</h6>
            <ul className="links">
              <li><a to={""}>Jobs Search</a></li>
              <li><a to={""}>Career Guidance</a></li>
              <li><a to={""}>Recruitment Solutions</a></li>
              <li><a to={""}>Job Fair and Events:</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Help &amp; Support</h6>
            <ul className="links">
              <li><a to={""}>support center</a></li>
              <li><a to={""}>FAQ</a></li>
              <li><a to={""}>terms &amp; conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>
            Design and Developed by 
            <a to={""} target="blank">Iqrash Jalil </a>
          </p>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer