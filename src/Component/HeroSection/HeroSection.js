import React, { useState, useRef, useEffect } from "react";
import anime from "animejs"; 
import AOS from "aos"; 
import "aos/dist/aos.css";
import "./HeroSection.css";
import { Assets } from "../../Assets/Assets";

const HeroSection = () => {
  const [customers, setCustomers] = useState(0);
  const [hostels, setHostels] = useState(0);
  const [cities, setCities] = useState(0);

  // State to manage whether the section is in view
  const [inView, setInView] = useState(false);

  // Ref to the section element
  const sectionRef = useRef(null);
  const submitButtonRef = useRef(null); // Ref for the submit button

  // Auto increment function
  const incrementCount = (setFunction, finalValue, increment, interval, isInView) => {
    let count = 0;
    const counter = setInterval(() => {
      if (count < finalValue && isInView) {
        count += increment;
        if (count > finalValue) {
          count = finalValue; // Ensure count doesn't exceed final value
        }
        setFunction(count);
      } else {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter); // Cleanup interval on component unmount or update
  };

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let cleanupCustomers, cleanupHostels, cleanupCities;

    if (inView) {
      // Increment counts based on view state
      cleanupCustomers = incrementCount(setCustomers, 50000, 100, 10, inView);
      cleanupHostels = incrementCount(setHostels, 450000, 1000, 10, inView);
      cleanupCities = incrementCount(setCities, 10000, 100, 10, inView);
    }

    // Cleanup intervals when component unmounts or view state changes
    return () => {
      if (cleanupCustomers) cleanupCustomers();
      if (cleanupHostels) cleanupHostels();
      if (cleanupCities) cleanupCities();
    };
  }, [inView]);

  // Anime.js animation on input focus
  const handleFocus = () => {
    anime({
      targets: submitButtonRef.current, // Target the submit button
      scale: [1, 1.1], // Scale up the button
      backgroundColor: "#FFD700", // Change the background color to gold
      borderRadius: ["0%", "50%"], // Animate border radius
      easing: "easeInOutQuad",
      duration: 500, // Animation duration in ms
      direction: "alternate", // Reverses animation when completed
    });
  };

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header ref={sectionRef}>
        <div className="hero-container"  id='top'>
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <h1 className="fst-italic hero-title">
                Best-In-Class PG for Men and Women in Prime Locations
              </h1>

              <form name="text-form" method="get" className="hero-form">
                <input
                  type="text"
                  className="input_text"
                  placeholder="Enter your location"
                  required=""
                  onFocus={handleFocus} // Trigger animation on input focus
                />
                <input
                  ref={submitButtonRef} // Attach ref to the submit button
                  type="submit"
                  value="Search"
                  className="submit-btn"
                />
              </form>

              <div className="hero-info-grid" data-aos="zoom-out-right">
                <div className="info-box">
                  <h3 className="info-title">{customers.toLocaleString()}+</h3>
                  <p className="info-text text-dark">Delighted Customers</p>
                </div>
                <div className="info-box">
                  <h3 className="info-title">{hostels.toLocaleString()}+</h3>
                  <p className="info-text text-dark">Best Feedbacks</p>
                </div>
                <div className="info-box">
                  <h3 className="info-title">{cities.toLocaleString()}+</h3>
                  <p className="info-text text-dark">Cities & Counting</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={Assets.frontlook} alt="people_look" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
