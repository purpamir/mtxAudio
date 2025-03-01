import React, { useState } from "react";
import headerlogo from "../images/header_logo.png";
import Navbar from "./Navbar";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const navbarHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <header className="relative  bg-gradient-to-b from-red-700 to-red-800 w-full flex justify-between items-center px-1 md:px-4 lg:px-18">
        <img src={headerlogo} className="h-11 my-[2px] lg:h-14" />
        <button onClick={navbarHandler}>
          <TiThMenu className="md:hidden w-10 h-7 fill-gray-100" />
        </button>
        <nav className="transition-all tracking-tighter text-[#fdfdfd] text-sm font-semibold hidden md:flex gap-5 justify-center items-center">
          <Link className="bg-gray-900 px-2 py-1 rounded-sm">Home</Link>
          <Link>News</Link>
          <Link>Products</Link>
          <Link>Sound Systems</Link>
          <Link>Tech&Support</Link>
          <Link>Contact</Link>
        </nav>
        {/* ********************* navBar ********************** */}
      </header>
      {navbar ? <Navbar className="" /> : ""}
    </>
  );
};

export default Header;
