import React from "react";
import { Assets } from "../../Assets/Assets";
import './SectionFour.css';

const SectionFour = () => {
  return (
    <section className="sec_4_main_page section_gap">
      <div className="container">
        <div className="row d-flex">
          <div className="col">
            <div className="d-flex">
              <img
                className="bed_img"
                src={Assets.bed_4}
                data-aos="fade-up-right"
                height={380}
                width={550}
                alt="Hostel Bed"
              />
            </div>
          </div>
          <div className="col">
            <h1 className="content">
              <span className="color"> Multiple facilities </span>
              for the Hostel visitors
            </h1>
            <p className="mt-4 fs-6 sub_content">
              Our hostels offer a range of modern facilities for a comfortable
              stay, including free high-speed Wi-Fi, 24/7 security with CCTV
              surveillance.
            </p>
            <div className="sec_4_main_page_icons_left d-flex justify-content-center align-items-center" data-aos="fade-right">
              <div className="card">
                <img
                  src={Assets.wifi_icon}
                  width={100}
                  alt="Unlimited free wifi"
                />
                <div className="card-body">
                  <p className="card-text text-center sub_content">Unlimited free wifi</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={Assets.washing_machine_icon}
                  width={100}
                  alt="Washing machine"
                />
                <div className="card-body">
                  <p className="card-text text-center sub_content">
                    Any time usable washing machine
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={Assets.ac_icon} width={100} alt="AC" />
                <div className="card-body">
                  <p className="card-text text-center sub_content">Switch and be cool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
