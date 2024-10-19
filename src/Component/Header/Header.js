import React from 'react';
import './Header.css';
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Assets } from '../../Assets/Assets';

const Header = () => {

  // Function to close the navbar on link click
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ewert&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Protest+Guerrilla&display=swap"
        rel="stylesheet"
      ></link>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg  position-sticky top-0 z-3">
        <div className="container">
          {/* Brand / Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Assets.main_logo} className="logo" alt="logo" />
          </Link>

          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav_list ms-auto me-5 gap-3">
              <li className="nav-item">
                <Link className="nav-link hover_shadow" to="/" onClick={closeNavbar}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover_shadow" to="/about_us" onClick={closeNavbar}>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover_shadow" to="/blogs" onClick={closeNavbar}>
                  BLOGS
                </Link>
              </li>
            </ul>

            {/* Sign in button */}
            <Link to="/contact_us" className="header_btn ms-lg-3" onClick={closeNavbar}>
              CONTACT US <FaSignInAlt className="mb-1" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
