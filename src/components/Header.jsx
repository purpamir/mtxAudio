import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoBlack from "../assets/images/logo-black.jpg";
import logoWhite from "../assets/images/logo-white.jpg";
import { FaQuestionCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex flex-col items-center justify-center">
      <div className="bg-white/90 text-gray-900 px-7 py-3 flex justify-between items-center">
        <img src={logoBlack} className="w-1/4" />
        {/* ********************************************************* */}
        {/* ********************  MAIN NAV  ************************ */}
        {/* ********************************************************* */}
        <nav className="flex items-center gap-4">
          <Link to="/contact-us">
            <FaQuestionCircle className="w-5 h-5 fill-[#333] transition-all hover:fill-red-800" />
          </Link>

          <Link to="">
            <FaUser className="w-4 h-4 fill-[#333] transition-all hover:fill-red-800" />
          </Link>

          <Link to="/">
            <FaHome className="w-5 h-5 fill-[#333] transition-all  hover:fill-red-800" />
          </Link>

          <div className="relative">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="w-5 h-4 fill-[#333] transition-all hover:fill-red-800" />
            </Link>
            {cartItemCount > 0 && (
              <span
                className={
                  cartItemCount > 9
                    ? "absolute top-0 left-0 inline-flex items-center justify-center py-1 px-1 text-[13px] font-bold leading-none text-white/90 bg-red-800 rounded-full transform translate-x-3 -translate-y-2"
                    : "absolute top-0 left-0 inline-flex items-center justify-center py-1 px-[8px] text-[13px] font-bold leading-none text-white/90 bg-red-800 rounded-full transform translate-x-3 -translate-y-2"
                }
              >
                {cartItemCount}
              </span>
            )}
          </div>
        </nav>
      </div>
      {/* ********************************************************* */}
      {/* ********************  SECOND NAV  ************************ */}
      {/* ********************************************************* */}
      <nav className="flex self-stretch items-center justify-center uppercase text-white/90 bg-[#222] font-semibold text-[13px] gap-5 py-3">
        <Link className="hover:text-red-800 transition-all">new arrivals</Link>
        <Link className="hover:text-red-700 transition-all">Men</Link>
        <Link className="hover:text-red-700 transition-all">Women</Link>
        <Link className="hover:text-red-700 transition-all">kids</Link>
        <Link className="hover:text-red-700 transition-all">sale</Link>
        <Link className="hover:text-red-700 transition-all">skate</Link>
      </nav>
    </header>
  );
};

export default Header;
