import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo/logo.png";
import { Link, Outlet } from "react-router-dom";

//Icons for Top Navbar
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { FaCaretDown } from "react-icons/fa";

// Icons for Academic Submenu
import { FaBook } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";

//Icons for Admission Submenu
import { FaMoneyBill } from "react-icons/fa";

// Icons for Department
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";

//Icons for Gallery
import { FaImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

// Icons for About
import { FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const [isNavHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
      if (window.scrollY === 0) {
        setNavHidden(false);
      }
      else if (lastScrollY < window.scrollY) {
        setNavHidden(false);
      } else {
        setNavHidden(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navClassName = isNavHidden ? 'nav--visible' : '';


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (submenuId) => {
    setOpenSubmenu((prevSubmenu) =>
      prevSubmenu === submenuId ? null : submenuId
    );
  };

  // Use separate refs for each submenu button
  const academicsSubmenuRef = useRef(null);
  const departmentSubmenuRef = useRef(null);
  const admissionSubmenuRef = useRef(null);
  const aboutSubmenuRef = useRef(null);
  const gallerySubmenuRef = useRef(null);
  const topNavSubmenuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !academicsSubmenuRef.current?.contains(event.target) &&
        !admissionSubmenuRef.current?.contains(event.target) &&
        !departmentSubmenuRef.current?.contains(event.target) &&
        !aboutSubmenuRef.current?.contains(event.target) &&
        !gallerySubmenuRef.current?.contains(event.target) &&
        !topNavSubmenuRef.current?.contains(event.target) &&
        !document.querySelector(".dropbtn").contains(event.target)
      ) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,kn",
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    // Check if the script has already been added
    if (!document.querySelector("#google-translate-script")) {
      // Create script element
      var addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      // Append script to body
      document.body.appendChild(addScript);
      // Define googleTranslateElementInit function
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  return (
    <>
      <div className="top-nav">
        <div className="info-start">
          <ul>
            <div id="google_translate_element"></div>
            <li>
              
              <FaPhone /> +91 9901773645
            </li>
          </ul>
        </div>
        <div class="info-end">
          <ul className="top-nav-links">  
            <li className="quickLinks-submenu">
            <button
                ref={topNavSubmenuRef}
                class="topDropbtn"
                onClick={() => toggleSubmenu("quicklinks")}
              >
                Quick Links <FaCaretDown fontSize={18} />
              </button>
              <ul
                className={`dropdown-content ${
                  openSubmenu === "quicklinks" ? "submenu" : ""
                }`}
              >
                <li>
                  <Link to="https://kseab.karnataka.gov.in/english" target='_blank'>
                  KSEAB
                  </Link>
                </li>
                <li>
                  <Link to="https://pue.karnataka.gov.in/" target='_blank'>
                  DPUE
                  </Link>
                </li>
                <li>
                  <Link to="https://cetonline.karnataka.gov.in/kea/" target='_blank'>
                  KEA
                  </Link>
                </li>
                <li>
                  <Link to="https://ssp.postmatric.karnataka.gov.in/" target='_blank'>
                  SSP
                  </Link>
                </li>
                <li>
                  <Link to="https://scholarships.gov.in/" target='_blank'>
                  NSP
                  </Link>
                </li>
                <li>
                  <Link to="https://neet.nta.nic.in/" target='_blank'>
                  NEET
                  </Link>
                </li>
                <li>
                  <Link to="https://jeemain.nta.ac.in/" target='_blank'>
                  JEE
                  </Link>
                </li>
               
              </ul>
            </li>
            <li>
              <Link to="/academic-overview"> Overview </Link>
            </li>
            <li>
              
              <Link to="/contact"> Help </Link>
            </li>
            <li className="cta-button">
              <Link to="https://maps.app.goo.gl/1ZJ5kq9pNziA2jA77" target="_blank">Locate us</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav id="navbar" className={navClassName}>
        <div class="nav-container-1">
          <div className="logo-container">
            <div class="logo">
              <Link to="/">
                <img src={logo} alt="collegeLogo" />
              </Link>
            </div>
          
          <div className="name-text">
          <Link to='/'>
            <p> ಸರ್ಕಾರಿ ಶಾಲೆಗಳು ಮತ್ತು ಪಿಯು ಕಾಲೇಜು, ರಾಜಾನುಕುಂಟೆ </p>
            <p> Government Schools and PU College, Rajanukunte </p>
          </Link>
          </div>
          </div>
          {isOpen ? (
            ""
          ) : (
            <IoMenu
              className="menu-icon"
              onClick={toggleNavbar}
              fontSize={50}
            />
          )}
        </div>

        <div className={`nav-container-2 ${isOpen ? "active" : ""}`}>
          <IoClose
            className="close-menu-icon"
            onClick={toggleNavbar}
            fontSize={50}
          />
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleNavbar}>
                
                Home
              </Link>
            </li>
            <li>
              <button
                ref={aboutSubmenuRef}
                class="dropbtn"
                onClick={() => toggleSubmenu("about")}
              >
                About <FaCaretDown fontSize={18} />
              </button>
              <ul
                className={`dropdown-content ${
                  openSubmenu === "about" ? "submenu" : ""
                }`}
              >
                <li>
                  <Link to="/chairperson" onClick={toggleNavbar}>
                    <RiUserStarFill /> About Chairperson
                  </Link>
                </li>
                <li>
                  <Link to="/development-committe" onClick={toggleNavbar}>
                    <FaUsers /> College Development commite
                  </Link>
                </li>
                <li>
                  <Link to="/board-members" onClick={toggleNavbar}>
                    <ImProfile /> Board of Members
                  </Link>
                </li>
                <li>
                  <Link to="/principal" onClick={toggleNavbar}>
                    <FaUser /> Principals
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                ref={admissionSubmenuRef}
                class="dropbtn"
                onClick={() => toggleSubmenu("admission")}
              >
                Admission <FaCaretDown fontSize={18} />
              </button>
              <ul
                className={`dropdown-content ${
                  openSubmenu === "admission" ? "submenu" : ""
                }`}
              >
                <li>
                  <Link to="/admission-overview" onClick={toggleNavbar}>
                    <FaBook /> Admission Overview
                  </Link>
                </li>
                <li>
                  <Link to="/fee" onClick={toggleNavbar}>
                    <FaMoneyBill /> Fee Structure
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                ref={academicsSubmenuRef}
                class="dropbtn"
                onClick={() => toggleSubmenu("academics")}
              >
                Academics <FaCaretDown fontSize={18} />
              </button>
              <ul
                className={`dropdown-content ${
                  openSubmenu === "academics" ? "submenu" : ""
                }`}
              >
                <li>
                  <Link to="/academic-overview" onClick={toggleNavbar}>
                    <FaBook /> Academic Overview
                  </Link>
                </li>
                <li>
                  <Link to="/timetable" onClick={toggleNavbar}>
                    <FaRegCalendarDays /> Timetables
                  </Link>
                </li>
                <li>
                  <Link to="/scholarship" onClick={toggleNavbar}>
                    <SiGooglescholar /> Scholarships
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                ref={departmentSubmenuRef}
                class="dropbtn"
                onClick={() => toggleSubmenu("department")}
              >
                Department <FaCaretDown fontSize={18} />
              </button>
              <ul
                className={`dropdown-content ${
                  openSubmenu === "department" ? "submenu" : ""
                }`}
              >
                <li>
                  <Link to="/pu-college" onClick={toggleNavbar}>
                    <BiSolidSchool /> Pu College
                  </Link>
                </li>
                <li>
                  <Link to="/high-school" onClick={toggleNavbar}>
                    <FaSchool /> High School
                  </Link>
                </li>
                <li>
                  <Link to="/primary-school" onClick={toggleNavbar}>
                    <FaSchoolFlag /> Primary School
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/facilities" onClick={toggleNavbar}>
                
                Facilities
              </Link>
            </li>
            <li>
              <button
                ref={gallerySubmenuRef}
                class="dropbtn"
                onClick={() => toggleSubmenu("gallery")}
              >
                Gallery <FaCaretDown fontSize={18} />
              </button>
              <ul
                className={`dropdown-content ${
                  openSubmenu === "gallery" ? "submenu" : ""
                }`}
              >
                <li>
                  <Link to="/gallery-images" onClick={toggleNavbar}>
                    <FaImage /> School Images
                  </Link>
                </li>
                <li>
                  <Link to="/gallery-videos" onClick={toggleNavbar}>
                    <FaVideo /> School Videos
                  </Link>
                </li>
                <li>
                  <Link to="/events" onClick={toggleNavbar}>
                    <MdEmojiEvents /> School Events
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={toggleNavbar}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
