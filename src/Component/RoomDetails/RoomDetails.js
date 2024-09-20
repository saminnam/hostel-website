import React from "react";
import "./RoomDetails.css";
import { CiLocationOn } from "react-icons/ci";
import Amenities from "../Amenities/Amenities";
import { IoWalletOutline } from "react-icons/io5";
import BookingForm from "../BookingForm/BookingForm";

const RoomDetails = ({ page }) => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <div className="room_info_box">
          {page.map((item, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fst-italic">
                    <span className="color">{item.Brand}</span> Hi Tech
                  </h4>
                  <p className="address">{item.RoomAddress}</p>
                </div>
                <div className="icon_map">
                  <a href="https://www.google.co.in/maps/dir//Brindhavanam+Hi-Tech+Gents+Hostel+-+Vadapalani+%7C+Men's+PG+in+Vadapalani+%7C+Mens+Hostel+in+Vadapalani+%7C+Mens+Hostel+in+Chennai,+9%2F1A,+Saidapet+Rd,+near+V.K+Enterprises,+Sarvamangala+Colony,+Aruna+Colony,+Vadapalani,+Chennai,+Tamil+Nadu+600026/@13.0278852,80.1440046,13724m/data=!3m2!1e3!4b1!4m12!1m2!2m1!1sBrindhavanam+Hi-Tech+Gents+Hostel+-+Ramapuram+%7C+Men's+PG+in+Ramapuram+%7C+Mens+Hostel+in+vadapalani+%7C+Mens+Hostel+in+Chennai!4m8!1m0!1m5!1m1!1s0x3a5267c0abbb0a0f:0xa74f1f9c6d01ca80!2m2!1d80.2127659!2d13.0461322!3e9?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D">
                    <CiLocationOn className="fs-2 color" />
                  </a>
                </div>
                {/* insert the map icon */}
              </div>
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={item.Image1} alt="rooms" />
                  </div>
                  <div class="carousel-item">
                    <img src={item.Image2} alt="rooms" />
                  </div>
                  <div class="carousel-item">
                    <img src={item.Image3} alt="rooms" />
                  </div>
                  <div class="carousel-item">
                    <img src={item.Image4} alt="rooms" />
                  </div>
                  <div class="carousel-item">
                    <img src={item.Image5} alt="rooms" />
                  </div>
                  <div class="carousel-item">
                    <img src={item.Image6} alt="rooms" />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <h2>
                About the <span className="color">Property</span>
              </h2>
              <p className="content_style">{item.AboutInfo}</p>
              <h2>
                Room <span className="color">Details</span>
              </h2>
              <p className="content_style">{item.RoomInfo}</p>
              {/* <div className="d-flex justify-content-evenly">
                <div className="sharing_info_box">
                  <h6>{item.Method1}</h6>
                  <p className="fs-6 mb-1">{item.Title1}</p>
                  <div className="d-flex justify-content-between">
                    <h6>{item.Rent1}</h6>
                    <h6 className="me-2">{item.Fac2}</h6>
                  </div>
                </div>
                <div className="sharing_info_box">
                  <h6>{item.Method2}</h6>
                  <p className="fs-6 mb-1">{item.Title1}</p>
                  <div className="d-flex justify-content-between">
                    <h6>{item.Rent2}</h6>
                    <h6 className="me-2">{item.Fac2}</h6>
                  </div>
                </div>
                <div className="sharing_info_box">
                  <h6>{item.Method3}</h6>
                  <p className="fs-6 mb-1">{item.Title1}</p>
                  <div className="d-flex justify-content-between">
                    <h6>{item.Rent3}</h6>
                    <h6 className="me-2">{item.Fac2}</h6>
                  </div>
                </div>
              </div> */}
              {/* <div className="d-flex justify-content-evenly mt-3">
                <div className="sharing_info_box">
                  <h6>{item.Method4}</h6>
                  <p className="fs-6 mb-1">{item.Title1}</p>
                  <div className="d-flex justify-content-between">
                    <h6>{item.Rent4}</h6>
                    <h6 className="me-2">{item.Fac2}</h6>
                  </div>
                </div>
                <div className="sharing_info_box">
                  <h6>{item.Method5}</h6>
                  <p className="fs-6 mb-1">{item.Title1}</p>
                  <div className="d-flex justify-content-between">
                    <h6>{item.Rent5}</h6>
                    <h6 className="me-2">{item.Fac1}</h6>
                  </div>
                </div>
                <div className="sharing_info_box">
                  <h6>{item.Method6}</h6>
                  <p className="fs-6 mb-1">{item.Title1}</p>
                  <div className="d-flex justify-content-between">
                    <h6>{item.Rent6}</h6>
                    <h6 className="me-2">{item.Fac1}</h6>
                  </div>
                </div>
              </div> */}
              <div className="imp_info_tag">
                <h5 className="text-light text-center fst-italic mt-2"><IoWalletOutline className="fs-3 me-2 mb-1"/>No delays on your monthly rent</h5>
              </div>
              {/* <h2>
                Food <span className="color">Menu</span>
              </h2>
              <p>{item.FoodInfo}</p>
              <div className="food_info_box_1">
                <h5>Weekdays</h5>
              </div>
              <div className="food_info_box_2">
                <h5>Weekends</h5>
              </div> */}
              <Amenities />
              <h2>
                Pay For What <span className="color">You Use</span>
              </h2>
              <h6>{item.PayInfoTitle}</h6>
              <p className="content_style">{item.PayInfoContent}</p>
              <h6>{item.PayInfoSubTitle}</h6>
              <p className="content_style">{item.PayInfoSubContent}</p>
              <h2>Important<span className="color"> Information</span></h2>
              <p className="content_style">Food is served in the common dining area and the timings are:-</p>
              <div className="d-flex justify-content-between">
              <p>{item.BreakfastTime}</p>
              <p>{item.LunchTime}</p>
              <p>{item.DinnerTime}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="room_booking_form">
          <BookingForm/>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
