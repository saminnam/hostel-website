import React from "react";
import "./SectionOne.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import { LiaMaleSolid } from "react-icons/lia";
import PropertyList from "../PropertyList/PropertyList";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Assets } from "../../Assets/Assets";

let property1 = PropertyList.slice(0, 3);
let property2 = PropertyList.slice(3, 7);

const SectionOne = ({ page, setPage }) => {
  const sendingData = (dd) => {
    setPage([dd]);
  };
  return (
    <div className="sec_1_main_page container section_gap">
      <h3 className="text-center sec_1_main_page_title">
        <span className="color">Chennai's</span> Most Secure PG Homes <br /> for
        Peaceful Living
      </h3>
      <img
        src={Assets.bottom_design}
        className="bottom_design_1"
        alt="design"
      />
      <div className="sec_1_locaitons_card mt-5 pt-2" data-aos="fade-up">
        <div
          id="carouselExampleIndicators"
          className="carousel slide position-relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          <div className="carousel-inner">
            {/* First Set of Properties */}
            <div className="carousel-item active">
              <div className="d-flex carousel_section justify-content-between gap-4">
                {property1.map((item) => (
                  <Link
                    className="sec_1_box text-dark" // Added text-dark class
                    key={item.Id}
                    to="/room_details"
                    onClick={() => sendingData(item)}
                  >
                    <img src={item.Image} alt="item" />
                    <div className="sec_1_box_body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h4 className="sec_1_box_title fst-italic">
                            <span className="color">{item.Brand}</span> Hi Tech
                          </h4>
                          <h6 className="sec_1_box_text">{item.Address}</h6>
                        </div>
                        <div className="field_btn">
                          <div className="btn_male">
                            <LiaMaleSolid className="mb-1" />
                            Male
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="d-flex justify-content-between">
                      <div className="sec_1_box_body">
                        <h6 className="sec_1_box_text">{item.Title}</h6>
                        <h5 className="sec_1_box_title">{item.Rent}</h5>
                      </div>

                      <div className="field_btn mt-3">
                        <button className="btn_booknow">{item.Button}</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Second Set of Properties */}
            <div className="carousel-item">
              <div className="d-flex carousel_section justify-content-between gap-4">
                {property2.map((item) => (
                  <div className="sec_1_box" key={item.Id}>
                    <img src={item.Image} alt="" />
                    <div className="sec_1_box_body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h4 className="sec_1_box_title fst-italic">
                            <span className="color">{item.Brand}</span> Hi Tech
                          </h4>
                          <h6 className="sec_1_box_text">{item.Address}</h6>
                        </div>
                        <div className="field_btn">
                          <div className="btn_male">
                            <LiaMaleSolid className="mb-1" />
                            Male
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="d-flex justify-content-between">
                      <div className="sec_1_box_body">
                        <h6 className="sec_1_box_text">{item.Title}</h6>
                        <h5 className="sec_1_box_title">{item.Rent}</h5>
                      </div>

                      <div className="field_btn mt-3">
                        <Link
                          to="/room_details"
                          onClick={() => sendingData(item)}
                        >
                          <button className="btn_booknow">{item.Button}</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow_btn_field d-flex justify-content-center align-items-center gap-2 mt-4">
        {/* Carousel button */}
        <button
          className="arrow_btn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <HiArrowLongLeft />
        </button>
        <button
          className="arrow_btn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          {" "}
          <HiArrowLongRight />
        </button>
      </div>
    </div>
  );
};

export default SectionOne;
