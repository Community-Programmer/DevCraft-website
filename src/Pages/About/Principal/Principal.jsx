import React from "react";
import Principal1 from "../../../Assets/About/PC.png";
import Principal2 from "../../../Assets/About/PHS.png";
import Principal3 from "../../../Assets/About/PPS.png";

const Principal = () => {
  return (
    <>
      <div className="committee-section">
        <div>
          <h1 className="main-heading">Incharge Pricipal Of PU college</h1>
          <div className="committee-card">
            <img src={Principal1} alt="principal" />
            <div className="profile-info">
              <h3>V R Manjula</h3>
              <span>
                Edu - M.A,M.Phil | Teaching experience - 17 years | Joining date
                - 05/11/2007
              </span>

              <p>
                V R Manjula, the Incharge Principal of the PU College, holds an
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
              <h3>Kantaruju B G</h3>
              <span>
                Edu - MSc, M.Ed, KES | Teaching experience - 17 years | Joining
                date - 15/06/2007
              </span>

              <p>
                Kantaruju B G, the Principal of the High School, holds an MSc,
                MEd, and KES with 17 years of teaching experience. Since joining
                on 15/06/2007, he has been a dedicated educator, shaping the
                academic journey of students under his guidance
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="main-heading">Incharge Pricipal Of Primary School</h1>
          <div className="committee-card">
            <img src={Principal3} alt="principal" />
            <div className="profile-info">
              <h3>SREENIVASA G</h3>
              <span>
                Edu - CPEd, Kan& Eng Sr typing, PUC | Teaching experience - 29
                years | Joining date - 26/07/1994
              </span>

              <p>
                SREENIVASA G, Incharge Principal of the Primary School, holds
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
