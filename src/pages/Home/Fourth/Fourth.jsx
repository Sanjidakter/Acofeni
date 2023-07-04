import React from "react";
import fimg from "../../../assets/fimg.png";
import uparrow from "../../../assets/uparrow.svg";
import "./Fourth.css";

const Fourth = () => {
  return (
    <>
      <div className="hidden lg:grid">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex  md:felx-row ml-36 gap-40 mt-32 mb-8">
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
                Artificial beings with intelligence appeared as storytelling
                devices in antiquity,
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
              <ol type="i">
                <li>
                  <hr />
                  <h2>
                    1{" "}
                    <span className="p-6 text-start">
                      <span>Web AI</span> <br />{" "}
                      <span className="ml-12">working ex</span>
                    </span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      border: "none",
                      marginTop: "43px",
                      marginBottom: "43px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "8px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "276px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
                <li>
                  {" "}
                  <hr />
                  <h2>
                    2 <span>Robots Learn to</span> <br />{" "}
                    <span className="ml-8">walk in just days</span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      border: "none",
                      marginTop: "43px",
                      marginBottom: "43px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "8px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "276px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
                <li>
                  {" "}
                  <hr />
                  <h2>
                    3 <span>Why Robots Might be the</span> <br />{" "}
                    <span className="ml-8">Future of work</span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      border: "none",
                      marginTop: "43px",
                      marginBottom: "43px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "8px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "276px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-col gap-10 mt-32 mb-8">
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
                Artificial beings with intelligence appeared as storytelling
                devices in antiquity,
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
              <ol type="i">
                <li>
                  <hr />
                  <h2>
                    1{" "}
                    <span className="p-6 text-start">
                      <span>Web AI</span> <br />{" "}
                      <span className="ml-12">working ex</span>
                    </span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      border: "none",
                      marginTop: "43px",
                      marginBottom: "43px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "8px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "276px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
                <li>
                  {" "}
                  <hr />
                  <h2>
                    2 <span>Robots Learn to</span> <br />{" "}
                    <span className="ml-8">walk in just days</span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      border: "none",
                      marginTop: "43px",
                      marginBottom: "43px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "8px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "276px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
                <li>
                  {" "}
                  <hr />
                  <h2>
                    3 <span>Why Robots Might be the</span> <br />{" "}
                    <span className="ml-8">Future of work</span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      border: "none",
                      marginTop: "43px",
                      marginBottom: "43px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "8px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "276px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
