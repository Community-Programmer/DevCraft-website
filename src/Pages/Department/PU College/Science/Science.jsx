import React from 'react'

import science from '../../../../Assets/Department/College.jpg'

import Faculties1 from '../../../../Assets/Department/PU1.png'
import Faculties2 from '../../../../Assets/Department/PU2.png'
import Faculties3 from '../../../../Assets/Department/PU3.png'
import Faculties4 from '../../../../Assets/Department/PU4.png'
import Faculties5 from '../../../../Assets/Department/PU5.png'
import Faculties6 from '../../../../Assets/Department/PU6.png'
import Faculties7 from '../../../../Assets/Department/blank.png'


const Science = () => {
  return (
    <>
        <div className="box-heading">
        <img src={science} alt="science" />
        <div>
          <h1 className="main-heading">Science</h1>
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
            Embark on a comprehensive scientific journey with our PCMB and PCMCS courses.
The PCMB program integrates Physics, Chemistry, Mathematics, and Biology, offering a solid foundation for diverse scientific careers.
Meanwhile, PCMCS combines Physics, Chemistry, Mathematics, and Computer Science, providing a well-rounded understanding of both physical sciences and computational principles.
These courses prepare students for a future in science and technology, fostering a strong theoretical base alongside practical applications.
            </p>
          </div>


          <h1 className="main-heading">Faculties</h1>
          <div className="faculties-card-container">

          <div className="committee-card">
            <img src={Faculties1} alt="faculties" />
            <div className="profile-info">
              <h3>Kartik Ankar (Chemistry)</h3>
              <span>Head of Scouts and Guides - PU College</span>

              <p>Education - MSc., BED, PHD</p>
              <p>Date of Joining - 24/10/2009</p>
              <p>Teaching Experience - 15 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties2} alt="faculties" />
            <div className="profile-info">
              <h3>N Veedavathi (Mathematics)</h3>
              <span>Head of Controller of Examination (COE) - GHS</span>

              <p>Education - MA ,B.Ed</p>
              <p>Date of Joining - 02-05-2011</p>
              <p>Teaching Experience - 13 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties3} alt="faculties" />
            <div className="profile-info">
              <h3>Jayaramareddy R (Physics)</h3>
              <span>Head of Bharat Seva Dal Dept. - PU College</span>

              <p>Education - MSc., B.Ed</p>
              <p>Date of Joining - 28/06/2013</p>
              <p>Teaching Experience - 11 Years</p>
            </div>
          </div>
          
          <div className="committee-card">
            <img src={Faculties4} alt="faculties" />
            <div className="profile-info">
              <h3>V Lokeshwari (Biology)</h3>
              <span>Head of Eco Club Dept. - PU College</span>

              <p>Education - MSc. ,B.Ed</p>
              <p>Date of Joining - 28/06/2013</p>
              <p>Teaching Experience - 11 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties5} alt="faculties" />
            <div className="profile-info">
              <h3>H Hussensabi (Kannada)</h3>

              <p>Education - MA, B.Ed</p>
              <p>Date of Joining - 22/08/1998</p>
              <p>Teaching Experience - 26 Years</p>
            </div>
          </div>


          <div className="committee-card">
            <img src={Faculties6} alt="faculties" />
            <div className="profile-info">
              <h3>Padmashree K (English)</h3>

              <p>Education - M.A, MPhil, NET, B.Ed</p>
              <p>Date of Joining - 01/07/2013</p>
              <p>Teaching Experience - 7 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties7} alt="faculties" />
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

export default Science