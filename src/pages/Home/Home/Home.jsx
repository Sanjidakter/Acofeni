import React from "react";
import "./Home.css";
import robot from "../../../assets/robot-with-digital-tablet 1.png";

const Home = () => {
  return (
    <div className="main text-center ">
      <div className="ml-64">
      <h2
        style={{
          color: "#6a6a6a",
         
          fontSize: "72px",
          fontFamily: "Manrope",
          fontWeight: "600",
          width: "910px",
          height: "196px",
        }}
      >
        Take your personality <br /> and turn it into{" "}
        <span style={{ color: "#3D88F5" }}>technology</span>
      </h2>
      <p className="para">
        Artificial beings with intelligence appeared as storytelling devices in
        antiquity,and have been common in <br /> fiction, as in Mary Shelley's
        Frankenstein or Karel Čapek's R.U.R. These characters and
      </p>
      
      </div>
      <button
        style={{
          color: "white",
          marginTop: "35px",
          padding: "19px 35px",
          // alignItems: "flex-start",
          gap: "10px",
          borderRadius: "16px",
          background: "var(--primary-1, #3D88F5)",
        }}
      >
        Enqure Now
      </button>
      <div
      style={{
        position: "relative",
        width: "1170px",
        height: "937px",
        marginLeft: "165px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
         
        }}
      />
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          marginRight:"135px",
        
        }}
        className="mt-12"
        src={robot}
        alt=""
      />
    </div>
    </div>
  );
};

export default Home;
