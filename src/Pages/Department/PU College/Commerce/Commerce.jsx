import React from "react";

import commerce from "../../../../Assets/Department/College.jpg";

import commerceFaculties from "../../../../Data/Faculties/PU College/Commerce";

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
          Discover a well-rounded commerce program, delving into finance,
          accounting, and business management. HEBA integrates history,
          economics, business studies, and accountancy, offering a humanities
          and commerce blend. In CEBA, explore computer science, Economics,
          Business Studies, Accountancy , preparing for success in the dynamic
          business landscape. These courses equip students for diverse careers,
          providing a strong foundation for professional growth.
        </p>
      </div>

      <h1 className="main-heading">Faculties</h1>
      <div className="faculties-card-container">
        {commerceFaculties.map((data, index) => {
          return (
            <div key={index} className="committee-card">
              <img src={data.image} alt="faculties" />
              <div className="profile-info">
                <h3>{data.name}</h3>
                <span>{data.role}</span>

                <p>{data.education}</p>
                <p>{data.joiningDate}</p>
                <p>{data.experience}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Commerce;
