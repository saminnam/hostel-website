import React from "react";
import './Title.css';

const Title = ({title,us}) => {
  return (
    <div className="title"  id='top'>
      <div className="sec_1_page_title">
        <div className="info_about_us" data-aos="zoom-out">
          <h1 className="text-center page_title">
            {title} <span className="color">{us}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
