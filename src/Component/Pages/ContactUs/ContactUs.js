import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Assets } from "../../../Assets/Assets";
import Title from "../../Title/Title";

const ContactSection = () => {
  const [cname, setCname] = useState("");
  const [cemail, setCemail] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [cmessage, setCmessage] = useState("");
  const [errr, setErrr] = useState(0);

  const validateForm = () => {
    if (!cname) {
      setErrr(1); // Error for name
      return false;
    }
    if (!cemail.includes("@")) {
      setErrr(2); // Error for email
      return false;
    }
    if (cnumber.length !== 10) {
      setErrr(3); // Error for phone number
      return false;
    }
    if (!cmessage) {
      setErrr(4); // Error for message
      return false;
    }
    setErrr(0); // Reset error if all inputs are valid
    return true;
  };

  const contactSubmit = () => {
    if (validateForm()) {
      // Your submit logic here (e.g., sending form data)
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="position-relative">
      <div>
        <img
          src={Assets.bck_2}
          className="title_bck_img img-fluid"
          alt="background_img"
        />
        <Title title={"Contact"} us={"Us"} />
      </div>
      <section className="container my-5 border py-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="text-center mb-5">
          <h2 className="font-weight-bold fst-italic">Get In Touch With Us</h2>
          <p className="d-none d-md-block text-muted">
            For more information about our PG's & Guest house, please feel free
            to drop us an email.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="d-flex align-items-start mb-4">
              <i className="bi bi-geo-alt-fill me-3"></i>
              <div>
                <h5 className="font-weight-bold">Address</h5>
                <p>Vadapalani / Ramapuram / Kodambakkam</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <i className="bi bi-telephone-fill me-3"></i>
              <div>
                <h5 className="font-weight-bold">Phone</h5>
                <p>Mobile: +(91) 98402 34475</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <i className="bi bi-envelope-fill me-3"></i>

              <div>
                <h5 className="font-weight-bold">E-Mail</h5>
                <p>brindhavanamhostel@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 shadow-sm p-3 mb-5 bg-body roundedy">
            <div className="form-group mb-4">
              <label htmlFor="name" className="font-weight-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className={`form-control ${errr === 1 ? "is-invalid" : ""}`}
                placeholder="Name"
                value={cname}
                onChange={(e) => setCname(e.target.value)}
              />
              {errr === 1 && (
                <div className="invalid-feedback">Please enter your name.</div>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="font-weight-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`form-control ${errr === 2 ? "is-invalid" : ""}`}
                placeholder="Email Address"
                value={cemail}
                onChange={(e) => setCemail(e.target.value)}
              />
              {errr === 2 && (
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="phone" className="font-weight-bold mb-2">
                Contact Number
              </label>
              <input
                type="number"
                id="phone"
                className={`form-control ${errr === 3 ? "is-invalid" : ""}`}
                placeholder="Contact Number"
                value={cnumber}
                onChange={(e) => setCnumber(e.target.value)}
              />
              {errr === 3 && (
                <div className="invalid-feedback">
                  Please enter a valid 10-digit phone number.
                </div>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="message" className="font-weight-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className={`form-control ${errr === 4 ? "is-invalid" : ""}`}
                rows="3"
                placeholder="Message"
                value={cmessage}
                onChange={(e) => setCmessage(e.target.value)}
              />
              {errr === 4 && (
                <div className="invalid-feedback">
                  Please enter your message.
                </div>
              )}
            </div>
            <button className="form_btn px-4" onClick={contactSubmit}>
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
