import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import "./Footer.css";
import { Assets } from "../../Assets/Assets";

const Footer = () => {
  return (
    <>
      <div id="footer" className="py-5 footer section_gap">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_logo">
                <Link to="/">
                  {" "}
                  <img
                    src={Assets.main_logo1}
                    alt="logo"
                    className=""
                    width={220}
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <ul className="footer_list footer_list_1">
                <li>
                  <Link to="/">Home</Link>{" "}
                </li>
                <li>
                  <Link to="/about_us">About Us</Link>{" "}
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="footer_list">
                
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/facilities">Hostel Facilities</Link>{" "}
                </li>
                <li>
                  <Link to="/hostel-rules">Hostel Rules</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="footer_list">
                <li>
                  <Link to="/terms-and-conditions">T&C</Link>{" "}
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>{" "}
                </li>
                <li>
                  <Link to="/contact_us">Contact Us</Link>{" "}
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
              <div className="mt-5">
                <h5 className="text-secondary"><IoCallOutline className="fs-3"/> +91 98402 34475</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="footer_info mb-0 text-secondary text-center">
        Copyright © 2024 | All Rights Reserved. |
        <Link to="/sitemap" className="text-secondary">
          {" "}
          Sitemap
        </Link>{" "}
      </p>
    </>
  );
};

export default Footer;
