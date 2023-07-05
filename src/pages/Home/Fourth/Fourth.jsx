import React from "react";
import fimg from "../../../assets/fimg.png";
import uparrow from "../../../assets/uparrow.svg";
import "./Fourth.css";

const Fourth = () => {
  return (
    <>
      <div className="hidden lg:grid justify-items-center">
      
          <div className="flex justify-center  md:felx-row  gap-40 mt-32 mb-8">
            <div className="mx-auto">
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
                  width:"167px",
                  height:"43px",
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
            <div className="fs pr-6">
              <ol type="i">
                <li>
                  <hr className="mb-6"/>
                  <h2>
                    1{" "}
                    <span className="p-6 text-start ">
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
                  <hr className="mb-6"/>
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
                  <hr className="mb-6"/>
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
      
      <div className="lg:hidden w-full ">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-col gap-10 mt-32 mb-8">
            <div>
              <h2
                style={{
                  color: "var(--dark-80, #3C3C3C)",
                  fontSize: " 28px",
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
            <div className="fs-sm">
              <ol type="i">
                <li>
                  <hr className="mb-2"/>
                  <h2>
                    1{" "}
                    <span className="p-6 text-start">
                    Web AI working ex
                    </span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 8px",
                      border: "none",
                      marginTop: "23px",
                      marginBottom: "13px",
                    }}
                  >
                    Explore
                    <img
                      src={uparrow}
                      alt=""
                      style={{
                        background: "var(--primary-03, #87B4F5)",
                        marginLeft: "4px",
                        borderRadius: "50px",
                        width: "25px",
                        marginLeft: "106px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
                <li>
                  {" "}
                  <hr className="mb-6"/>
                  <h2>
                    2 <span>Robots Learn to</span> walk in just days
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 8px",
                      border: "none",
                      marginTop: "23px",
                      marginBottom: "23px",
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
                        marginLeft: "106px",
                        height: "25px",
                      }}
                    />
                  </button>
                </li>
                <li>
                  {" "}
                  <hr className="mb-6"/>
                  <h2>
                    3 <span>Why Robots Might be the</span> <br />{" "}
                    <span className="ml-8">Future of work</span>
                  </h2>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 8px",
                      border: "none",
                      marginTop: "23px",
                      marginBottom: "23px",
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
                        marginLeft: "106px",
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
