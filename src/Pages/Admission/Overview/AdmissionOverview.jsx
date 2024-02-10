import React from "react";
import "../Admission.css";
import overview from "../../../Assets/Academic Page/Overview.jpg";
import CountUp from "react-countup";

const AdmissionOverview = () => {
  return (
    <>
      <div className="box-heading">
        <img src={overview} alt="scholarship" />
        <div>
          <h1 className="main-heading">Admission</h1>
          <p>
            Welcome to our Admission Page! Explore exciting opportunities and
            embark on a journey of academic excellence. Discover the key to
            unlocking your potential and join a community dedicated to fostering
            growth, knowledge, and success. Your educational adventure begins
            here!
          </p>
        </div>
      </div>

      <div class="text-container">
        <h2> Admission Overview </h2>

        <p>
          The admission process for government schools in Karnataka typically
          begins with notifications from the State Education Department,
          outlining eligibility criteria and application procedures. Interested
          candidates, usually residents of Karnataka or specific localities,
          submit filled application forms with required documents.
        </p>

        <p>
          The selection process, often involving a lottery system, may
          prioritize economically weaker sections. Some schools may charge a
          nominal admission fee, and selected candidates undergo a verification
          process.
        </p>

        <p>
          Admitted students should be familiar with school timings, curriculum,
          and any specific rules. It is essential to check with the official
          education department or specific schools for the latest and detailed
          information.
        </p>

        <h3>The Government PU college, Rajanukunte</h3>

        <p>
          The college offers diverse courses in Arts, Commerce, and Science.
        </p>

        <div className="counter-section">
          <div className="counter">
            <h1>
              <CountUp end={388} enableScrollSpy scrollSpyOnce />
              <span className="plus">+</span>
              <p>Students</p>
            </h1>
          </div>

          <div className="counter">
            <h1>
              <CountUp end={11} enableScrollSpy scrollSpyOnce />
              <span className="plus">+</span>
              <p>Faculty</p>
            </h1>
          </div>

          <div className="counter">
            <h1>
              <CountUp end={3} enableScrollSpy scrollSpyOnce />
              <span className="plus">+</span>
              <p>Courses</p>
            </h1>
          </div>
        </div>

        <p>Courses - Science(PCMB/PCMC)  Commerce(HEBA, CEBA) Arts(HEPS) </p>

        <h3>The Government High School, Rajanukunte</h3>
        <p>This institution provides education for 9th and 10th grades in both Kannada and English mediums.</p>
      
        <div className="counter-section">
          <div className="counter">
            <h1>
              <CountUp end={197} enableScrollSpy scrollSpyOnce />
              <span className="plus">+</span>
              <p>Students</p>
            </h1>
          </div>

          <div className="counter">
            <h1>
              <CountUp end={9} enableScrollSpy scrollSpyOnce />
              <span className="plus">+</span>
              <p>Faculty</p>
            </h1>
          </div>
        </div>
      

        <h3>The Government Primary School, Rajanukunte</h3>
        <p>It caters to students from Std 1 to 8. The medium of instruction for Std 1-5 is Kannada, while for 6th-8th, it extends to both Kannada and English.</p>
      
        <div className="counter-section">
          <div className="counter">
            <h1>
              <CountUp end={357} enableScrollSpy scrollSpyOnce />
              <span className="plus">+</span>
              <p>Students</p>
            </h1>
          </div>

          <div className="counter">
            <h1>
              <CountUp end={7} enableScrollSpy scrollSpyOnce />
              <span className="plus">+ Guest Faculty</span>
              <p>Faculty</p>
            </h1>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default AdmissionOverview;
