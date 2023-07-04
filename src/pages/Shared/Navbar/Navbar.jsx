import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import name from '../../../assets/I Acofeni.svg'
import Container from "../../Container";

const Navbar = () => {
  return (
    <>
     <Container>
    <div className="hidden lg:grid">
    <div className="navbar p-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <a>Our Team</a>
          </li>

          <li>
            <a>Technology </a>
          </li>
          <li>
            <a>Solution </a>
          </li>
          <li>
            <a>Community</a>
          </li>
          </ul>
        </div>
        <Link to='/'>
            <img src={logo} alt="" />
    
        </Link>
        <a className="font-bold" href="">Acofeni</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          style={{
            color: "var(--dark-60, #6A6A6A)",
            fontSize: "18px",
            fontFamily: "Manrope",
          }}
          className="menu menu-horizontal px-1"
        >
          <li>
            <a>Our Team</a>
          </li>

          <li>
            <a>Technology </a>
          </li>
          <li>
            <a>Solution </a>
          </li>
          <li>
            <a>Community</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          style={{
            padding: "19px 35px",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: "16px",
            background: "var(--primary-1, #3D88F5)",
          }}
          className="btn text-white"
        >
          Contact Now
        </a>
      </div>
    </div>
    </div>
    
   </Container>
    <div className=" lg:hidden">
    <div className="navbar p-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <a>Our Team</a>
          </li>

          <li>
            <a>Technology </a>
          </li>
          <li>
            <a>Solution </a>
          </li>
          <li>
            <a>Community</a>
          </li>
          </ul>
        </div>
        <Link to='/'>
            <img src={logo} alt="" />
    
        </Link>
        <a className="font-bold" href="">Acofeni</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          style={{
            color: "var(--dark-60, #6A6A6A)",
            fontSize: "18px",
            fontFamily: "Manrope",
          }}
          className="menu menu-horizontal px-1"
        >
          <li>
            <a>Our Team</a>
          </li>

          <li>
            <a>Technology </a>
          </li>
          <li>
            <a>Solution </a>
          </li>
          <li>
            <a>Community</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          style={{
            padding: "9px 25px",
            alignItems: "flex-start",
            gap: "5px",
            borderRadius: "16px",
            background: "var(--primary-1, #3D88F5)",
          }}
          className="btn text-white"
        >
          Contact Now
        </a>
      </div>
    </div>
    </div>
    </>
  
  );
};

export default Navbar;
