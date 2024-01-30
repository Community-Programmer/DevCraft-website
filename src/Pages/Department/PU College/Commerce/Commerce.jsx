import React from 'react'

import commerce from '../../../../Assets/Department/College.jpg'

import Faculties1 from '../../../../Assets/Department/PUA1.png'
import Faculties2 from '../../../../Assets/Department/PUC1.png'
import Faculties3 from '../../../../Assets/Department/blank.png'

const Commerce = () => {
  return (
    <>
       <div className="box-heading">
        <img src={commerce} alt="commerce" />
        <div>
          <h1 className="main-heading">Commerce</h1>
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
            Discover a well-rounded commerce program, delving into finance, accounting, and business management.
HEBA integrates history, economics, business studies, and accountancy, offering a humanities and commerce blend. In CEBA, explore computer science, Economics, Business Studies, Accountancy , preparing for success in the dynamic business landscape.
These courses equip students for diverse careers, providing a strong foundation for professional growth.
          </p>
          </div>

          <h1 className="main-heading">Faculties</h1>
          <div className="faculties-card-container">

          <div className="committee-card">
            <img src={Faculties1} alt="faculties" />
            <div className="profile-info">
              <h3>Dr. Laxmi Prasad S B (History)</h3>
              <span>Head of Tourism Dept. - PU College</span>

              <p>Education - M.Sc, B.Ed</p>
              <p>Date of Joining - 19/07/1994</p>
              <p>Teaching Experience - 30 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties2} alt="faculties" />
            <div className="profile-info">
              <h3>Ashwathamma K T (Acc & Bus. Studies)</h3>

              <p>Education - M.Com ,B.Ed</p>
              <p>Date of Joining - 06/02/2023</p>
              <p>Teaching Experience - 1 Years</p>
            </div>
          </div>


          <div className="committee-card">
            <img src={Faculties3} alt="faculties" />
            <div className="profile-info">
              <h3>B R Shivanna (Economics)</h3>
              <span>Head of Library Dept. - GHS</span>

              <p>Education - MA, B.Ed</p>
              <p>Date of Joining - 08/01/2018</p>
              <p>Teaching Experience - 6 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties3} alt="faculties" />
            <div className="profile-info">
              <h3>Rakshit M V (Accountancy)</h3>

              <p>Education - MCom.</p>
              <p>Teaching Experience - 8 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties3} alt="faculties" />
            <div className="profile-info">
              <h3>Bhoomika C M (Computer Science)</h3>

              <p>Education - BE - Computer Science</p>
              <p>Teaching Experience - 5 Years</p>
            </div>
          </div>


          


        </div>
    </>
  )
}

export default Commerce