import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo/logo.png";
import { Link, Outlet } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
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



// Icons for About
import { FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (submenuId) => {
    setOpenSubmenu((prevSubmenu) => (prevSubmenu === submenuId ? null : submenuId));
  };

  // Use separate refs for each submenu button
  const academicsSubmenuRef = useRef(null);
  const departmentSubmenuRef = useRef(null);
  const admissionSubmenuRef = useRef(null);
  const aboutSubmenuRef = useRef(null);
  const gallerySubmenuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !academicsSubmenuRef.current?.contains(event.target) &&
        !admissionSubmenuRef.current?.contains(event.target) &&
        !departmentSubmenuRef.current?.contains(event.target) &&
        !aboutSubmenuRef.current?.contains(event.target) &&
        !gallerySubmenuRef.current?.contains(event.target) &&
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



  return (
    <>
    <div class = "info-nav">
    <div class="info-1">
        <ul>
            <li> <a href="email"> <IoMailOutline /> pucollege.com </a> </li>
            <li> <FaPhone /> +91 9901773645</li>
        </ul>
    </div>

    <div class="info-2">
        <ul>
            <li> <Link to="/academic-overview"> Overview </Link> </li>
            <li> <Link to="/contact"> Help </Link> </li>
            <li className="cta-button"><Link to='/vision-mission'>Vision & Mission </Link></li>
        </ul>
    </div>
    
    </div>

      <nav id="navbar">
        <div class="nav-container-1">
          <div className="logo-container">
            <div class="logo">
              <Link to='/'><img src={logo} alt="collegeLogo" /> </Link>
              
            </div>
          </div>
          <div className="name-text">
            <p> Government Institution, RajanuKunte </p>
            <p> सरकारी संस्थान, राजनुकुंते
          </p>
            <p> ಸರ್ಕಾರಿ ಸಂಸ್ಥೆ, ರಾಜನಕುಂಟೆ </p>
          </div>
          {isOpen ? '' : <IoMenu className="menu-icon" onClick={toggleNavbar} fontSize={50}/>}
         
          
        </div>

        <div className={`nav-container-2 ${isOpen ? 'active' : ''}`}>
        <IoClose className="close-menu-icon" onClick={toggleNavbar} fontSize={50} />
          <ul className='nav-links'>
            <li>
              <Link to="/" onClick={toggleNavbar}> Home </Link>
            </li>
            <li>
            <button ref={academicsSubmenuRef} class="dropbtn"  onClick={() => toggleSubmenu("academics")}>Academics <FaCaretDown fontSize={18}/></button>
              <ul className={`dropdown-content ${openSubmenu === "academics" ? 'submenu' : ''}`}>
                <li><Link to='/academic-overview' onClick={toggleNavbar}><FaBook /> Academic Overview</Link></li>
                <li><Link to='/timetable' onClick={toggleNavbar}><FaRegCalendarDays /> Timetables</Link></li>
                <li><Link to='/scholarship' onClick={toggleNavbar}><SiGooglescholar /> Scholarships</Link></li>
              </ul>
            </li>
            <li>
            <button ref={admissionSubmenuRef} class="dropbtn" onClick={() => toggleSubmenu("admission")}>Admission <FaCaretDown fontSize={18}/></button>
              <ul className={`dropdown-content ${openSubmenu === "admission" ? 'submenu' : ''}`}>
                <li><Link to='/admission-overview' onClick={toggleNavbar}><FaBook /> Admission Overview</Link></li>
                <li><Link to='/fee' onClick={toggleNavbar}><FaMoneyBill /> Fee Structure</Link></li>
                
              </ul>
            </li>
            <li>
            <button ref={departmentSubmenuRef} class="dropbtn" onClick={() => toggleSubmenu("department")}>Department <FaCaretDown fontSize={18}/></button>
              <ul className={`dropdown-content ${openSubmenu === "department" ? 'submenu' : ''}`}>
                <li><Link to='/pu-college' onClick={toggleNavbar}><BiSolidSchool /> Pu College</Link></li>
                <li><Link to='/high-school' onClick={toggleNavbar}><FaSchool /> High School</Link></li>
                <li><Link to='/primary-school' onClick={toggleNavbar}><FaSchoolFlag /> Primary School</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/facilities" onClick={toggleNavbar}> Facilities </Link>
            </li>
            <li>
            <button ref={gallerySubmenuRef} class="dropbtn" onClick={() => toggleSubmenu("gallery")}>Gallery <FaCaretDown fontSize={18}/></button>
              <ul className={`dropdown-content ${openSubmenu === "gallery" ? 'submenu' : ''}`}>
                <li><Link to='/gallery-images' onClick={toggleNavbar}><FaImage /> School Images</Link></li>
                <li><Link to='/gallery-videos' onClick={toggleNavbar}><FaVideo /> School Videos</Link></li>
              </ul>
            </li>
            <li>
            <button ref={aboutSubmenuRef} class="dropbtn"  onClick={() => toggleSubmenu("about")}>About <FaCaretDown fontSize={18}/></button>
              <ul className={`dropdown-content ${openSubmenu === "about" ? 'submenu' : ''}`}>
                <li><Link to='/development-committe' onClick={toggleNavbar}><FaUsers /> College Development commite</Link></li>
                <li><Link to='/board-members' onClick={toggleNavbar}><ImProfile /> Board of Members</Link></li>
                <li><Link to='/chairperson' onClick={toggleNavbar}><RiUserStarFill /> About Chairperson</Link></li>
                <li><Link to='/principal' onClick={toggleNavbar}><FaUser /> Principal</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={toggleNavbar}> Contact us </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
