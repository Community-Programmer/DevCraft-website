import React from 'react'
import pucollege from "../../../Assets/Department/pu college.jpg";
import { useNavigate } from 'react-router-dom';
import '../Department.css'

import arts from '../../../Assets/Department/homework.png'
import science from '../../../Assets/Department/atom.png'
import growth from '../../../Assets/Department/growth.png'


const Pucollege = () => {

    const navigate = useNavigate();

    const handleBtnClick = (link) => {
      navigate(link);
      window.scrollTo(0, 0);
    };
  return (
    <>
     <div className="box-heading">
        <img src={pucollege} alt="pucollege" />
        <div>
          <h1 className="main-heading"> PU College </h1>
          <p>
            Welcome to our PU college department page! Dive into the diverse realms of knowledge
            as we introduce the dynamic academic landscape of the Government Institution
            in Rajanukunte. With a commitment to holistic education, the institution proudly
            houses vibrant departments in Arts, Commerce, and Science
          </p>
        </div>
      </div>

      <div className="college-section">
        
        <div className="course-card">
        <img src={arts} alt="science" />
      <button className="btn" onClick={() =>handleBtnClick('/arts')}>Arts</button>
        </div>
      
        <div className="course-card">
        <img src={science} alt="science" />
      <button className="btn" onClick={() =>handleBtnClick('/science')}>Science</button>
      </div>
      <div className="course-card">
      <img src={growth} alt="science" />
      <button className="btn" onClick={() =>handleBtnClick('/commerce')}>Commerce</button>
      </div>
    </div>
    </>
  )
}

export default Pucollege