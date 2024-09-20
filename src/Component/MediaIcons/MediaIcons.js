import React from "react";
import './MediaIcons.css';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const MediaIcons = () => {
  return (
    <div className="media_icons">
      <ul className="media_icons_right">
        <li className="fs-2 pe-2">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icons wt" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icons fb" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer">
            <AiOutlineYoutube className="icons yt" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons it" />
          </a>
        </li>
        <li className="fs-2 pe-2">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icons lk" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MediaIcons;
