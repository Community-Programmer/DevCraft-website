import React from "react";
import arts from "../../../../Assets/Department/College.jpg";

import artFaculties from "../../../../Data/Faculties/PU College/Arts";

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
          Immerse yourself in our holistic arts program, encompassing
          literature, visual arts, performing arts, and cultural studies.
          Cultivate creativity and critical thinking, preparing for a future in
          diverse artistic expressions and cultural contributions. The couses
          offered here are HEPS i.e History, Economics, Political Science and
          Sociology.
        </p>
      </div>

      <h1 className="main-heading">Faculties</h1>
      <div className="faculties-card-container">
        {artFaculties.map((data, index) => {
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

export default Arts;
