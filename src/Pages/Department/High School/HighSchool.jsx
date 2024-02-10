import React from "react";
import '../Department.css'
import highschool from "../../../Assets/Department/high school.jpg";

import highSchoolFaculties from "../../../Data/Faculties/High School/HighSchool";

const HighSchool = () => {
  return (
    <>
      <div className="box-heading">
        <img src={highschool} alt="highschool" />
        <div>
          <h1 className="main-heading">High School</h1>
          <p>
            Welcome to our High School Department page! This page is a testament to our
            commitment to fostering a nurturing environment where young minds
            flourish. Explore the comprehensive educational offerings, dedicated
            faculty, and a myriad of extracurricular activities that contribute
            to the holistic development of students. We strive to empower the leaders of 
            tomorrow through a blend of academic rigor and character-building experiences
          </p>
        </div>
      </div>

      <div className="high-school-section">
        <div className="text-container">
          <h1 className="main-heading">About</h1>
          <p>
            We take pride in providing quality education and fostering an
            inclusive learning environment. As a distinguished government school
            in Karnataka, we are committed to shaping the future of our students
            by offering a holistic educational experience. With a dedicated team
            of experienced educators, we strive for academic excellence by
            offering a well-rounded curriculum that blends traditional wisdom
            with modern teaching methodologies. Our focus is on equipping
            students with critical thinking, problem-solving, and communication
            skills. Beyond academics, we encourage students to explore their
            interests through a range of cultural and extracurricular
            activities. We actively engage with parents, guardians, and the
            local community to create a collaborative and supportive network
            that enhances the overall educational experience.
          </p>
        </div>
        
        <h1 className="main-heading">Faculties</h1>

        <div className="faculties-card-container">

        {highSchoolFaculties.map((data, index) => {
          return (
            <div key={index} className="committee-card">
              <img src={data.image} alt="faculties" />
              <div className="profile-info">
                <h3>{data.name}</h3>
                <span>{data.role}</span>

                <p>{data.education}</p>
                <p>{data.joiningDate}</p>
                <p>{data.experience}</p>
              </div>
            </div>
          );
        })}

       
        </div>
      </div>
    </>
  );
};

export default HighSchool;
