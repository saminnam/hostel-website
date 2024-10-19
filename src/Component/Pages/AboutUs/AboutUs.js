import React from "react";
import { Assets } from "../../../Assets/Assets";
import "./AboutUs.css";
import Title from "../../Title/Title";

const AboutUs = () => {
  // Define an array of sections
  const sections = [
    {
      title: "Take Rest and make it best",
      subtitle: "Hostel beds offer a practical solution for travelers and students seeking affordable and communal lodging. They are typically designed for functionality and comfort, providing a place to rest and rejuvenate during a busy trip or academic schedule.",
      imgSrc: Assets.bed_3,
      imgAlt: "Hostel bed",
      order: "left"
    },
    {
      title: "Discover Your Ideal Apartment with Us",
      subtitle: "Our properties feature modern amenities, convenient locations, and a commitment to comfort and quality. With a focus on exceptional service, we aim to make your apartment search seamless and enjoyable.",
      imgSrc: Assets.appartment,
      imgAlt: "Apartment",
      order: "right"
    },
    {
      title: "Meet your new friends from multiple countries",
      subtitle: "Friendship is a cherished bond that offers support and companionship through life's ups and downs. It thrives on trust, understanding, and shared experiences, creating a strong connection that can weather any storm.",
      imgSrc: Assets.people,
      imgAlt: "People from various countries",
      order: "left"
    }
  ];

  return (
    <div className="about_us">
      {/* Section One Starts */}
      <div className="position-relative">
        <div>
          <img src={Assets.bck_2} className="title_bck_img img-fluid" alt="background" />
          <Title title={"About"} us={"Us"} />
        </div>
      </div>
      {/* Section One Ends */}

      {/* Sections Rendering */}
      {sections.map((section, index) => (
        <section className={`sec_${index + 2}_about_us section_gap`} key={index}>
          <div className="container">
            <div className="row align-items-center justify-content-center gap-5">
              {section.order === "left" ? (
                <>
                  <div className="col-lg-6 col-12">
                    <div className="sec_2_about_us_left_info mt-4">
                      <h1 className="content pb-3">
                        <span className="color">{section.title.split(" ")[0]}</span> {section.title.slice(section.title.indexOf(" "))}
                      </h1>
                      <p className="sub_content">{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <img src={section.imgSrc} className="img-fluid" alt={section.imgAlt} />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-5 col-12">
                    <img src={section.imgSrc} className="img-fluid" alt={section.imgAlt} />
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="sec_2_about_us_left_info mt-4">
                      <h1 className="content pb-3">
                        <span className="color">{section.title.split(" ")[0]}</span> {section.title.slice(section.title.indexOf(" "))}
                      </h1>
                      <p className="sub_content">{section.subtitle}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
      {/* Section Rendering Ends */}
    </div>
  );
};

export default AboutUs;
