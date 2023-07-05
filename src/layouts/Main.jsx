import React from "react";

import Home from "../pages/Home/Home/Home";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Second from "../pages/Home/Second/Second";
import Third from "../pages/Home/Third/Third";
import Fourth from "../pages/Home/Fourth/Fourth";
import Fifth from "../pages/Home/Fifth/Fifth";
import LogoSection from "../pages/LogoSection/LogoSection";
import Footer from "../pages/Shared/Footer/Footer";
import bgimg from "../assets/bg-color.png";

const Main = () => {
  return (
    <div
      className="bg-white"
    >
      <Navbar></Navbar>
      <Home></Home>
       <Second></Second> 
      <Third></Third>
      <Fourth></Fourth>
     <Fifth></Fifth>
       <LogoSection></LogoSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
