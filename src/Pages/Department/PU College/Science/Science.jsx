import React from "react";

import science from "../../../../Assets/Department/College.jpg";

import scienceFaculties from "../../../../Data/Faculties/PU College/Science";

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
          Embark on a comprehensive scientific journey with our PCMB and PCMCS
          courses. The PCMB program integrates Physics, Chemistry, Mathematics,
          and Biology, offering a solid foundation for diverse scientific
          careers. Meanwhile, PCMCS combines Physics, Chemistry, Mathematics,
          and Computer Science, providing a well-rounded understanding of both
          physical sciences and computational principles. These courses prepare
          students for a future in science and technology, fostering a strong
          theoretical base alongside practical applications.
        </p>
      </div>

      <h1 className="main-heading">Faculties</h1>
      <div className="faculties-card-container">
        {scienceFaculties.map((data, index) => {
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

export default Science;
