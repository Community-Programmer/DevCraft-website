import React from "react";
import overview from "../../../Assets/Academic Page/Overview.jpg";

import ChairpersonImg from "../../../Assets/About/CDCP.png";

const Chairperson = () => {
  return (
    <>
      <div className="box-heading">
        <img src={overview} alt="scholarship" />
        <div>
          <h1 className="main-heading">Chairperson</h1>
          <p>
            Welcome to the Chairperson Page!  This page is a testament
            to Shri S R Vishwanath's unwavering commitment, expertise,
            and passion for fostering an environment of innovation, 
            inclusivity, and progress. Join us in celebrating the leadership
            that shapes the future of education at Rajanukunte, setting the 
            course for a transformative and enriching educational experience for all
          </p>
        </div>
      </div>

      <div className="committee-section">

      
      <div className="committee-card">
        <img src={ChairpersonImg} alt="president" />
        <div className="profile-info">
          <h3>Shri S R Vishwanath</h3>
          <span>
            About - MLA, Yelahanka | Member, TTD Board | Former Chairman,
            Bangalore Development Authority (BDA)
          </span>

          <p>
            Singanayakanahalli Ramaiah Vishwanath is an Indian Politician who is
            current MLA from Yelahanka constituency since 25 May 2008. He is
            former Chairman of Bangalore Development Authority and presently
            Member of Tirumala Tirupati Devasthanams (TTD) Board. He is a social
            worker and the chairperson of Government school and PU college of
            Rajanukunte. He is the founder of Vishwa Vani Foundation.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chairperson;
