import React from "react";
import logo1 from "../../assets/Adidas-Logo-1967 1.png";
import logo2 from "../../assets/constrion.png";
import logo3 from "../../assets/abcity.png";
import logo4 from "../../assets/shopwebly.png";
import logo5 from "../../assets/hamp.png";
import Marquee from "react-fast-marquee";
import './LogoSection.css';
const LogoSection = () => {
  return (
    <div>
      <h2 className="hidden lg:grid"
        style={{
          marginTop:"128px",
          color: "var(--dark-80, #3C3C3C)",
          textAlign: "center",
          fontSize: "48px",
          fontFamily: "Manrope",
          letterSpacing: "0.1px",
          marginBottom:"31px",
          
        }}
      >
        Proud To Work With
      </h2>
      <h2 className="lg:hidden"
        style={{
          marginTop:"128px",
          color: "var(--dark-80, #3C3C3C)",
          textAlign: "center",
          fontSize: "28px",
          fontFamily: "Manrope",
          letterSpacing: "0.1px",
          marginBottom:"31px",
          marginLeft:"8%"
        }}
      >
        Proud To Work With
      </h2>
      <Marquee>
        <img className="mr-16 grey-img" src={logo1} alt="" />
        <img className="mr-16" src={logo2} alt="" />
        <img className="mr-16 grey-img" src={logo3} alt="" />
        <img className="mr-16 grey-img" src={logo4} alt="" />
        <img className="mr-16" src={logo5} alt="" />
      </Marquee>
    </div>
  );
};

export default LogoSection;
