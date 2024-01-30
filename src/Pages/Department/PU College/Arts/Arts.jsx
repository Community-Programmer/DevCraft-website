import React from 'react'
import arts from '../../../../Assets/Department/College.jpg'

import Faculties1 from '../../../../Assets/Department/PUA1.png'
import Faculties2 from '../../../../Assets/Department/blank.png'
import Faculties3 from '../../../../Assets/Department/PUA3.png'
import Faculties4 from '../../../../Assets/Department/PUA4.png'

const Arts = () => {
  return (
    <> 
    <div className="box-heading">
        <img src={arts} alt="arts" />
        <div>
          <h1 className="main-heading">Arts</h1>
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
            Immerse yourself in our holistic arts program, encompassing literature, visual arts, performing arts, and cultural studies.
Cultivate creativity and critical thinking, preparing for a future in diverse artistic expressions and cultural contributions.
The couses offered here are HEPS i.e History, Economics, Political Science and Sociology.
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
              <h3>Dr. B R Shivanna (Economics)</h3>
              <span>Head of Library Dept. - GHS</span>

              <p>Education - MA, B.Ed</p>
              <p>Date of Joining - 08/01/2018</p>
              <p>Teaching Experience - 6 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties3} alt="faculties" />
            <div className="profile-info">
              <h3>Manjula V R (Political Science)</h3>
              <span>Head of Tourism Dept. - PU College</span>

              <p>Education - MA, M. Phil</p>
              <p>Date of Joining - 05/07/2007</p>
              <p>Teaching Experience - 17 Years</p>
            </div>
          </div>

          <div className="committee-card">
            <img src={Faculties4} alt="faculties" />
            <div className="profile-info">
              <h3>Dr Gouthami J K (Sociology)</h3>
              <span>Head of NSS Club Dept. - PU College</span>

              <p>Education - MA, B.Ed</p>
              <p>Date of Joining - 01/07/2013</p>
              <p>Teaching Experience - 11 Years</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Arts