import React from "react";
import { Assets } from "../../../Assets/Assets";
import "./AboutUs.css";
import Title from "../../Title/Title";

const AboutUs = () => {
  return (
    <>
      <div className="about_us">
        {/* section one starts */}
        <div className="position-relative">
          <div className="pt-1">
            <img src={Assets.bck_2} className="title_bck_img img-fluid" alt="background_img" />
            <Title title={"About"} us={"Us"} />
          </div>
        </div>
        {/* section one ends */}

        {/* section two starts */}
        <div className="sec_2_about_us section_gap">
          <div className="container">
            <div className="row align-items-center justify-content-center gap-5">
              <div className="col-lg-6 col-12">
                <div
                  className="sec_2_about_us_left_info mt-3 pt-md-5"
                
                >
                  <h1 className="content pb-3">
                    <span className="color">Take Rest</span> and make it best
                  </h1>
                  <p className="sub_content">
                    Hostel beds offer a practical solution for travelers and
                    students seeking affordable and communal lodging. They are
                    typically designed for functionality and comfort, providing
                    a place to rest and rejuvenate during a busy trip or
                    academic schedule.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-12 sec_about_us">
                <img src={Assets.bed_3} className="img-fluid" alt="bed" />
              </div>
            </div>
          </div>
        </div>
        {/* section two ends */}

        {/* section three starts */}
        <div className="sec_3_about_us section_gap">
          <div className="container">
            <div className="row align-items-center justify-content-center gap-5">
              <div className="col-lg-5 col-12 sec_about_us">
                <img src={Assets.appartment} className="img-fluid" alt="apartment" />
              </div>
              <div className="col-lg-6 col-12">
                <div
                  className="sec_2_about_us_left_info mt-3 pt-md-5"

                >
                  <h1 className="content pb-3">
                    Discover Your Ideal Apartment <span className="color">with Us</span>
                  </h1>
                  <p className="sub_content">
                    Our properties feature modern amenities, convenient locations,
                    and a commitment to comfort and quality. With a focus on exceptional service,
                    we aim to make your apartment search seamless and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section three ends */}

        {/* section four starts */}
        <div className="sec_4_about_us section_gap mb-5">
          <div className="container">
            <div className="row align-items-center justify-content-center gap-5">
              <div className="col-lg-6 col-12">
                <div
                  className="sec_2_about_us_left_info mt-3 pt-md-5"
              
                >
                  <h1 className="content pb-3">
                    <span className="color">Meet your new friends </span> from
                    multiple countries
                  </h1>
                  <p className="sub_content">
                    Friendship is a cherished bond that offers support and
                    companionship through life's ups and downs. It thrives on
                    trust, understanding, and shared experiences, creating a
                    strong connection that can weather any storm.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-12 sec_about_us">
                <img src={Assets.people} className="img-fluid" alt="people" />
              </div>
            </div>
          </div>
        </div>
        {/* section four ends */}
      </div>
    </>
  );
};

export default AboutUs;
