import React from "react";

import primaryschool from "../../../Assets/Department/primary school.jpg";

import primarySchoolFaculties from "../../../Data/Faculties/Primary School/PrimarySchool";

const Primaryschool = () => {
  return (
    <>
      <div className="box-heading">
        <img src={primaryschool} alt="primaryschool" />
        <div>
          <h1 className="main-heading">Primary School</h1>
          <p>
            Welcome to our Primary School Department Page! This serves as a
            portal to the vibrant world of learning, where curiosity is sparked,
            and foundational skills are nurtured. Explore our commitment to
            providing a stimulating and safe environment, dedicated educators,
            and a curriculum designed to ignite the intellectual and creative
            potential of every young learner
          </p>
        </div>
      </div>

      <div className="text-container">
        <h1 className="main-heading">About</h1>
        <p>
          We take pride in providing quality education and fostering an
          inclusive learning environment. As a distinguished government school
          in Karnataka, we are committed to shaping the future of our students
          by offering a holistic educational experience. With a dedicated team
          of experienced educators, we strive for academic excellence by
          offering a well-rounded curriculum that blends traditional wisdom with
          modern teaching methodologies. Our focus is on equipping students with
          critical thinking, problem-solving, and communication skills. Beyond
          academics, we encourage students to explore their interests through a
          range of cultural and extracurricular activities. We actively engage
          with parents, guardians, and the local community to create a
          collaborative and supportive network that enhances the overall
          educational experience
        </p>
      </div>

      <h1 className="main-heading">Faculties</h1>
      <div className="faculties-card-container">
        {primarySchoolFaculties.map((data, index) => {
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

export default Primaryschool;
