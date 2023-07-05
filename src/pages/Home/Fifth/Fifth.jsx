import React, { useState } from "react";
import person1 from "../../../assets/person.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import quote1 from "../../../assets/quote.png";
import quote2 from "../../../assets/quote.png";
import quote3 from "../../../assets/quote.png";
import { FaStar } from "react-icons/fa";
import "./Fifth.css";
import Container from "../../Container";

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
      background: "bg-white",
      content:
        "The second vision, known as the connectionist approach, sought to achieve intelligence through learning. Proponents of this approach, most prominently Frank Rosenblatt, sought to connect Perceptron in ways inspired.",
      person: person2,
      quote: quote2,
    },
    {
      background: "bg-white",
      content:
        "The second vision, known as the connectionist approach, sought to achieve intelligence through learning. Proponents of this approach, most prominently Frank Rosenblatt, sought to connect Perceptron in ways inspired.",
      person: person3,
      quote: quote3,
    },
  ];

  const handlePreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <Container>
      <div className="hidden lg:grid justify-center">
        <div
          className={`fifth mt-36 flex flex-col md:flex-row ml-6 md:ml-36 mr-6 md:mr-36 ${slides[currentSlide].background}`}
        >
          <div className="md:mr-36">
            <div className="relative">
              <img
                className="person"
                src={slides[currentSlide].person}
                alt=""
              />
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
                marginTop: "6%",
                marginBottom: "24px",
              }}
              className="text-2xl md:text-4xl"
            >
              Feedback on beautiful <br /> digital products
            </h2>
            <p
              style={{
                height: "90px",
                width: "563px",
              }}
              className="mb-8"
            >
              {slides[currentSlide].content}
            </p>
            <div className="flex items-center">
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
            <div className="flex mt-16">
              <button
                className="bg-blue-300 hover:bg-blue-500  text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
                onClick={handlePreviousSlide}
              >
                &lt;
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-500  text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={handleNextSlide}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden mb-80 mt-64">
        <div
          className={` mt-36 flex flex-col  ${slides[currentSlide].background}`}
        >
          <div className="md:mr-36">
            <div className="relative">
              <img className="mx-auto w-[250px]" src={slides[currentSlide].person} alt="" />
              <img
                className="quote-sm absolute top-1/2 right-12 transform -translate-y-1/2"
                src={slides[currentSlide].quote}
                alt=""
              />
            </div>
            <div className="flex ml-[150px] mt-[12px]">
              <button
                className="bg-blue-300 hover:bg-blue-500  text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
                onClick={handlePreviousSlide}
              >
                &lt;
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={handleNextSlide}
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="fs-sm p-8  flex flex-row">
            <div>
              <h2
                style={{
                  color: "var(--dark-80, #3C3C3C)",
                  fontSize: "28px",
                  fontFamily: "Manrope",
                  marginTop: "6%",
                  marginBottom: "14px",
                }}
                className="text-2xl"
              >
                Feedback on beautiful <br /> digital products
              </h2>
              <p
                style={{
                  height: "90px",
                  width: "263px",
                }}
                className="mb-8"
              >
                {slides[currentSlide].content}
              </p>
            </div>
            <div className="flex flex-col items-center mt-6 ">
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
           
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Fifth;

// btn for sm screen
{
  /* <div className="flex ">
<button
  className="bg-blue-300 hover:bg-blue-500  text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
  onClick={handlePreviousSlide}
>
  &lt;
</button>
<button
  className="bg-blue-300 hover:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
  onClick={handleNextSlide}
>
  &gt;
</button>
</div> */
}
