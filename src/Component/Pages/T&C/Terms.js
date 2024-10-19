import React from "react";
import { Assets } from "../../../Assets/Assets";
import Title from "../../Title/Title";

const termsArray = [
  {
    title: "Accommodation Agreement",
    description:
      "All residents must complete a registration form and provide valid identification before checking in. The hostel reserves the right to refuse accommodation to anyone who does not comply with these terms."
  },
  {
    title: "Check-In and Check-Out Policy",
    description:
      "Check-in time is from 12:00 PM to 10:00 PM. Check-out time is by 11:00 AM. Early check-in or late check-out requests may incur additional charges and must be approved by hostel management."
  },
  {
    title: "Room Occupancy",
    description:
      "The maximum occupancy for each room type is specified on the website. Exceeding the occupancy limits is not permitted. Only registered guests are allowed to stay overnight in the hostel. Visitors are not permitted to stay overnight without prior approval."
  },
  {
    title: "Payment and Cancellation Policy",
    description:
      "Full payment is required at the time of booking. Accepted payment methods include cash, credit/debit cards, and online payments. Cancellations must be made at least 48 hours before the scheduled check-in time to avoid a cancellation fee equivalent to one night’s stay."
  },
  {
    title: "Security and Safety",
    description:
      "The hostel is not responsible for any loss or damage to personal belongings. Guests are encouraged to secure their valuables in lockers provided. Fire safety regulations must be followed at all times. Tampering with fire safety equipment is strictly prohibited."
  },
  {
    title: "Liability",
    description:
      "Brindhavam Hi-Tech Hostel is not liable for any injuries or damages sustained by guests while on the premises. Guests are responsible for any damages caused to the property during their stay and will be charged accordingly."
  },
  {
    title: "Privacy Policy",
    description:
      "Personal information collected during the registration process will be kept confidential and will not be shared with third parties without consent. Guests have the right to request access to their personal data and to request corrections if necessary."
  },
  {
    title: "Governing Law",
    description:
      "These terms and conditions are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the court."
  }
];

const Terms = () => {
  return (
    <section className="position-relative">
      <div>
        <img
          src={Assets.bck_2}
          className="title_bck_img img-fluid"
          alt="background_img"
        />
        <Title title={"T &"} us={"C"} />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center px-3 px-md-4">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center gap-4">
            <h1>Terms and Conditions</h1>
            <p className="text-center lead">
              Welcome to Brindhavam Hi-Tech Hostel! By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
            </p>

            <div className="w-100 d-flex flex-column gap-4">
              <div className="border-bottom py-3">
                <h6 className="fw-bold">GENERAL TERMS & CONDITIONS</h6>
              </div>

              <div className="d-flex flex-column gap-4">
                {termsArray.map((term, index) => (
                  <div className="d-flex flex-column gap-3" key={index}>
                    <div className="d-flex flex-column">
                      <p className="fw-bold small">{term.title}</p>
                      <p className="small">{term.description}</p>
                    </div>
                  </div>
                ))}

                <div
                  className="border-bottom"
                  style={{ backgroundColor: "#e2e2e2", minHeight: "1px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
