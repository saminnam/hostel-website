import React from "react";
import "./RoomDetails.css";
import { CiLocationOn } from "react-icons/ci";
import Amenities from "../Amenities/Amenities";
import { IoWalletOutline } from "react-icons/io5";
import BookingForm from "../BookingForm/BookingForm";

const RoomDetails = ({ page }) => {
  return (
    <div className="container my-5">
      <div className="d-flex room_details justify-content-between">
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
                  <a href={item.GoogleMapLink}>
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
              
              <div className="imp_info_tag">
                <h5 className="text-light text-center fst-italic mt-2">
                  <IoWalletOutline className="fs-3 me-2 mb-1" />
                  No delays on your monthly rent
                </h5>
              </div>
              <h2>
                Food <span className="color">Menu</span>
              </h2>
              <p className="fst-italic pb-0">{item.FoodInfo}</p>
              <div className="d-flex justify-content-between">
                <p>{item.BreakfastTime}</p>
                <p>{item.LunchTime}</p>
                <p>{item.DinnerTime}</p>
              </div>
              <Amenities />
              <h2>
                Pay For What <span className="color">You Use</span>
              </h2>
              <h6>{item.PayInfoTitle}</h6>
              <p className="content_style">{item.PayInfoContent}</p>
              <h6>{item.PayInfoSubTitle}</h6>
              <p className="content_style">{item.PayInfoSubContent}</p>
            </div>
          ))}
        </div>
        <div className="room_booking_form">
          {page.map((item, index) => (
            <BookingForm key={index} Id={item.Id} page={page}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
