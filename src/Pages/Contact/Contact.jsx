import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="heading">
        <h1 className="main-heading">Contact us</h1>
        <span>
          Have questions or need assistance? Connect with us! Our team is here
          to support you in every step of your educational journey
        </span>
      </div>

      <div className="contact-section">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=5HF5+++FMP,+Unnamed+Road,+Rajanukunte,+Bangalore,+Karnataka+560064&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="map"
        />

        <div className="contact-information">
          <div className="contact-upper">
            <div>
              <i class="fa-solid fa-location-dot fa-2xl" />
              <h3>Reach Us</h3>
              <p>
                5HF5 + FMP, Main Road, Rajanukunte, <br /> Bangalore, Karnataka
                560064
              </p>
            </div>
            <div>
              <i class="fa-solid fa-address-book fa-2xl" />
              <div>
                <h3>Contact Us</h3>
                <p>Board of Governors</p>
                <p>Mr. Rajendra Kumar R C</p>
                <p>+91 99017 73645</p>
              </div>
            </div>
          </div>

          <h3 className="main-heading">Contact Respective Branch</h3>
          <div className="contact-down">
            <div>
              <i class="fa-solid fa-phone fa-2xl" />
              <h3>Govt. PU College</h3>
              <p>Mrs. V R Manjula </p>
              <p>+91 96112 29966</p>
            </div>

            <div>
              <i class="fa-solid fa-phone fa-2xl" />
              <h3>Govt. High School</h3>
              <p>Mr. Kantaraju B G</p>
              <p>+91 98459 17244</p>
            </div>
            <div>
              <i class="fa-solid fa-phone fa-2xl" />
              <h3>Govt. Primary School</h3>
              <p>Mr Shreenivasa G</p>
              <p>+91 72046 02103</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
