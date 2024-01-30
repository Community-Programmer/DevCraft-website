import React from "react";
import '../Department.css'
import highschool from "../../../Assets/Department/HS.jpg";

import Faculties1 from '../../../Assets/Department/HS1.png'
import Faculties2 from '../../../Assets/Department/HS2.png'
import Faculties3 from '../../../Assets/Department/HS3.png'
import Faculties4 from '../../../Assets/Department/HS4.png'
import Faculties5 from '../../../Assets/Department/HS5.png'
import Faculties6 from '../../../Assets/Department/HS6.png'
import Faculties7 from '../../../Assets/Department/HS7.png'
import Faculties8 from '../../../Assets/Department/HS8.png'
import Faculties9 from '../../../Assets/Department/HS9.png'

const HighSchool = () => {
  return (
    <>
      <div className="box-heading">
        <img src={highschool} alt="highschool" />
        <div>
          <h1 className="main-heading">High School</h1>
          <p>
            Welcome to our High school department page! This page is a testament to our
            commitment to fostering a nurturing environment where young minds
            flourish. Explore the comprehensive educational offerings, dedicated
            faculty, and a myriad of extracurricular activities that contribute
            to the holistic development of students. We strive to empower the leaders of 
            tomorrow through a blend of academic rigor and character-building experiences.






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
        <div className="committee-card">
          <img src={Faculties1} alt="faculties" />
          <div className="profile-info">
            <h3>Shri Kanataraju B G</h3>
            <span>
            Head Master
            </span>

            <p>
            Education - M.Sc, M.Ed, KES</p>
            <p>
            Date of Joining - 15-06-2007</p>
            <p>
            Teaching Experience - 17 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties2} alt="faculties" />
          <div className="profile-info">
            <h3>Suguna SM (PCM)</h3>

            <p>
            Education - M.Sc, B.Ed</p>
            <p>
            Date of Joining - 12-07-1997</p>
            <p>
            Teaching Experience - 27 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties3} alt="faculties" />
          <div className="profile-info">
            <h3>Uma Dindoor (Arts)</h3>
            <span>
            Head of Tourism, Event and Cultural Dept. - GHS
            </span>

            <p>
            Education - MA, B.Ed</p>
            <p>
            Date of Joining - 30-07-2007</p>
            <p>
            Teaching Experience - 17 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties4} alt="faculties" />
          <div className="profile-info">
            <h3>Shreedevi G (CBZ)</h3>
            <span>
            Head of Science and Technology Dept. - GHS
            </span>

            <p>
            Education - B.Sc, B.Ed</p>
            <p>
            Date of Joining - 09-07-2008</p>
            <p>
            Teaching Experience - 16 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties5} alt="faculties" />
          <div className="profile-info">
            <h3>Manjula Bai S (Hindi)</h3>
            <span>
            Head of Library Dept. - GHS
            </span>

            <p>
            Education - MA, B.Ed</p>
            <p>
            Date of Joining - 03-06-1985</p>
            <p>
            Teaching Experience - 39 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties6} alt="faculties" />
          <div className="profile-info">
            <h3>Siddangangamma (Kannada)</h3>
            <span>
            Head of Controller of Examination (COE) - GHS
            </span>

            <p>
            Education - MA, B.Ed</p>
            <p>
            Date of Joining - 14-02-1985</p>
            <p>
            Teaching Experience - 39 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties7} alt="faculties" />
          <div className="profile-info">
            <h3>Vedavati Bhat (PT)</h3>
            <span>
            Head of Physical Education and National Festivals. - GHS
            </span>

            <p>
            Education - M.P.Ed</p>
            <p>
            Date of Joining - 25-07-1994</p>
            <p>
            Teaching Experience - 30 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties8} alt="faculties" />
          <div className="profile-info">
            <h3>Katyayani. S</h3>
            <span>-</span>
            <p>
            Education - PUC</p>
            <p>
            Date of Joining - 21-10-2017</p>
            <p>
            Teaching Experience - 7 Years</p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Faculties9} alt="faculties" />
          <div className="profile-info">
            <h3>Mr. Balaiah D</h3>
            <span>
            Swimming coach
National Swimmer
            </span>

            <p>
            Experience - 24 years</p>
            
          </div>
        </div>


        </div>
      </div>
    </>
  );
};

export default HighSchool;
