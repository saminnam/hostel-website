import React, { useState, useEffect } from "react"; // Added useEffect import
import "./App.css";
import "../src/Component/Global/Global.css";
import LoginPopUp from "./Component/LoginPopUp/LoginPopUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Pages/Home/Home";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS for animations
import Footer from "./Component/Footer/Footer";
import MediaIcons from "./Component/MediaIcons/MediaIcons";
import AboutUs from "./Component/Pages/AboutUs/AboutUs";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Blogs from "./Component/Pages/Blogs/Blogs";
import HostelFacilities from "./Component/HostelFacilities/HostelFacilities";
import RoomDetails from "./Component/RoomDetails/RoomDetails";
import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set animation duration
  }, []); // Empty dependency array ensures AOS runs once when the component mounts

  const [showLogin, setShowLogin] = useState(false);
  const [page, setPage] = useState([]);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : null}
      <BrowserRouter>
        <Header setShowLogin={setShowLogin} />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home page={page} setPage={setPage}/>} />
          <Route path="/about_us" element={<AboutUs setShowLogin={setShowLogin}/>}/>
          <Route path="/contact_us" element={<ContactUs setShowLogin={setShowLogin}/>} />
          <Route path="/blogs" element={<Blogs setShowLogin={setShowLogin}/>}/>
          <Route path="/facilities" element={<HostelFacilities setShowLogin={setShowLogin}/>}/>
          <Route path="/room_details" element={<RoomDetails page={page} setPage={setPage}/>}/>
        </Routes>
        <MediaIcons/>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
