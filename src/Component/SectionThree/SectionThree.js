import React from "react";
import "./SectionThree.css";
import { Assets } from "../../Assets/Assets";


const SectionThree = () => {
  return (
    <section
      className="sec_3_main_page section_gap"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col">
            <h1 className="content">
              The Ultimate Guide to
              <span className="color"> Hostel Bedrooms</span>
            </h1>
            <p className="mt-4 fs-6 sub_content">
              Our spacious rooms are nourished with all the essential furniture,
              pleasant interiors and provide ultimate comfort to everyone.
            </p>
            <div className="sec_3_main_page_icons_left d-flex justify-content-center align-items-center gap-5">
              <div className="card" data-aos="fade-right">
                <img src={Assets.bed_icon} width={100} alt="bed" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">
                    Relaxing room atmosphere
                  </p>
                </div>
              </div>
              <div className="card" data-aos="fade-right">
                <img src={Assets.room_icon} width={100} alt="room" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">
                    Soothing bedding and mattress
                  </p>
                </div>
              </div>
              <div className="card" data-aos="fade-right">
                <img src={Assets.cupboard_icon} width={100} alt="cupboard" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">Voluminous cupboard</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end align-items-end">
              <div className="img_absolute">
                <img
                  src={Assets.bed_1}
                  width={380}
                  height={200}
                  className="bed_img"
                  alt="bed"
                />
              </div>
              <img className="bed_img" src={Assets.bed_2} height={380} alt="bed"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
