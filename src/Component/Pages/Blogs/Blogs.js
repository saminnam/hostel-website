import React from "react";
import "./Blogs.css";
import Title from "../../Title/Title";
import { Assets } from "../../../Assets/Assets";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="position-relative">
          <div className="pt-1">
            <img src={Assets.bck_2} className="title_bck_img" />
            <Title title={"Our"} us={"Blogs"} />
          </div>
        </div>
      {/* section one starts */}
      <div className="container mt-5">
        <a
          href="/blog/hostel-life-experience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card card_blog">
            <img src={Assets.blog_1} alt="Hostel Life" />
            <div className="card-body card_blog_body">
              <h4 className="card-title">Hostel Life & Experience</h4>
              <h6 className="card-subtitle">What to Expect</h6>
              <p className="card-text">
                A detailed post on the hostel experience, including amenities,
                common spaces, and room types.
              </p>
            </div>
          </div>
        </a>
      </div>
      {/* section one ends */}
      {/* section two starts */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <a
              href="/blog/travel-tips"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.blog_3} alt="Travel Tips" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">Travel Tips</h4>
                  <h6 className="card-subtitle">Safety Tips</h6>
                  <p className="card-text">
                    Share advice on staying safe while traveling in the local
                    area.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="/blog/healthy-foods"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.blog_4} alt="Healthy Foods" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">Healthy Foods</h4>
                  <h6 className="card-subtitle">Stay Healthy</h6>
                  <p className="card-text">
                    Healthy eating made easy with balanced meals that nourish
                    your body and satisfy your cravings.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="/blog/you-cant-be-alone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.blog_5} alt="You Can't Be Alone" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">You can't be alone</h4>
                  <h6 className="card-subtitle">Try to Mingle</h6>
                  <p className="card-text">
                    In a world full of connections, even in solitude, you're
                    always surrounded by memories.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* section two ends */}
      {/* section three starts */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <a
              href="/blog/powerful-security"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.blog_6} alt="Powerful Security" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">Powerful Security</h4>
                  <h6 className="card-subtitle">Safety First</h6>
                  <p className="card-text">
                    Stay secure with our powerful CCTV system, offering
                    high-definition surveillance and advanced motion detection.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="/blog/two-wheeler-parking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.parking_1_img} alt="Two Wheeler Parking" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">Two Wheeler Parking</h4>
                  <h6 className="card-subtitle">Park Safely</h6>
                  <p className="card-text">
                    Convenient and secure two-wheeler parking designed for easy
                    access.Secure and convenient two-wheeler parking for easy
                    access and peace of mind.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* section three ends */}
      {/* section four starts */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <a
              href="/blog/unlimited-wifi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.blog_7} alt="Unlimited WiFi" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">Unlimited Wifi</h4>
                  <h6 className="card-subtitle">Always Connected</h6>
                  <p className="card-text">
                    Experience fast and reliable Wi-Fi connectivity, ensuring
                    seamless browsing and streaming.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href="/blog/foodies-spot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card card_blog_1">
                <img src={Assets.blog_8} alt="Foodies Spot" />
                <div className="card-body card_blog_body_1">
                  <h4 className="card-title">Foodies Spot</h4>
                  <h6 className="card-subtitle">Relax and Eat</h6>
                  <p className="card-text">
                    Enjoy delicious and hygienic meals at our hostel's food
                    place, offering a variety of home-cooked dishes.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* section four ends */}
    </div>
  );
};

export default Blogs;
