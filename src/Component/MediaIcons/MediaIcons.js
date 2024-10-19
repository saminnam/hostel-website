import React from "react";
import "./MediaIcons.css";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const MediaIcons = () => {
  function scrollbtn() {
    window.scrollTo(0, 0); 
  }
  return (
    <div className="media_icons">
      <ul className="media_icons_right">
        <li className="fs-2 pe-2">
          <a
            href="https://wa.me/919840234475"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icons wt" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icons fb" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a
            href="www.youtube.com/@Inetztechnologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineYoutube className="icons yt" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a
            href="https://www.instagram.com/inetz_technologies_vadapalani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icons it" />
          </a>
        </li>
        <li className="fs-2 pe-2" onClick={scrollbtn}>
          <a
            href="#"
          >
            <RiArrowUpDoubleFill className="icons lk" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MediaIcons;
