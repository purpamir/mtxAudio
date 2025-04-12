// src/components/Footer.js
import React from "react";
import footerLogo from "../assets/images/vans-footer-logo.png";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="py-3 bg-red-800 uppercase mt-4 flex flex-col justify-center items-center gap-3">
        <span className="font-semibold text-white/90">
          Become a member and get 15% off
        </span>
        <button className="rounded-md text-[#222] uppercase font-bold bg-white px-8 py-1 text-lg">
          join us now
        </button>
      </div>
      <nav className="flex flex-col justify-center items-start gap-2 px-4 bg-[#222] text-white/90 py-3 font-bold text-sm">
        <div className="flex w-full items-center justify-between border-b-2 pb-1">
          <button className="uppercase pb-1">shop</button>
          <FaPlus />
        </div>
        <div className="flex w-full items-center justify-between border-b-2 pb-1">
          <button className="uppercase pb-1">brand</button>
          <FaPlus />
        </div>
        <div className="flex w-full items-center justify-between border-b-2 pb-1">
          <button className="uppercase pb-1">help</button>
          <FaPlus />
        </div>
        <div className="flex w-full items-center justify-between mb-3">
          <button className="uppercase pb-1">contact</button>
          <FaPlus />
        </div>
        <div className="flex w-full items-center justify-center">
          <button className="uppercase bg-red-800 px-10 py-2 font-bold rounded-md text-base w-full">
            find a store
          </button>
        </div>
      </nav>
      <div className="bg-[#222] text-white p-4 text-center">
        <img src={footerLogo} className="place-self-center" />
        <p className="text-xs mt-[3px] font-bold text-white/80">
          © Vans, Part of GMG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
