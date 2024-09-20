import React from 'react';
import './Header.css';
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Assets } from '../../Assets/Assets';

const Header = ({ setShowLogin }) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Ewert&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Protest+Guerrilla&display=swap"
        rel="stylesheet"
      ></link>
      <div className="position-sticky top-0 z-3 header">
        <div className="container pt-2">
          <div className="row align-items-center">
            <div className="col-4">
              {/* Use Link for navigation */}
              <Link to="/">
                <img src={Assets.main_logo} className="logo" />
              </Link>
            </div>
            <div className="col-6 mt-3">
              <ul className="header_list d-flex justify-content-end gap-5 align-items-center">
                <li>
                  <Link to="/" className='hover_shadow'>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/about_us" className='hover_shadow'>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/contact_us" className='hover_shadow'>
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col d-flex justify-content-end">
              <button className="header_btn" onClick={() => setShowLogin(true)}>
                SIGN IN <FaSignInAlt className='mb-1'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
