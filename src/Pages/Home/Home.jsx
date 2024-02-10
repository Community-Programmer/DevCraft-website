import React, { useState } from "react";
import "./Home.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LuSchool } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiMaterialsScience } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import eventData from "../../Data/Event";
import CountUp from "react-countup";

import video from "../../Assets/Home Video/video.mp4";

import vm from '../../Assets/Home/6152022_general2_13.jpg'

const Home = () => {
  const imageContext = require.context(
    "../../Assets/Home Slideshow",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const images = imageContext.keys().map(imageContext);

  const navigate = useNavigate();

  const handleBtnClick = (link) => {
    navigate(link);
  };
  const [isPaused, setIsPaused] = useState(false);

  const pauseScrolling = () => {
    setIsPaused(true);
  };

  const resumeScrolling = () => {
    setIsPaused(false);
  };
  const closeHeadline = () => {
    document.querySelector(".nav-headline").style.display = "none";
  };

  const settings = {
    fade: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
  };

  return (
    <>
      {/* Horizontal Scroll Effect */}

      <div className="nav-headline">
        <div
          className={`scroll-container ${isPaused ? "paused" : ""}`}
          onMouseOver={pauseScrolling}
          onMouseOut={resumeScrolling}
        >
          <span>Welcome to Government Institution, RajanuKunte</span>
          <span>
            <Link to="/fee">Fee structure</Link>
          </span>
          <span>
            <Link to="/timetable">Timetable</Link>
          </span>
          <span>
            <Link to="/gallery-images">Glimpses</Link>
          </span>
          <span>
            <Link to="/facilities">Facilities</Link>{" "}
          </span>
        </div>
        <div class="close-button" onClick={closeHeadline}>
          x
        </div>
      </div>

      <div className="home-slideshow">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image">
              <img src={image} alt="slideshow" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="home-section-card-container">
        <div className="info-card" data-aos="zoom-in" data-aos-duration="1000">
          <LuSchool fontSize={60} color="#192f59" />
          <div className="info-text">
            <h4>Campus</h4>
            <p>To Nurture Greatness</p>
          </div>
        </div>

        <div className="info-card" data-aos="zoom-in" data-aos-duration="1000">
          <GiMaterialsScience fontSize={60} color="#192f59" />
          <div className="info-text">
            <h4>Innovation</h4>
            <p>To develop future</p>
          </div>
        </div>

        <div className="info-card" data-aos="zoom-in" data-aos-duration="1000">
          <FaComputer fontSize={60} color="#192f59" />
          <div className="info-text">
            <h4>Facilities</h4>
            <p>Dynamic hub</p>
          </div>
        </div>

        <div className="info-card" data-aos="zoom-in" data-aos-duration="1000">
          <HiOutlineAcademicCap fontSize={60} color="#192f59" />
          <div className="info-text">
            <h4>Academics</h4>
            <p>Leading the pack</p>
          </div>
        </div>
      </div>

      <h1 className="main-heading">History</h1>
      <div className="home-section">
        <div className="home-card-container">
          <div
            className="home-card"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <h3>The Government PU college, Rajanukunte</h3>
            <p>
              The Government PU College, Rajanukunte, Bangalore, Karnataka, has
              been a part of the educational landscape since 2020. Encompassing
              3.15 acres, it is currently undergoing a transformative project
              supported by Manyata Embassy, with an investment of 4 crores. The
              college offers diverse courses in Arts, Commerce, and Science.
            </p>
          </div>

          <div
            className="home-card"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <h3>The Government High School, Rajanukunte</h3>
            <p>
              Established in 2009, the Government High School in Rajanukunte,
              Bangalore, Karnataka, sprawls across 4.5 acres. This institution
              provides education for 9th and 10th grades in both Kannada and
              English mediums.
            </p>
          </div>

          <div
            className="home-card"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <h3>The Government Primary School, Rajanukunte</h3>
            <p>
              The Government Primary School in Rajanukunte, Karnataka, traces
              its roots back to 1945. Nestled on a 3-acre expanse, it caters to
              students from Std 1 to 8. The medium of instruction for Std 1-5 is
              Kannada, while for 6th-8th, it extends to both Kannada and
              English.
            </p>
          </div>
        </div>
      </div>
      <h1 className="main-heading">Counter</h1>
      <div className="counter-section">
        <div className="counter">
          <h1>
            <CountUp end={940} enableScrollSpy scrollSpyOnce />
            <span className="plus">+</span>
            <p>Students</p>
          </h1>
        </div>

        <div className="counter">
          <h1>
            <CountUp end={25} enableScrollSpy scrollSpyOnce />
            <span className="plus">+</span>
            <p>Faculty</p>
          </h1>
        </div>

        <div className="counter">
          <h1>
            <CountUp end={4} enableScrollSpy scrollSpyOnce />
            <span className="plus">+</span>
            <p>Labs</p>
          </h1>
        </div>
      </div>

      <div className="home-section" data-aos="zoom-in"  data-aos-duration="1000">
        
      <h1 className="main-heading">Vision & Mission</h1>
        <div class="container">
        <img src={vm} alt="vission" />
          <div class="box">
            <input
              type="radio"
              class="tab-toggle"
              name="tab-toggle"
              id="tab1"
              checked
            />
            <input
              type="radio"
              class="tab-toggle"
              name="tab-toggle"
              id="tab2"
            />
         

            <ul class="tab-list">
              <li class="tab-item">
                <label class="tab-trigger" for="tab1">
                  Vision
                </label>
              </li>
              <li class="tab-item">
                <label class="tab-trigger" for="tab2">
                  Mission
                </label>
              </li>
            </ul>

            <div class="tab-container">
              <div class="tab-content">
                <ul>
                  <li>To provide quality education to students coming from all strata of the society. To shape the life of each student for a better future</li>
                  <li> Fostering a sense of community by promoting collaboration and involvement of students, parents, and educators in the educational journey</li>
                </ul>
              </div>
              <div class="tab-content">
               <ul>
                <li>To create technologically upgraded institution which caters to the educational standards of today's times</li>
                <li>To create a strong and transformative technical educational environment in which fresh ideas, moral principles, research and excellence nurture</li>
                
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <h1 className="main-heading">Events</h1>
        <span>
          Dive into the joy of education with us! Join our school events and
          experience the magic of learning in a vibrant community
        </span>

        {/*Event Data */}
        <div className="home-card-container">
          {eventData.slice(0, 3).map((data, index) => {
            return (
              <div
                key={index}
                className="home-card"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={data.image} alt="event" />
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
        <button className="btn" onClick={() => handleBtnClick("/events")}>
          View More
        </button>
      </div>

      <div className="home-section">
        <h1 className="main-heading">
          The Best Institution For Education of your child
        </h1>
        <span>Educating Students For Success In A Changing World</span>

        <div
          class="video-container"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;
