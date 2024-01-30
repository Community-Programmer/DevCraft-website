import React from 'react'
import './Facilities.css'

import cslab1 from '../../Assets/Facilities/CsLab1.webp'
import Cslab2 from '../../Assets/Facilities/CsLab2.webp'
import Cslab3 from '../../Assets/Facilities/CsLab3.jpg'

import Phylab1 from '../../Assets/Facilities/Phylab1.jpg'
import Phylab2 from '../../Assets/Facilities/Phylab2.jpg'
import Phylab3 from '../../Assets/Facilities/Phylab3.jpg'

import Chemlab1 from '../../Assets/Facilities/Chemlab1.jpeg'
import Chemlab2 from '../../Assets/Facilities/Chemlab2.jpg'
import Chemlab3 from '../../Assets/Facilities/Chemlab3.jpg'

import Smartclass1 from '../../Assets/Facilities/SmartClass1.jpg'
import Smartclass2 from '../../Assets/Facilities/SmartClass2.jpg'
import Smartclass3 from '../../Assets/Facilities/SmartClass3.jpeg'

import Meal1 from '../../Assets/Facilities/Meal1.jpg'
import Meal2 from '../../Assets/Facilities/Meal2.jpg'
import Meal3 from '../../Assets/Facilities/Meal3.jpg'


import Court1 from '../../Assets/Facilities/Court1.jpg'
import Court2 from '../../Assets/Facilities/Court2.jpg'
import Court3 from '../../Assets/Facilities/Court3.jpg'


import Pool1 from '../../Assets/Facilities/Pool1.jpg'
import Pool2 from '../../Assets/Facilities/Pool2.jpg'
import Pool3 from '../../Assets/Facilities/Pool3.jpg'

import Auditorium1 from '../../Assets/Facilities/Auditorium1.jpg'
import Auditorium2 from '../../Assets/Facilities/Auditorium2.jpg'
import Auditorium3 from '../../Assets/Facilities/Auditorium3.jpg'


import Ground1 from '../../Assets/Facilities/Ground1.jpg'
import Ground2 from '../../Assets/Facilities/Ground2.jpg'
import Ground3 from '../../Assets/Facilities/Ground3.jpg'

const Facilities = () => {
  return (
    <>
    <div class = "heading">
        <h1> SALIENT FEATURES &amp; FACILITIES </h1>
    </div>

    <div class = "feature">
        <ul>
            <li> The medium of instruction is English/Kannada. </li>
            <li> Our schools use latest technology for effective teaching, learning such as LCD, HOP, Computer and Internet/wi-fi facility. </li>
            <li> Students are motivated to take part in all types of games, yoga and co-curricular activities.</li>
            <li> The schools have well equipped laboratories for Physics, Chemistry, Biology and Computer Science with internet connectivity. </li>
            <li> Sports and game facilities. Spacious play ground for out door activities. </li>
            <li> Celebration of National festivals and other important days in order to develop a feeling of "INDIANNESS". </li>
            <li> Active participation of students in scholastic and co-scholastic activities. </li>
        </ul>
    </div>

  {/* Computer Lab */}
  <div class = "whole-container">
  <div class= "sub-container"> <h1 class ="sub-heading"> COMPUTER LAB </h1> </div>
     
   <div class = "facilities-image">
        <img src={cslab1} alt="lab"/>
        <img src={Cslab2} alt="lab"/>
        <img src={Cslab3} alt="lab"/>
   </div>

  

   <div class= "sub-container"> <h1 class ="sub-heading"> PHYSICS LAB </h1>  </div>
   <div class = "facilities-image">
        <img src={Phylab1} alt="lab"/>
        <img src={Phylab2} alt="lab"/>
        <img src={Phylab3} alt="lab"/>
   </div>

 
   <div class= "sub-container"><h1 class ="sub-heading">CHEMISTRY LAB </h1>  </div>
   <div class = "facilities-image">
        <img src={Chemlab1} alt="lab"/>
        <img src={Chemlab2} alt="lab"/>
        <img src={Chemlab3} alt="lab"/>
   </div>

   <div class= "sub-container"><h1 class = "sub-heading"> SMART CLASSES  </h1> </div>
  <div class = "facilities-image">
       <img src={Smartclass1} alt="meal"/>
       <img src={Smartclass2} alt="meal"/>
       <img src={Smartclass3} alt="meal"/>
  </div>

   <div class= "sub-container"> <h1 class = "sub-heading"> SCHOOL MEAL  </h1> </div>
   <div class = "facilities-image">
        <img src={Meal1} alt="meal"/>
        <img src={Meal2} alt="meal"/>
        <img src={Meal3} alt="meal"/>
   </div>/


  <div class= "sub-container"> <h1 class = "sub-heading"> BADMINTON COURT </h1> </div>
   <div class = "facilities-image">
        <img src={Court1} alt="court"/>
        <img src={Court2} alt="court"/>
        <img src={Court3} alt="court"/>
   </div>


  <div class= "sub-container"><h1 class = "sub-heading"> SWIMMING POOL  </h1> </div>
  <div class = "facilities-image">
       <img src={Pool1} alt="pool"/>
       <img src={Pool2} alt="pool"/>
       <img src={Pool3} alt="pool"/>
  </div>

  <div class= "sub-container"> <h1 class = "sub-heading"> AUDITORIUM  </h1> </div>
  <div class = "facilities-image">
       <img src={Auditorium1} alt="auditorium"/>
       <img src={Auditorium2} alt="auditorium"/>
       <img src={Auditorium3} alt="auditorium"/>
  </div>


  <div class= "sub-container"> <h1 class = "sub-heading"> GROUND </h1> </div> 
  <div class = "facilities-image">
       <img src={Ground1} alt="ground"/>
       <img src={Ground2} alt="ground"/>
       <img src={Ground3} alt="ground"/>
   </div>

   </div>
    
    
    </>
  )
}

export default Facilities