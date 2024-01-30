import React from "react";
import overview from "../../../Assets/Academic Page/Overview.jpg";
import President from "../../../Assets/About/CDCP.png";
import VicePresident from "../../../Assets/About/CDCVP.png";
import Treasurer from "../../../Assets/About/CDCT.png";

import "../About.css";

const Committee = () => {
  return (
    <>
      <div className="box-heading">
        <img src={overview} alt="scholarship" />
        <div>
          <h1 className="main-heading"> College Development Committe </h1>
          <p>
            Welcome to our College Development committee Page! Committed to 
            advancing academic excellence and infrastructure enhancements,
            our committee stands as a beacon of strategic planning and vision.
            This page serves as a gateway to understanding the collaborative 
            efforts, initiatives, and transformative projects that propel the
            institution towards continual growth and excellence. 
          </p>
        </div>
      </div>

      <div className="committee-section">
        <div>
          <h1 className="main-heading">President</h1>

          <div className="committee-card">
            <img src={President} alt="president" />
            <div className="profile-info">
              <h3>Shri S R Vishwanath</h3>
              <span>
                About - MLA, Yelahanka | Member, TTD Board | Former Chairman,
                Bangalore Development Authority (BDA)
              </span>

              <p>
                Shri S R Vishwanath, a seasoned public servant, currently
                represents Yelahanka as an MLA. With a rich background, he
                serves on the TTD Board and has previously chaired the Bangalore
                Development Authority (BDA). His dedication to community welfare
                and extensive experience marks him as a key contributor to
                regional development
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="main-heading">Vice President</h1>
          <div className="committee-card">
            <img src={VicePresident} alt="vice president" />
            <div className="profile-info">
              <h3>R M Somashekar Reddy</h3>
              <span>About - Businessman</span>

              <p>
                R M Somashekar Reddy is a dynamic businessman, bringing a wealth
                of entrepreneurial expertise to his role as Vice-president. With
                a keen business acumen, he contributes valuable insights to the
                organization. Mr. Reddy's commitment to excellence and strategic
                vision makes him an integral part of the team, ensuring a
                forward-looking approach to achieve shared goals
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="main-heading">Treasurer</h1>
          <div className="committee-card">
            <img src={Treasurer} alt="Treasurer" />
            <div className="profile-info">
              <h3>RC Rajendra Kumar</h3>
              <span>About - B.Pharm, Social Worker</span>

              <p>
                RC Rajendra Kumar, holding a degree in B.Pharm, is not only a
                skilled professional but also a dedicated social worker. As
                Treasurer, he blends pharmaceutical knowledge with a passion for
                social causes. Mr. Kumar's commitment to community service adds
                a unique perspective to his role, fostering a balance between
                financial stewardship and a compassionate approach to community
                well-being
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Committee;
