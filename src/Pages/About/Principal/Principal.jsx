import React from "react";
import Principal1 from "../../../Assets/About/PC.png";
import Principal2 from "../../../Assets/About/PHS.jpg";
import Principal3 from "../../../Assets/About/PPS.jpg";


import principal from "../../../Assets/About/principal.jpg";

const Principal = () => {
  return (
    <>
     <div className="box-heading">
        <img src={principal} alt="principal" />
        <div>
          <h1 className="main-heading"> Principals </h1>
          <p>
            Welcome to the Principals page! This page provides a glimpse
            into the wealth of experience, dedication, and vision that 
            brings to our institution. As a  leader,  is committed
             to fostering a nurturing learning environment, encouraging
              innovation, and ensuring the development of every
              student. Join us in celebrating the leadership that shapes 
              the educational journey at Rajanukunte, where  inspires
              students towards a future of success and accomplishment
          </p>
        </div>
      </div>

      <div className="committee-section">
        <div>
          <h1 className="main-heading"> Incharge Principal Of PU college </h1>
          <div className="committee-card">
            <img src={Principal1} alt="principal" />
            <div className="profile-info">
              <h3>Mrs. V R Manjula</h3>
              <span>
                Edu - M.A,M.Phil | Teaching experience - 17 years | Joining date
                - 05/11/2007
              </span>

              <p>
                Mrs. V R Manjula, the Incharge Principal of the PU College, holds an
                M.A and M.Phil, with 17 years of teaching experience. She has
                been a dedicated part of the institution since joining on
                05/11/2007, guiding students on their educational journey
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="main-heading">Principal Of High school</h1>
          <div className="committee-card">
            <img src={Principal2} alt="principal" />
            <div className="profile-info">
              <h3>Mr. Kantaruju B G</h3>
              <span>
                Edu - MSc, M.Ed, KES | Teaching experience - 17 years | Joining
                date - 15/06/2007
              </span>

              <p>
                Mr. Kantaruju B G, the Principal of the High School, holds an MSc,
                MEd, and KES with 17 years of teaching experience. Since joining
                on 15/06/2007, he has been a dedicated educator, shaping the
                academic journey of students under his guidance
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="main-heading">Incharge Principal Of Primary School</h1>
          <div className="committee-card">
            <img src={Principal3} alt="principal" />
            <div className="profile-info">
              <h3>Mr. Sreenivasa G</h3>
              <span>
                Edu - CPEd, Kan& Eng Sr typing, PUC | Teaching experience - 29
                years | Joining date - 26/07/1994
              </span>

              <p>
                Mr.Sreenivasa G, Incharge Principal of the Primary School, holds
                CPEd, Kan & Eng Sr Typing, PUC, with 29 years of teaching. Since
                26/07/1994, he has played a key role in shaping young learners'
                education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
