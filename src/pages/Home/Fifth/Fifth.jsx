import React from "react";
import person from "../../../assets/person.png";
import quote from "../../../assets/quote.png";
import { FaStar } from "react-icons/fa";

const Fifth = () => {
  return (
    <div className="flex flex-row ml-36">
      <div className="mr-36">
        <div className="relative">
          <img className="person" src={person} alt="" />
          <img
            className="quote absolute top-1/2 -right-12 transform -translate-y-1/2"
            src={quote}
            alt=""
          />
        </div>
      </div>

      <div className="fs">
        <h2
        style={{
            color: "var(--dark-80, #3C3C3C)",
fontSize: "48px",
fontFamily:"Manrope",
        }}
        >Feedback on beautiful <br /> digital products</h2>
        <p className="mb-8">
          The second vision, known as the connectionist approach, sought to
          achieve <br /> intelligence through learning. Proponents of this approach,
          most prominently <br />Frank Rosenblatt, sought to connect Perceptron in
          ways inspired.
        </p>
        <div className=" items-center">
  <p className="mr-2">
    <small>Designer Chowder</small>
  </p>
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <FaStar key={index} className="text-yellow-500 mr-1" style={{ color: "#F2950D" }} />
    ))}
  </div>
</div>
<div className="flex  mt-4">
  <button className="bg-blue-300 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
    &lt;
  </button>
  <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
    &gt;
  </button>
</div>

      </div>
    </div>
  );
};

export default Fifth;
