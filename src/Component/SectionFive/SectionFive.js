import React from "react";
import "./SectionFive.css";
import { Assets } from "../../Assets/Assets";

const SectionFive = () => {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="row d-flex">
          <div className="col">
            <h1 className="content">
              Enjoy Your Special Amenities On
              <span className="color"> Guest House</span>
            </h1>
            <p className="mt-4 fs-6 sub_content">
              provides essential tips for ensuring a comfortable and memorable
              stay, covering everything from room amenities to personalized
              hospitality
            </p>
            <div className="sec_3_main_page_icons_left d-flex justify-content-center align-items-center gap-5" data-aos="fade-right">
              <div className="card">
                <img src={Assets.table_icon} width={100} alt="bed" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">
                    Keep on reading
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={Assets.tv_icon} width={100} alt="room" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">
                    Look at your movie play
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={Assets.stove_icon} width={120} alt="cupboard" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">
                    Cook your spicy food
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end align-items-end sec_5_img_right" data-aos="fade-up-left">
              <img className="bed_img" src={Assets.bed_5} height={500} alt="bed"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
