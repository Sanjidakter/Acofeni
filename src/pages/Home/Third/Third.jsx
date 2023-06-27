import React from "react";
import "./Third.css";
import robot from "../../../assets/3d-rendering-biorobots-concept_prev_ui - Copy 1.png";

const Third = () => {
  return (
    <div className="mt-32">
      <h2
        style={{
          color: "var(--dark-80, #3C3C3C)",
          textAlign: "center",
          fontSize: "48px",
          fontFamily: "Manrope",
        }}
      >
        Presenting the technology of <br /> the future
      </h2>
      <div className="flex ml-36">
        <div>
          <div
            style={{
              borderLeft: "solid 8px blue",
              borderTop: "solid 8px blue",
              width: "275px",
              height: " 142px",
              background: "#181A25",
            }}
          >
            <h2>80%</h2>
            <p>Automation o data</p>
          </div>
          <div
            style={{
              borderLeft: "solid 8px blue",
              borderTop: "solid 8px blue",
              width: "275px",
              height: " 142px",
              background: "#181A25",
            }}
          >
            <h2>80%</h2>
            <p>Automation o data</p>
          </div>
        </div>
        <div>
          <img className="bg" src={robot} alt="" />
        </div>
        <div>
          <div
            style={{
              borderLeft: "solid 8px blue",
              borderTop: "solid 8px blue",
              width: "275px",
              height: " 142px",
              background: "#181A25",
            }}
          >
            <h2>80%</h2>
            <p>Automation o data</p>
          </div>
          <div
            style={{
              borderLeft: "solid 8px blue",
              borderTop: "solid 8px blue",
              width: "275px",
              height: " 142px",
              background: "#181A25",
            }}
          >
            <h2>80%</h2>
            <p>Automation o data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
