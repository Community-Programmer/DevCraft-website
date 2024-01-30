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
            Welcome to our Admission Page! Explore exciting opportunities and
            embark on a journey of academic excellence. Discover the key to
            unlocking your potential and join a community dedicated to fostering
            growth, knowledge, and success. Your educational adventure begins
            here!
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
