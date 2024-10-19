import React from "react";
import Title from "../../Title/Title";
import { Assets } from "../../../Assets/Assets";

const HostelRules = () => {
  const rulesData = [
    {
      id: 1,
      title: "Respect for Others",
      content:
        "Maintain a respectful and courteous attitude towards fellow residents and staff at all times. Harassment or discrimination of any kind will not be tolerated.",
    },
    {
      id: 2,
      title: "Quiet Hours",
      content:
        "To promote a conducive living environment for studying and rest, quiet hours are enforced from 10:00 PM to 11:30 AM. Please keep noise levels to a minimum during these hours.",
    },
    {
      id: 3,
      title: "Cleanliness",
      content:
        "Residents are responsible for keeping their rooms and shared spaces clean and tidy. Regular cleaning schedules will be enforced for common areas.",
    },
    {
      id: 4,
      title: "Visitor Policy",
      content:
        "Only registered residents are allowed in the hostel premises. Guests are not permitted in individual rooms after 9:00 PM. All visitors must sign in at the reception.",
    },
    {
      id: 5,
      title: "Safety and Security",
      content:
        "Ensure that doors and windows are locked when leaving your room. Report any suspicious activity to the hostel management immediately.",
    },
    {
      id: 6,
      title: "Prohibited Items",
      content:
        "The following items are strictly prohibited in the hostel: Weapons or explosives, illegal drugs or substances, hazardous materials.",
    },
    {
      id: 7,
      title: "Cooking and Food",
      content:
        "Cooking is only permitted in designated areas. Please clean up after yourself and dispose of food waste properly to maintain hygiene.",
    },
    {
      id: 8,
      title: "Internet Usage",
      content:
        "Residents are provided with internet access. Please use the network responsibly and avoid downloading large files that may disrupt the connection for others.",
    },
    {
      id: 9,
      title: "Disciplinary Actions",
      content:
        "Violation of any hostel rules may result in disciplinary action, including warnings, fines, or expulsion from the hostel.",
    },
  ];

  return (
    <>
      <div id="hostel-rules">
        <div className="position-relative">
          <div>
            <img
              src={Assets.bck_2}
              className="title_bck_img"
              alt="background_img"
            />
            <Title title={"Hostel"} us={"Rules"} />
          </div>
        </div>
        <section>
          <div className="container my-5">
            {/* Title Container */}
            <div className="row justify-content-center mb-5">
              <div className="col-12 text-center">
                <h1 className="display-4 fw-bold">Want To Be Followed</h1>
                <p className="lead text-muted">
                  Welcome to Brindhavam Hi Tech Hostel! To ensure a pleasant and safe
                  living environment for all residents, we kindly ask that you
                  adhere to the following rules:
                </p>
              </div>
            </div>

            {/* Terms Container */}
            <div className="mb-5">
              <p className="fw-bold">Last updated as of October 17, 2022</p>
              <hr />

              {/* Loop through rulesData */}
              {rulesData.map((rule) => (
                <div key={rule.id} className="mb-4">
                  <p className="fw-bold text-uppercase">{rule.title}</p>
                  <p>{rule.content}</p>
                </div>
              ))}

              <hr className="my-5" />
              <p>
                By adhering to these rules, we can ensure a harmonious and
                enjoyable living experience for everyone at Brindhavam Hi Tech Hostel.
                Thank you for your cooperation!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HostelRules;
