import React from "react";

import primaryschool from "../../../Assets/Department/PS.jpg";

import Faculties1 from "../../../Assets/Department/PS1.png";
import Faculties2 from "../../../Assets/Department/PS2.png";
import Faculties3 from "../../../Assets/Department/PS3.png";
import Faculties4 from "../../../Assets/Department/PS4.png";
import Faculties5 from "../../../Assets/Department/PS5.png";
import Faculties6 from "../../../Assets/Department/PS6.png";
import Faculties7 from "../../../Assets/Department/PS7.png";

const Primaryschool = () => {
  return (
    <>
      <div className="box-heading">
        <img src={primaryschool} alt="primaryschool" />
        <div>
          <h1 className="main-heading">Primary School</h1>
          <p>
            Welcome to our Admission Page! Explore exciting opportunities and
            embark on a journey of academic excellence. Discover the key to
            unlocking your potential and join a community dedicated to fostering
            growth, knowledge, and success. Your educational adventure begins
            here!
          </p>
        </div>
        </div>
        
          <div className="text-container">
            <h1 className="main-heading">About</h1>
            <p>
              We take pride in providing quality education and fostering an
              inclusive learning environment. As a distinguished government
              school in Karnataka, we are committed to shaping the future of our
              students by offering a holistic educational experience. With a
              dedicated team of experienced educators, we strive for academic
              excellence by offering a well-rounded curriculum that blends
              traditional wisdom with modern teaching methodologies. Our focus
              is on equipping students with critical thinking, problem-solving,
              and communication skills. Beyond academics, we encourage students
              to explore their interests through a range of cultural and
              extracurricular activities. We actively engage with parents,
              guardians, and the local community to create a collaborative and
              supportive network that enhances the overall educational
              experience
            </p>
          </div>
          <h1 className="main-heading">Faculties</h1>
          <div className="faculties-card-container">

          <div className="committee-card">
            <img src={Faculties1} alt="faculties" />
            <div className="profile-info">
              <h3>Shri Shreenivasa G</h3>
              <span>In-Charge Head Master</span>

              <p>Education - CPEd, Kan& Eng Sr typing, PUC</p>
              <p>Date of Joining - 26-07-1994</p>
              <p>Teaching Experience - 29 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties2} alt="faculties" />
            <div className="profile-info">
              <h3>Veena T.S</h3>

              <p>Education - PUC, TCH, B.Sc, B.Ed</p>
              <p>Date of Joining - 31-07-2002</p>
              <p>Teaching Experience - 22 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties3} alt="faculties" />
            <div className="profile-info">
              <h3>Kalpana T.R</h3>

              <p>Education - TCH, PUC</p>
              <p>Date of Joining - 10-08-2002</p>
              <p>Teaching Experience - 22 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties4} alt="faculties" />
            <div className="profile-info">
              <h3>Lalita Baby</h3>

              <p>Education - TCH,BA,PUC</p>
              <p>Date of Joining - 25-08-2008</p>
              <p>Teaching Experience - 16 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties5} alt="faculties" />
            <div className="profile-info">
              <h3>Soubhagya P</h3>

              <p>Education - MA, B.Ed,BA</p>
              <p>Date of Joining - 09-03-2016</p>
              <p>Teaching Experience - 7 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties6} alt="faculties" />
            <div className="profile-info">
              <h3>Lavanya C</h3>

              <p>Education - D.Ed, PUC</p>
              <p>Date of Joining - 30-03-2016</p>
              <p>Teaching Experience - 8 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties7} alt="faculties" />
            <div className="profile-info">
              <h3>Kalpana T.R</h3>
              <span>Head Master</span>

              <p>Education - MA,B.Ed, BA</p>
              <p>Date of Joining - 06-06-2020</p>
              <p>Teaching Experience - 4 Years</p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Primaryschool;
