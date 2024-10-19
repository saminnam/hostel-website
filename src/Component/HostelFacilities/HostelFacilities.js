import React from "react";
import Title from "../Title/Title";
import { Assets } from "../../Assets/Assets";

const HostelFacilities = () => {
  const facilities = [
    {
      img: Assets.fac_2,
      alt: "Healthy Foods",
      title: "Healthy Foods",
      subtitle: "Veg / Non-Veg",
      text: "Enjoy a variety of meal options with both vegetarian and non-vegetarian dishes.",
    },
    {
      img: Assets.fac_3,
      alt: "Unlimited Wifi",
      title: "Unlimited Wifi",
      subtitle: "Feel Free to Use",
      text: "Experience fast and reliable Wi-Fi connectivity, ensuring seamless browsing.",
    },
    {
      img: Assets.fac_4,
      alt: "Water Heater",
      title: "Water Heater",
      subtitle: "Comfortable Heater",
      text: "Stay comfortable with our efficient water heaters for a warm shower any time.",
    },
  ];

  const additionalFacilities = [
    {
      img: Assets.fac_6,
      alt: "Cupboard",
      title: "Cupboard",
      subtitle: "Arrange your Clothes",
      text: "Store your belongings securely in spacious cupboards with personal locks.",
    },
    {
      img: Assets.parking_1_img,
      alt: "Two Wheeler Parking",
      title: "Two Wheeler Parking",
      subtitle: "Park Safely",
      text: "Enjoy peace of mind with secure parking areas for your bike or scooter.",
    },
  ];

  const otherFacilities = [
    {
      img: Assets.fac_7,
      alt: "Large Screen T.V",
      title: "Large Screen T.V",
      subtitle: "Watch your movie",
      text: "Enjoy movies with our high-definition large screen television.",
    },
    {
      img: Assets.fac_8,
      alt: "Cook and Eat",
      title: "Cook and Eat",
      subtitle: "Feel Free to Use",
      text: "Cook safely with our modern stoves, offering precise temperature control.",
    },
    {
      img: Assets.fac_9,
      alt: "Study Table",
      title: "Study Table",
      subtitle: "Comfortable Heater",
      text: "Ergonomically designed study tables with ample storage for long study sessions.",
    },
  ];

  return (
    <div className="hostel_facilities">
      <div className="position-relative">
        <div className="pt-1">
          <img src={Assets.bck_2} className="title_bck_img" alt="Background" />
          <Title title={"Our"} us={"Facilities"} />
        </div>
      </div>

      {/* Section One */}
      <div className="container mt-5">
        <div className="row">
          {facilities.map((facility, index) => (
            <div key={index} className="col-lg-4 col-md-8 col-12">
              <div className="card card_blog_1" data-aos="fade-right">
                <img src={facility.img} alt={facility.alt} />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">{facility.title}</h4>
                  <h6 className="card-subtitle">{facility.subtitle}</h6>
                  <p className="card-text">{facility.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Two */}
      <div className="container mt-5">
        <div className="card card_blog" data-aos="fade-up">
          <img src={Assets.fac_1} alt="Hostel Life" />
          <div className="card-body card_blog_body">
            <h4 className="card-title">Hostel Life & Experience</h4>
            <h6 className="card-subtitle">What to Expect</h6>
            <p className="card-text">
              Discover the cozy bedrooms designed for restful sleep and relaxation.
            </p>
          </div>
        </div>
      </div>

      {/* Section Three */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center gap-3">
          {additionalFacilities.map((facility, index) => (
            <div key={index} className="">
              <div className="card card_blog_1" data-aos="fade-down-right">
                <img src={facility.img} alt={facility.alt} />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">{facility.title}</h4>
                  <h6 className="card-subtitle">{facility.subtitle}</h6>
                  <p className="card-text">{facility.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Four */}
      <div className="container mt-5">
        <div className="row">
          {otherFacilities.map((facility, index) => (
            <div key={index} className="col-lg-4 col-md-8 col-12">
              <div className="card card_blog_1" data-aos="fade-right">
                <img src={facility.img} alt={facility.alt} />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">{facility.title}</h4>
                  <h6 className="card-subtitle">{facility.subtitle}</h6>
                  <p className="card-text">{facility.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostelFacilities;
