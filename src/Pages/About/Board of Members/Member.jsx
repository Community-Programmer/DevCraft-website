import React from "react";
import overview from "../../../Assets/Academic Page/Overview.jpg";

import Member1 from "../../../Assets/About/BOM1.png";
import Member2 from "../../../Assets/About/BOM2.png";
import Member3 from "../../../Assets/About/BOM3.png";
import Member4 from "../../../Assets/About/BOM4.png";

const Member = () => {
  return (
    <>
      <div className="box-heading">
        <img src={overview} alt="scholarship" />
        <div>
          <h1 className="main-heading"> Board of Members </h1>
          <p>
            Welcome to our Boards of Member page! It provides insight into 
            the dynamic personalities and diverse expertise of our board
            members, showcasing their unwavering dedication to fostering
            an environment of learning, inclusivity, and progress. Join 
            us in acknowledging and appreciating the leadership that
            propels our institution toward new heights of success and distinction
          </p>
        </div>
      </div>

      <div className="committee-section">
        <div className="committee-card">
          <img src={Member1} alt="member" />
          <div className="profile-info">
            <h3>Shri M Manjunath </h3>
            <span>Edu - BA</span>

            <p>
              Shri M Manjunath holds a Bachelor of Arts degree, reflecting his
              educational background. His pursuit of a Bachelor's degree
              underscores a foundational understanding of various subjects,
              contributing to a well-rounded knowledge base
            </p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Member2} alt="member" />
          <div className="profile-info">
            <h3>Shri Shivanna N C</h3>
            <span>Edu - MA, M.Phil Rtd.Principal</span>

            <p>
              Shri Shivanna N C is an accomplished individual with a
              distinguished academic background, holding a Master's degree (MA)
              and a Master of Philosophy (M.Phil), reflecting a dedication to
              higher learning and understanding of his field.
            </p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Member3} alt="member" />
          <div className="profile-info">
            <h3>Shri M MohanKumar</h3>
            <span>Edu - Dip civil</span>

            <p>
              Shri M MohanKumar holds a Diploma in Civil Engineering,
              emphasizing his specialized education in the field and
              establishing a strong foundation for contributions to construction
              and infrastructure projects.
            </p>
          </div>
        </div>

        <div className="committee-card">
          <img src={Member4} alt="member" />
          <div className="profile-info">
            <h3>Shri M Thimma Reddy </h3>
            <span>Edu -  BSC, B.Ed</span>

            <p>
              Shri M Thimma Reddy holds a BSc and BEd, reflecting a well-rounded
              educational background. His qualifications combine scientific
              knowledge and educational expertise, making him proficient in
              diverse roles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
