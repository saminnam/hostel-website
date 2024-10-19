import React, { useState, useEffect } from "react"; // Added useEffect import
import "./App.css";
import "../src/Component/Global/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Pages/Home/Home";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS for animations
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Component/Pages/AboutUs/AboutUs";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Blogs from "./Component/Pages/Blogs/Blogs";
import HostelFacilities from "./Component/HostelFacilities/HostelFacilities";
import RoomDetails from "./Component/RoomDetails/RoomDetails";
import ScrollToTop from "./Component/ScrollToTop";
import Faqs from './Component/Pages/Faqs/Faqs';
import Terms from "./Component/Pages/T&C/Terms";
import Privacy from "./Component/Pages/Privacy/Privacy";
import HostelRules from "./Component/Pages/HostelRules/HostelRules";

const App = () => {
  const [page, setPage] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set animation duration
  }, []); // Empty dependency array ensures AOS runs once when the component mounts

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null; // This component does not render anything
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home page={page} setPage={setPage}/>} />
          <Route path="/about_us" element={<AboutUs/>}/>
          <Route path="/contact_us" element={<ContactUs/>} />
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/facilities" element={<HostelFacilities />}/>
          <Route path="/room_details" element={<RoomDetails page={page} setPage={setPage}/>}/>
          <Route path="/hostel-rules" element={<HostelRules/>} />
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/terms-and-conditions" element={<Terms/>} />
          <Route path="/privacy-policy" element={<Privacy/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
