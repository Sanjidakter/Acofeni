import React from "react";
import "./Home.css";
import robot from "../../../assets/robot-with-digital-tablet 1.png";
import Container from "../../Container";

const Home = () => {
  return (
    
      <Container>
        <div  style={{
        borderRadius: "0 0 968px 968px",
        background:
          "linear-gradient(142deg, rgba(61, 136, 245, 0.08) 0%, rgba(217, 217, 217, 0.00) 100%)",
      }} className="hidden lg:grid">
          <div className="main text-center grid justify-center">
            <div className="htmain grid justify-center">
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
                Artificial beings with intelligence appeared as storytelling
                devices in antiquity,and have been common in <br /> fiction, as
                in Mary Shelley's Frankenstein or Karel Čapek's R.U.R. These
                characters and
              </p>
            </div>
            <button
            className="grid justify-center mx-auto"
              style={{
                width:"170px",
                display:"inline",
                color: "white",
                marginTop: "35px",
                padding: "19px 35px",
                gap: "10px",
                borderRadius: "16px",
                background: "var(--primary-1, #3D88F5)",
              }}
            >
              Enqure Now
            </button>
           <img className="mt-12" src={robot} alt="" />
          </div>
        </div>
        <div className="lg:hidden ">
        <div className="main  ">
          <div className="htmain ">
            <h2
              style={{
                color: "#6a6a6a",
                fontSize: "42px",
                fontFamily: "Manrope",
                fontWeight: "600",
                width: "310px",
                height: "196px",
              }}
            >
              Take your personality <br /> and turn it into{" "}
              <span style={{ color: "#3D88F5" }}>technology</span>
            </h2>
            <p className="para-sm mt-16">
              Artificial beings with intelligence appeared as storytelling
              devices in antiquity,and have been common in <br /> fiction, as in
              Mary Shelley's Frankenstein or Karel Čapek's R.U.R. These
              characters and
            </p>
          </div>
          <button
            style={{
              color: "white",
              marginTop: "35px",
              padding: "10px 17px",
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
              // width: "1170px",
              // height: "937px",
              // marginLeft: "105px",
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
                width: "80%",
                height: "50%",
                objectFit: "cover",
              }}
              className="mt-12"
              src={robot}
              alt=""
            />
          </div>
        </div>
      </div>
      </Container>

      
    
  );
};

export default Home;
