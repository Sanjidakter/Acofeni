import React from "react";
import "./Second.css";
import img from "../../../assets/humanrob.png";
import sbg from "../../../assets/sbg.png";
import Container from "../../Container";
const Second = () => {
  return (
    <Container>
      <div className="second mb-16 mt-60 flex flex-col lg:flex-row ">
      <div className="ml-36">
        <h2
          style={{
            color: "var(--dark-80, #3C3C3C)",
            fontSize: "48px",
            fontFamily: "Manrope",
          }}
        >
          Bringing data science & analytics to business
        </h2>
        <p>
          Artificial beings with intelligence appeared as storytelling devices
          in antiquity,and have been common in fiction, as in Mary.
        </p>
        <ul className="circle-list mt-8">
          <li className="mb-8 ">
            <div  class="circle">
              <span class="tick">&#10003;</span>
            </div>
            The second vision, known as the connectionist approach
          </li>
          <li className="mb-8">
            <div class="circle">
              <span class="tick">&#10003;</span>
            </div>
            The second vision, known as the connectionist approach
          </li>
          <li>
            <div class="circle">
              <span class="tick">&#10003;</span>
            </div>
            The second vision, known as the connectionist approach
          </li>
        </ul>
        <button
          className="mt-12"
          style={{
            display: "inline-flex",
            padding: "19px 35px",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: " 16px",
            border: "1px solid var(--primary-1, #3D88F5)",
          }}
        >
          Learn More
        </button>
      </div>
      <div style={{ marginRight: "105px" }} class="container">
        <img class="image" src={img} alt="Main Image" />
        <img class="overlay-image" src={sbg} alt="Overlay Image" />
      </div>
    </div>
    </Container>
  );
};

export default Second;
