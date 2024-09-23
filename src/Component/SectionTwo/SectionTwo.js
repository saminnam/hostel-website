import React from "react";
import "./SectionTwo.css";
import { Assets } from "../../Assets/Assets";

const SectionTwo = () => {
  return (
    <section className="section_gap sec_2_main_page">
      <div className="container">
        <h1 className="text-center text-white content">Why To Choose</h1>
        <h1 className="text-center fst-italic text-white">
          <span className="color">Brindhavanam</span> Hi Tech
        </h1>
        <p className="text-white text-center">
          Our platform ensures that all financial transactions and agreements
          are secure, providing you peace of mind as you finalize your dream
          home.
        </p>
        <div className="d-flex sec_2_box_info justify-content-center gap-3 align-items-center">
          <div className="sec_2_box_info_body" data-aos="fade-right">
            <h4 className="sec_2_box_info_title text-center">1-Month security deposit</h4>
            <img src={Assets.deposit_img} alt="deposit" width={150} />
            <p className="sec_2_box_info_text text-center font">
              Secure your workspace with ease – we require just a one-month
              security deposit. Get started with peace of mind.
            </p>
          </div>
          <div className="sec_2_box_info_body" data-aos="fade-right">
            <h4 className="sec_2_box_info_title text-center">Flexible sharing option</h4>
            <img src={Assets.share_img} alt="share" width={150} />
            <p className="sec_2_box_info_text text-center font">
              Have great convenience and freedom with roommates with our
              flexible room sharing option.
            </p>
          </div>
          <div className="sec_2_box_info_body" data-aos="fade-left">
            <h4 className="sec_2_box_info_title text-center">Friendly ecosystem</h4>
            <img src={Assets.eco_img} alt="ecosystem" width={150} />
            <p className="sec_2_box_info_text text-center font">
              Forget loneliness, new friends are waiting for you to make new
              memories with your roommates.
            </p>
          </div>
          <div className="sec_2_box_info_body" data-aos="fade-left">
            <h4 className="sec_2_box_info_title text-center">Flexible workspace</h4>
            <img src={Assets.workspace_img} alt="workspace" width={150} />
            <p className="sec_2_box_info_text text-center font">
              Experience the freedom of adaptable workspaces tailored to your
              needs. Work smart, work flexible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
