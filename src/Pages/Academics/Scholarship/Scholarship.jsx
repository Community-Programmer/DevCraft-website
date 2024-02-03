import React from "react";
import "../Academics.css";
import scholarship from "../../../Assets/Scholarship/28466.jpg";

const Scholarship = () => {
  return (
    <>
      <div className="box-heading">
        <img src={scholarship} alt="scholarship" />
        <div>
          <h1 className="main-heading">
            Government Institution, RajanuKunte Scholarship Program
          </h1>
          <p>
            Welcome to the Government Institution, RajanuKunte Scholarship
            Program, where we believe in empowering aspiring minds and fostering
            academic excellence. Our commitment to education drives us to
            provide opportunities for outstanding individuals who demonstrate
            exceptional skills, leadership qualities, and a strong dedication to
            their academic pursuits
          </p>
        </div>
      </div>
      <div className="scholarship-section">
        <div className="home-card">
          <h3>State Scholarship Portal (SSP)</h3>
          <p>
            The State Scholarship Portal (SSP) is a platform designed by the
            Government of Karnataka to provide scholarships to Karnataka
            domicile students. These scholarships are intended to offer
            financial support to meritorious students regardless of their
            category, caste, or gender, enabling them to pursue higher education
          </p>
          <button className="btn" onClick={()=>{ window.open('https://ssp.postmatric.karnataka.gov.in/','_blank')}}>
            Apply Now <i class="fa-solid fa-caret-right " />
          </button>
        </div>

        <div className="home-card">
          <h3>National Scholarship Portal (NSP)</h3>
          <p>
            NSP is a web based application that provides single stop solution
            for end- to-end scholarship process right from submission of student
            application, verification, sanction and disbursal to end beneficiary
            for different types scholarships provided by the various
            Ministries/Department of Government of India.
          </p>
          <button className="btn" onClick={()=>{ window.open('https://scholarships.gov.in/','_blank')}}>
            Apply Now <i class="fa-solid fa-caret-right " />
          </button>
        </div>

        <div className="home-card">
          <h3>Lions Club Scholarship</h3>
          <p>
            The Lions Clubs is a service organization that does volunteering and
            fundraising efforts to give back to those in their communities who
            need a bit of extra help. Moreover, they provide an amazing Lions
            Club Scholarship that allows individuals to attend school without as
            much of a financial worry
          </p>
          <button className="btn" onClick={()=>{ window.open('https://www.lionsclubs.org/en/start-our-approach/grant-types','_blank')}}>
            Apply Now <i class="fa-solid fa-caret-right " />
          </button>
        </div>

        <div className="home-card">
          <h3>Panchayat Scholarship</h3>
          <p>
            Panchayat-Rajankunte is dedicated to supporting the education of
            students in the community. As part of its commitment to fostering
            academic excellence and has implemented a financial assistance
            program for students in schools and colleges within its
            jurisdiction. Panchayat understands the importance of education
          </p>
          <button className="btn" onClick={()=>alert('Contact School for more information')}>
            Apply Now <i class="fa-solid fa-caret-right " />
          </button>
        </div>

        <div className="home-card" onClick={()=>alert('Contact School for more information')}>
          <h3>Educational Materials by MLA Shri S R Vishwanath</h3>
          <p>
            Shri S R Vishwanath, a dedicated individual, has taken a
            initiative to empower students through the Educational
            Material. Recognizing the importance of quality
            educational resources, he is committed to providing
            essential study materials to students in need.
          </p>
          <button className="btn">
            Apply Now <i class="fa-solid fa-caret-right " />
          </button>
        </div>
      </div>
    </>
  );
};

export default Scholarship;
