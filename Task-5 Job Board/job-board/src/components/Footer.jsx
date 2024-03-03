import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
    <footer>
      <div class="container">
        <div class="wrapper">
          <div class="footer-widget">
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <h3>Naukri.com </h3>
        </div>
            <p class="desc">
              "Discover endless opportunities with Naukri.com - Your trusted partner in finding the perfect job. Join millions of job seekers and employers worldwide. Start your journey today!"
            </p>
            <ul class="socials">
              <li>
                <a href="#">
                <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Quick Link</h6>
            <ul class="links">
              <li><a href="#">home</a></li>
              <li><a href="#">Find Jobs</a></li>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Career Tips</a></li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Services</h6>
            <ul class="links">
              <li><a href="#">Jobs Search</a></li>
              <li><a href="#">Career Guidance</a></li>
              <li><a href="#">Recruitment Solutions</a></li>
              <li><a href="#">Job Fair and Events:</a></li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Help &amp; Support</h6>
            <ul class="links">
              <li><a href="#">support center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">terms &amp; conditions</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright-wrapper">
          <p>
            Design and Developed by 
            <a href="#" target="blank">Iqrash Jalil </a>
          </p>
        </div>
      </div>
    </footer>
    
    </>
  )
}
