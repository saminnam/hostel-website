import React, { useState } from "react";
import Title from "../../Title/Title";
import "./ContactUs.css";
import { Assets } from "../../../Assets/Assets";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const ContactUs = () => {
  // State to hold form data and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is not valid.";
    }
    if (!formData.subject.trim()) formErrors.subject = "Subject is required.";
    if (!formData.message.trim()) formErrors.message = "Message is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission process
      setTimeout(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="contact_us">
      <div className="position-relative">
        <div className="pt-1">
          <img src={Assets.bck_2} className="title_bck_img" alt="Background" />
          <Title title={"Contact"} us={"Us"} />
        </div>
      </div>
      <div className="container position-relative">
        <div className="contactus_info_box">
          <div className="contactus_info_box_top">
            <h1 className="text-center  fst-italic ms-4">Always available, </h1>
            <h4 className="text-center fst-italic  ms-5 ps-5">
            feel free to contact us...
            </h4>
          </div>
          <div className="contactus_info_box_bottom">
            <div className="d-flex justify-content-between align-items-center">
              <div className="box_left">
                <p className="fs-5 text-secondary mb-2">WRITE AN E-MAIL</p>
                <h4 className="">Brindhavanam@gmail.com</h4>
                <p className="fs-5 text-secondary mb-2">CALL TO REACH US</p>
                <h4 className="">+044 9696 00000</h4>
                <div className="d-flex ms-5">
                  <div className="fs-2 pe-2">
                    <a
                      href="https://wa.me/yourwhatsapplink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      <FaWhatsapp className="icons wt" />
                    </a>
                  </div>
                  <div className="fs-2 pe-2">
                    <a
                      href="https://facebook.com/yourfacebookpage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      <FaFacebook className="icons fb" />
                    </a>
                  </div>
                  <div className="fs-2 pe-2">
                    <a
                      href="https://youtube.com/youryoutubechannel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      <AiOutlineYoutube className="icons yt" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box_right">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    <div className="me-3">
                      <label className="form-label ">
                        Your Name
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </label>
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="form-label ">
                        Your Email
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </label>
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <label className="form-label mt-3 ">
                    Subject
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </label>
                  {errors.subject && (
                    <p className="text-danger">{errors.subject}</p>
                  )}

                  <label className="form-label mt-3 ">
                    Your message
                    <textarea
                      className="msg_box form-control"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </label>
                  {errors.message && (
                    <p className="text-danger">{errors.message}</p>
                  )}

                  <br />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="box_map">
          <div>
            <iframe
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=brindhavanam+technologies&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              className="g-mapdisplay"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <img src={Assets.letter_icon} width={70} className="letter_icon" data-aos="fade-right" alt="letter"/>
        <div className="contactus_underline"></div>
      </div>
    </div>
  );
};

export default ContactUs;
