import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Footer.css";
import { Assets } from "../../Assets/Assets";

const Footer = () => {
  return (
    <>
      <div id="footer" className="py-5 footer_menu section_gap">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_logo">
                <Link to="/">
                  {" "}
                  {/* Using Link for internal navigation */}
                  <img
                    src={Assets.main_logo1}
                    alt="logo"
                    className=""
                    width={220}
                  />
                </Link>
                {/* <h4 className="text-white text-end">Hi Tech</h4> */}
              </div>
            </div>
            <div className="col">
              <ul className="footer_list">
                <li>
                  <Link to="/about_us">About Us</Link>{" "}
                  {/* Link to About Us component */}
                </li>
                <li>
                  <Link to="/our_team">Team</Link>{" "}
                  {/* Link to Team component */}
                </li>
                <li>
                  <Link to="/investors">Investor Relations</Link>{" "}
                  {/* Link to Investor Relations component */}
                </li>
                <li>
                  <Link to="/media">Media</Link> {/* Link to Media component */}
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="footer_list">
                <li>
                  <Link to="/blogs">Blogs</Link> {/* Link to Blogs component */}
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link> {/* Link to FAQs component */}
                </li>
                <li>
                  <Link to="/facilities">Hostel Facilities</Link>{" "}
                  {/* Link to Hostel Facilities component */}
                </li>
                <li>
                  <Link to="/hostel_rules">Hostel Rules</Link>{" "}
                  {/* Link to Hostel Rules component */}
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="footer_list">
                <li>
                  <Link to="/terms-and-conditions">T&C</Link>{" "}
                  {/* Link to Terms & Conditions component */}
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>{" "}
                  {/* Link to Privacy Policy component */}
                </li>
                <li>
                  <Link to="/contact_us">Contact Us</Link>{" "}
                  {/* Link to Contact Us component */}
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="fs-2 pe-2">
                  <a
                    href="https://wa.me/yourwhatsapplink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaWhatsapp className="icons wt" />
                  </a>
                </div>
                <div className="fs-2 pe-2">
                  <a
                    href="https://facebook.com/yourfacebookpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaFacebook className="icons fb" />
                  </a>
                </div>
                <div className="fs-2 pe-2">
                  <a
                    href="https://youtube.com/youryoutubechannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <AiOutlineYoutube className="icons yt" />
                  </a>
                </div>
                <div className="fs-2 pe-2">
                  <a
                    href="https://instagram.com/yourinstagrampage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaInstagram className="icons it" />
                  </a>
                </div>
                <div className="fs-2 pe-2">
                  <a
                    href="https://linkedin.com/in/yourlinkedinprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaLinkedin className="icons lk" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="footer_line"></div> */}
          </div>
        </div>
      </div>
      <p className="footer_info mb-0 text-secondary text-center">
        Copyright © 2024 | All Rights Reserved by Dtwelve Spaces Pvt Ltd. |
        <Link to="/sitemap" className="text-secondary">
          {" "}
          Sitemap
        </Link>{" "}
      </p>
    </>
  );
};

export default Footer;
