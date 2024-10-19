import React from "react";

const Title = ({ title, us }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-end w-100 bg-light py-5"
      style={{ minHeight: "280px" }}
    >
      <div className="d-flex flex-column align-items-center py-4 mb-4">
        <h1 className="text-center page_title" data-aos="flip-down" data-aos-duration="2000">
          {title} <span className="color">{us}</span>
        </h1>
      </div>
    </div>
  );
};

export default Title;
