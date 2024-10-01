import React from "react";
import "./SectionTwo.css";
import { Assets } from "../../Assets/Assets";

const SectionTwo = () => {
  // Create an array of objects for each section's content
  const sections = [
    {
      title: "1-Month security deposit",
      imgSrc: Assets.deposit_img,
      altText: "deposit",
      text: "Secure your workspace with ease – we require just a one-month security deposit. Get started with peace of mind.",
    },
    {
      title: "Flexible sharing option",
      imgSrc: Assets.share_img,
      altText: "share",
      text: "Have great convenience and freedom with roommates with our flexible room sharing option.",
    },
    {
      title: "Friendly ecosystem",
      imgSrc: Assets.eco_img,
      altText: "ecosystem",
      text: "Forget loneliness, new friends are waiting for you to make new memories with your roommates.",
    },
    {
      title: "Flexible workspace",
      imgSrc: Assets.workspace_img,
      altText: "workspace",
      text: "Experience the freedom of adaptable workspaces tailored to your needs. Work smart, work flexible!",
    },
  ];

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
          {/* Map over the sections array to render each section */}
          {sections.map((section, index) => (
            <div key={index} className="sec_2_box_info_body" data-aos="fade-up">
              <h4 className="sec_2_box_info_title text-center">{section.title}</h4>
              <img src={section.imgSrc} alt={section.altText} width={150} />
              <p className="sec_2_box_info_text text-center font">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
