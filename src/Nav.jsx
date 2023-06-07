import React, { useState } from "react";
import mrutopia from "./assets/mr.utopia.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div className="fixed top-0 z-50 w-full h-[50px] flex justify-between items-center px-4  bg-[#000] text-white">
        <img src={mrutopia} alt="business logo" className="w-[100px] pt-6" />

        {/* Menu */}
        <ul className="hidden md:flex">
          <Link to="about" smooth={true} duration={500}>
            <li className="ml-10 text-sm uppercase cursor-pointer">About</li>
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <li className="ml-10 text-sm uppercase cursor-pointer">Services</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li className="ml-10 text-sm uppercase cursor-pointer">Contact</li>
          </Link>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 pr-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center"
          }
        >
          <div>
            <img src={mrutopia} alt="logo" style={{ width: "120px" }} />
          </div>

          <li className="py-6 text-4xl uppercase">
            <Link onClick={handleClick} to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl uppercase">
            <Link
              onClick={handleClick}
              to="services"
              smooth={true}
              duration={300}
            >
              Services
            </Link>
          </li>

          <li className="py-6 text-4xl uppercase">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={300}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
