import React from "react";

const Navbar = () => {
  return (
    <div className="w-full ease-in-out transition-all">
      <ul className="absolute text-xs font-bold top-12 z-1 left-0 w-full flex flex-col text-[#fdfdfd] bg-[#777] items-start justify-stretch">
        <li className="bg-gray-950 w-full transition-all p-2">Home</li>
        <li className="p-2">News</li>
        <li className="p-2">Products</li>
        <li className="p-2">Sound Systems</li>
        <li className="p-2">Tech&Support</li>
        <li className="p-2">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
