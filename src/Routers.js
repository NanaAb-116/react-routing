import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbars from "./components/Navbars";
import Services from "./components/Services";
import ServicesDetails from "./components/ServicesDetails";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="/servicedetails:id" element={<ServicesDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
