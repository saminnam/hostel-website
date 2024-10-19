import React from "react";
import "./Blogs.css";
import Title from "../../Title/Title";
import { Assets } from "../../../Assets/Assets";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      href: "/blog/hostel-life-experience",
      imgSrc: Assets.blog_1,
      altText: "Hostel Life",
      title: "Hostel Life & Experience",
      subtitle: "What to Expect",
      text: "A detailed post on the hostel experience, including amenities, common spaces, and room types."
    },
    {
      id: 2,
      href: "/blog/travel-tips",
      imgSrc: Assets.blog_3,
      altText: "Travel Tips",
      title: "Travel Tips",
      subtitle: "Safety Tips",
      text: "Share advice on staying safe while traveling in the local area."
    },
    {
      id: 3,
      href: "/blog/healthy-foods",
      imgSrc: Assets.blog_4,
      altText: "Healthy Foods",
      title: "Healthy Foods",
      subtitle: "Stay Healthy",
      text: "Healthy eating made easy with balanced meals that nourish your body and satisfy your cravings."
    },
    {
      id: 4,
      href: "/blog/you-cant-be-alone",
      imgSrc: Assets.blog_5,
      altText: "You Can't Be Alone",
      title: "You can't be alone",
      subtitle: "Try to Mingle",
      text: "In a world full of connections, even in solitude, you're always surrounded by memories."
    },
    {
      id: 5,
      href: "/blog/powerful-security",
      imgSrc: Assets.blog_6,
      altText: "Powerful Security",
      title: "Powerful Security",
      subtitle: "Safety First",
      text: "Stay secure with our powerful CCTV system, offering high-definition surveillance and advanced motion detection."
    },
    {
      id: 6,
      href: "/blog/two-wheeler-parking",
      imgSrc: Assets.parking_1_img,
      altText: "Two Wheeler Parking",
      title: "Two Wheeler Parking",
      subtitle: "Park Safely",
      text: "Convenient and secure two-wheeler parking designed for easy access.Secure and convenient two-wheeler parking for easy access and peace of mind."
    },
    {
      id: 7,
      href: "/blog/unlimited-wifi",
      imgSrc: Assets.blog_7,
      altText: "Unlimited WiFi",
      title: "Unlimited Wifi",
      subtitle: "Always Connected",
      text: "Experience fast and reliable Wi-Fi connectivity, ensuring seamless browsing and streaming."
    },
    {
      id: 8,
      href: "/blog/foodies-spot",
      imgSrc: Assets.blog_8,
      altText: "Foodies Spot",
      title: "Foodies Spot",
      subtitle: "Relax and Eat",
      text: "Enjoy delicious and hygienic meals at our hostel's food place, offering a variety of home-cooked dishes."
    }
  ];

  return (
    <div className="blogs">
      <div className="position-relative">
        <div>
          <img
            src={Assets.bck_2}
            className="title_bck_img"
            alt="background_img"
          />
          <Title title={"Our"} us={"Blogs"} />
        </div>
      </div>
      {/* section one starts */}
      <div className="container mt-5">
        <a
          href={blogData[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-reset text-decoration-none"
        >
          <div className="card card_blog">
            <img src={blogData[0].imgSrc} alt={blogData[0].altText} />
            <div className="card-body card_blog_body">
              <h4 className="card-title">{blogData[0].title}</h4>
              <h6 className="card-subtitle">{blogData[0].subtitle}</h6>
              <p className="card-text">{blogData[0].text}</p>
            </div>
          </div>
        </a>
      </div>
      {/* section one ends */}
      {/* section two starts */}
      <div className="container mt-5">
        <div className="row">
          {blogData.slice(1, 4).map((blog) => (
            <div key={blog.id} className="col">
              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none"
              >
                <div className="card card_blog_1">
                  <img src={blog.imgSrc} alt={blog.altText} />
                  <div className="card-body card_blog_body_1">
                    <h4 className="card-title">{blog.title}</h4>
                    <h6 className="card-subtitle">{blog.subtitle}</h6>
                    <p className="card-text">{blog.text}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* section two ends */}
      {/* section three starts */}
      <div className="container mt-5">
        <div className="row">
          {blogData.slice(4, 6).map((blog) => (
            <div key={blog.id} className="col">
              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none"
              >
                <div className="card card_blog_1">
                  <img src={blog.imgSrc} alt={blog.altText} />
                  <div className="card-body card_blog_body_1">
                    <h4 className="card-title">{blog.title}</h4>
                    <h6 className="card-subtitle">{blog.subtitle}</h6>
                    <p className="card-text">{blog.text}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* section three ends */}
      {/* section four starts */}
      <div className="container mt-5 mb-5">
        <div className="row">
          {blogData.slice(6).map((blog) => (
            <div key={blog.id} className="col">
              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none"
              >
                <div className="card card_blog_1">
                  <img src={blog.imgSrc} alt={blog.altText} />
                  <div className="card-body card_blog_body_1">
                    <h4 className="card-title">{blog.title}</h4>
                    <h6 className="card-subtitle">{blog.subtitle}</h6>
                    <p className="card-text">{blog.text}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* section four ends */}
    </div>
  );
};

export default Blogs;
