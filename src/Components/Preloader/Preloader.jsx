import React from 'react'
import logo from '../../Assets/Logo/logo.png'
import './Preloader.css'
import { BarLoader } from 'react-spinners'

const Preloader = () => {
  return (
    <>
    <div className="loader">
    <img src={logo} alt="logo" data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="ease-in-sine" />
    <h1 data-aos="zoom-in" data-aos-delay="1100"
     data-aos-duration="3000">Government Schools and PU College, Rajanukunte</h1>
     
    <BarLoader color="#000000" height={6} width={115}/>
    
    </div>
    
    </>
  )
}

export default Preloader