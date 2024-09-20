import React from "react";
import Title from "../Title/Title";
import { Assets } from "../../Assets/Assets";

const HostelFacilities = () => {
  return (
    <div className="hostel_facilities">
      <div className="position-relative">
        <div className="pt-1">
          <img src={Assets.bck_2} className="title_bck_img" />
          <Title title={"Our"} us={"Facilities"} />
        </div>
      </div>
      {/* section one starts */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-right">
              <img src={Assets.fac_2} alt="Healthy Foods" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Healthy Foods</h4>
                <h6 className="card-subtitle">Veg / Non-Veg</h6>
                <p className="card-text">
                  Enjoy a variety of meal options with our diverse menu,
                  offering both vegetarian and non-vegetarian dishes.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-down">
              <img src={Assets.fac_3} alt="Unlimited Wifi" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Unlimited Wifi</h4>
                <h6 className="card-subtitle">Feel Free to Use</h6>
                <p className="card-text">
                  Experience fast and reliable Wi-Fi connectivity, ensuring
                  seamless browsing and streaming. Take your time and feel free
                  to use.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-left">
              <img src={Assets.fac_4} alt="Water Heater" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Water Heater</h4>
                <h6 className="card-subtitle">Comfortable Heater</h6>
                <p className="card-text">
                  Stay comfortable with our efficient water heaters. Enjoy a
                  warm and refreshing shower any time of day, no matter the
                  weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section one ends */}
      {/* section two starts */}
      <div className="container mt-5">
        <div className="card card_blog" data-aos="fade-up">
          <img src={Assets.fac_1} alt="Hostel Life" />
          <div className="card-body card_blog_body">
            <h4 className="card-title">Hostel Life & Experience</h4>
            <h6 className="card-subtitle">What to Expect</h6>
            <p className="card-text">
              Discover the cozy and comfortable bedrooms in our hostel, designed
              for restful sleep and relaxation.
            </p>
          </div>
        </div>
      </div>
      {/* section two ends */}
      {/* section three starts */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-down-right">
              <img src={Assets.fac_6} alt="Cupboard" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Cupboard</h4>
                <h6 className="card-subtitle">Arrange your Clothes</h6>
                <p className="card-text">
                  Store your belongings securely in our spacious hostel
                  cupboards, designed for convenience and safety. Each cupboard
                  offers ample space and personal locks to keep your items
                  organized and protected.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-down-left">
              <img src={Assets.parking_1_img} alt="Two Wheeler Parking" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Two Wheeler Parking</h4>
                <h6 className="card-subtitle">Park Safely</h6>
                <p className="card-text">
                  Keep your two-wheeler safe and accessible with our dedicated
                  parking spaces. Enjoy peace of mind with secure and
                  conveniently located parking areas for your bike or scooter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section three ends */}
      {/* section four starts */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-right">
              <img src={Assets.fac_7} alt="Healthy Foods" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Large Screen T.V</h4>
                <h6 className="card-subtitle">Watch your movie</h6>
                <p className="card-text">
                  A TV (television) is an electronic device used for viewing
                  multimedia content movies.
                  Modern TVs offer high-definition visuals for streaming.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-down">
              <img src={Assets.fac_8} alt="Unlimited Wifi" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Cook and Eat</h4>
                <h6 className="card-subtitle">Feel Free to Use</h6>
                <p className="card-text">
                  Unlike traditional stoves, it offers precise temperature
                  control and is safer, as the surface remains cool to the
                  touch.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_blog_1" data-aos="fade-left">
              <img src={Assets.fac_9} alt="Water Heater" />
              <div className="card-body card_blog_body_1">
                <h4 className="card-title">Study Table</h4>
                <h6 className="card-subtitle">Comfortable Heater</h6>
                <p className="card-text">
                  Designed for comfort, it often features ample storage and an
                  ergonomic design to support long hours of study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section four ends */}
    </div>
  );
};

export default HostelFacilities;
