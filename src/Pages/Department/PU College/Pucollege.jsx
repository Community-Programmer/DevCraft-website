import React from 'react'
import overview from "../../../Assets/Academic Page/Overview.jpg";
import { useNavigate } from 'react-router-dom';
import '../Department.css'


const Pucollege = () => {

    const navigate = useNavigate();

    const handleBtnClick = (link) => {
      navigate(link);
      window.scrollTo(0, 0);
    };
  return (
    <>
     <div className="box-heading">
        <img src={overview} alt="scholarship" />
        <div>
          <h1 className="main-heading">College Departments</h1>
          <p>
            Welcome to our Admission Page! Explore exciting opportunities and
            embark on a journey of academic excellence. Discover the key to
            unlocking your potential and join a community dedicated to fostering
            growth, knowledge, and success. Your educational adventure begins
            here!
          </p>
        </div>
      </div>

      <div className="college-section">
        
      <button className="btn" onClick={() =>handleBtnClick('/arts')}>Arts</button>
      
      <button className="btn" onClick={() =>handleBtnClick('/science')}>Science</button>
      
      <button className="btn" onClick={() =>handleBtnClick('/commerce')}>Commerce</button>
      </div>
    
    </>
  )
}

export default Pucollege