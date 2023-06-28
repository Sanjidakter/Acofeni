import React from "react";
import fimg from "../../../assets/fimg.png";
import uparrow from "../../../assets/uparrow.svg";
import "./Fourth.css";

const Fourth = () => {
  return (
    <div className="flex felx-row ml-36 gap-40 mt-32">
      <div>
        <h2
          style={{
            color: "var(--dark-80, #3C3C3C)",
            fontSize: " 48px",
            fontFamily: "Manrope",
          }}
        >
          Chatboxes that fit <br /> your needs
        </h2>
        <p className="mb-12">
          Artificial beings with intelligence appeared as storytelling devices
          in antiquity,
        </p>
        <button
          style={{
            padding: "9px 35px",
            gap: "10px",
            borderRadius: "16px",
            background: "var(--primary-1, #3D88F5)",
          }}
        >
          Get Started
        </button>
        <img
          style={{
            width: " 529px",
            height: " 423px",
          }}
          src={fimg}
          alt=""
        />
      </div>
      <div className="fs">
        <hr />
        <h2>1 Web AI <br /> working ex</h2>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            border: "none",
          }}
        >
          Explore
          <img
            src={uparrow}
            alt=""
            style={{  background: "var(--primary-03, #87B4F5)",marginLeft: "8px", borderRadius: "50px",width:"25px",marginLeft:"276px",height:"25px" }}
          />
        </button>
        <hr />
        <h2>2 Robots Learn to <br /> walk in just days</h2>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            border: "none",
          }}
        >
          Explore
          <img
            src={uparrow}
            alt=""
            style={{  background: "var(--primary-03, #87B4F5)",marginLeft: "8px", borderRadius: "50px",width:"25px",marginLeft:"276px",height:"25px" }}
          />
        </button>

        <hr />
        <h2>3 Why Robots Might be the <br /> Future of work</h2>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            border: "none",
          }}
        >
          Explore
          <img
            src={uparrow}
            alt=""
            style={{  background: "var(--primary-03, #87B4F5)",marginLeft: "8px", borderRadius: "50px",width:"25px",marginLeft:"276px",height:"25px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Fourth;
