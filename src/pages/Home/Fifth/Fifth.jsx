import React, { useState } from "react";
import person1 from "../../../assets/person.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import quote1 from "../../../assets/quote.png";
import quote2 from "../../../assets/quote.png";
import quote3 from "../../../assets/quote.png";
import { FaStar } from "react-icons/fa";
import './Fifth.css'

const Fifth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      background: "bg-white",
      content:
        "The second vision, known as the connectionist approach, sought to achieve intelligence through learning. Proponents of this approach, most prominently Frank Rosenblatt, sought to connect Perceptron in ways inspired..",
      person: person1,
      quote: quote1,
    },
    {
      background: "bg-blue-300",
      content:
        "The second vision, known as the connectionist approach, sought to achieve intelligence through learning. Proponents of this approach, most prominently Frank Rosenblatt, sought to connect Perceptron in ways inspired.",
      person: person2,
      quote: quote2,
    },
    {
      background: "bg-green-300",
      content:
        "The second vision, known as the connectionist approach, sought to achieve intelligence through learning. Proponents of this approach, most prominently Frank Rosenblatt, sought to connect Perceptron in ways inspired.",
      person: person3,
      quote: quote3,
    },
  ];

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className={`fifth flex flex-row ml-36 mr-36 rounded-tl-24 ${slides[currentSlide].background}`}>
      <div className="mr-36">
        <div className="relative">
          <img className="person" src={slides[currentSlide].person} alt="" />
          <img
            className="quote absolute top-1/2 -right-12 transform -translate-y-1/2"
            src={slides[currentSlide].quote}
            alt=""
          />
        </div>
      </div>

      <div className="fs">
        <h2
          style={{
            color: "var(--dark-80, #3C3C3C)",
            fontSize: "48px",
            fontFamily: "Manrope",
          }}
        >
          Feedback on beautiful <br /> digital products
        </h2>
        <p className="mb-8">{slides[currentSlide].content}</p>
        <div className=" items-center">
          <p className="mr-2">
            <small>Designer Chowder</small>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="text-yellow-500 mr-1"
                style={{ color: "#F2950D" }}
              />
            ))}
          </div>
        </div>
        <div className="flex mt-4">
          <button
            className="bg-blue-300 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
            onClick={handlePreviousSlide}
          >
            &lt;
          </button>
          <button
            className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={handleNextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
