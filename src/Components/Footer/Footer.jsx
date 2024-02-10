import React from 'react'
import logo from '../../Assets/Logo/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer class = "footer">

<div class = "footer-container">
    <div class="about-school">
        <h3> Government institution </h3>
        <p> <i class="fa-solid fa-location-dot"></i> 5HF5+FMP, Main Road, Rajanukunte, Bangalore, Karnataka, 560064 </p>
        <p> Govt PU College: </p>
        <p> <i class="fa-solid fa-phone"> </i> Phone: +91 96112 29966 </p>
        <p> Govt High School: </p>
        <p> <i class="fa-solid fa-phone"> </i> Phone: +91 98459 17244  </p>
        <p> Govt primary School: </p>
        <p> <i class="fa-solid fa-phone"> </i> Phone: +91 72046 02103 </p>



    </div>

    <div id="quick-links" class = "links">
        <h3> Quick Links </h3>
        <ul>
            <li> <i class="fa-solid fa-arrow-right"></i>  <Link to="/"> Home </Link> </li>
            <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/events"> School Events </Link> </li>
            <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/gallery-images"> Photo Gallery </Link> </li>
            <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/fee"> Fee Structure </Link> </li>
           

        </ul>
        <img src={logo} alt="school logo"/>

    </div>

<div id="Useful-links"  class = "links">
    <h3> Useful links </h3>
    <ul>
        <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/board-members"> Board of Members </Link> </li>
        <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/contact"> Contact </Link> </li>
        <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/facilities"> Facilities </Link> </li>
        <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/timetable"> Timetables </Link> </li>
        <li> <i class="fa-solid fa-arrow-right"></i> <Link to="/events"> Events </Link> </li>

    </ul>

</div>
</div>
<div className="footer-bottom">
    <p>Copyright © 2024 Government Institution, RajanuKunte - All Rights Reserved</p>
</div>
  </footer>
    
    </>
  )
}

export default Footer