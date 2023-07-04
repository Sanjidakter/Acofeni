import React from "react";
import "./Third.css";
import robot from "../../../assets/3d-rendering-biorobots-concept_prev_ui - Copy 1.png";
import Container from "../../Container";

const Third = () => {
  return (
    <Container>
      <div className="hidden lg:grid ">
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
        <div className="flex gap-28 ml-36 text-white text-center mb-28">
          <div className="mt-24">
            <div
              className="text-center text-white"
              style={{
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
                width: "275px",
                height: " 142px",
                background: "#181A25",
                position: "relative",
                marginBottom: "55px",
              }}
            >
              <h2 className="mt-8">80%</h2>
              <p>Automation o data</p>

              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -160,
                  width: "300px",
                  height: "132px",
                  borderLeft: "solid 2px black", // border only on the left side
                  borderTop: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "relative",
                width: "275px",
                height: "142px",
                background: "#181A25",
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
              }}
            >
              <h2 className="mt-8">50%</h2>
              <p>Improvement in projet</p>

              <div
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  right: "-160px",
                  width: "306px",
                  height: "132px",
                  borderBottom: "solid 2px black",
                  borderLeft: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
          </div>
          <div>
            <img className="bg" src={robot} alt="" />
          </div>
          <div className="mt-24">
            <div
              className="text-center text-white"
              style={{
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
                width: "275px",
                height: " 142px",
                background: "#181A25",
                position: "relative",
                marginBottom: "55px",
              }}
            >
              <h2 className="mt-8">2X</h2>
              <p>Increase in model</p>

              <div
                style={{
                  position: "absolute",
                  top: -80,
                  left: -160,
                  width: "306px",
                  height: "132px",
                  // border only on the left side
                  borderTop: "solid 2px black",
                  borderRight: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "relative",
                width: "275px",
                height: "142px",
                background: "#181A25",
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
              }}
            >
              <h2 className="mt-8">10X</h2>
              <p>Reduction in errors</p>

              <div
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  left: "-160px",
                  width: "306px",
                  height: "132px",
                  borderBottom: "solid 2px black",
                  borderRight: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
          </div>
        </div>
        <p className="tpara text-center">
          Artificial beings with intelligence appeared as storytelling devices
          in antiquity,and have been common in fiction, as in Mary Shelley's
          Frankenstein or Karel Čapek's R.U.R. These characters and
        </p>
      </div>
      <div className="mt-3 lg:hidden ">
        <h2
          style={{
            color: "var(--dark-80, #3C3C3C)",
            textAlign: "center",
            fontSize: "28px",
            fontFamily: "Manrope",
          }}
        >
          Presenting the technology of <br /> the future
        </h2>
        <div className="flex gap-28  text-white text-center mb-28">
          <div className="mt-24">
            <div
              className="text-center text-white"
              style={{
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
                width: "175px",
                height: " 142px",
                background: "#181A25",
                position: "relative",
                marginBottom: "55px",
              }}
            >
              <h2 className="mt-8">80%</h2>
              <p>Automation o data</p>

              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -160,
                  width: "300px",
                  height: "132px",
                  borderLeft: "solid 2px black", // border only on the left side
                  borderTop: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "relative",
                width: "175px",
                height: "142px",
                background: "#181A25",
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
              }}
            >
              <h2 className="mt-8">50%</h2>
              <p>Improvement in projet</p>

              <div
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  right: "-100px",
                  width: "206px",
                  height: "132px",
                  borderBottom: "solid 2px black",
                  borderLeft: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
          </div>
          <div>
            <img className="img-sm mt-32" src={robot} alt="" />
          </div>
          <div className="mt-24">
            <div
              className="text-center text-white"
              style={{
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
                width: "175px",
                height: " 142px",
                background: "#181A25",
                position: "relative",
                marginBottom: "55px",
              }}
            >
              <h2 className="mt-8">2X</h2>
              <p>Increase in model</p>

              <div
                style={{
                  position: "absolute",
                  top: -80,
                  left: -160,
                  width: "206px",
                  height: "132px",
                  // border only on the left side
                  borderTop: "solid 2px black",
                  borderRight: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "relative",
                width: "175px",
                height: "142px",
                background: "#181A25",
                borderLeft: "solid 8px blue",
                borderTop: "solid 8px blue",
              }}
            >
              <h2 className="mt-8">10X</h2>
              <p>Reduction in errors</p>

              <div
                style={{
                  position: "absolute",
                  bottom: "-80px",
                  left: "-180px",
                  width: "306px",
                  height: "132px",
                  borderBottom: "solid 2px black",
                  borderRight: "solid 2px black",
                  background: "transparent",
                  zIndex: "-1",
                }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-center">
          Artificial beings with intelligence appeared as storytelling devices
          in antiquity,and have been common in fiction, as in Mary Shelley's
          Frankenstein or Karel Čapek's R.U.R. These characters and
        </p>
      </div>
    </Container>
  );
};

export default Third;
