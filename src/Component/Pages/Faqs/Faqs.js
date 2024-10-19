import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../Title/Title";
import { Assets } from "../../../Assets/Assets";

function FAQSection() {
  // State to keep track of which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // List of FAQs
  const faqs = [
    {
      question: "How this theme is different from others in market?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      question: "What is your policy on distribution of Devjoy assets?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      question: "How can I contribute to Devjoy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      question: "What other themes do you have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
  ];

  return (
    <section className="position-relative">
      <div>
        <img
          src={Assets.bck_2}
          className="title_bck_img img-fluid"
          alt="background_img"
        />
        <Title title={"Our"} us={"Faq's"} />
      </div>
      <div className="container d-flex flex-column align-items-center justify-content-center py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 font-weight-bold">
            Frequently Asked Questions
          </h1>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
        </div>

        <div className="w-100">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card mb-3"
              style={{ border: "1px solid #e0e0e0", borderRadius: "8px" }}
            >
              <div className="card-body">
                <h2 className="h5 font-weight-bold">{faq.question}</h2>
                {openFAQ === index && (
                  <p className="mt-3 text-muted">{faq.answer}</p>
                )}
              </div>
              <button
                className="btn btn-link text-decoration-none position-absolute"
                style={{ right: "16px", top: "16px" }}
                onClick={() => toggleFAQ(index)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white"></circle>
                  <path
                    d="M7.04688 11.9999H16.9469"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 7.05005V16.95"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${
                      openFAQ === index ? "opacity-0" : "opacity-100"
                    } transition-opacity`}
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-5 text-muted">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#" className="font-weight-bold text-dark">
            {" "}
            customer support team.
          </a>
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
