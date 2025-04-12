import React from "react";
import Product from "../components/Product";
import { href, Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import heroMobile from "../assets/images/hero-mobile.jpg";
import style1 from "../assets/images/styles/style-1.png";
import style2 from "../assets/images/styles/style-2.png";
import style3 from "../assets/images/styles/style-3.png";
import style4 from "../assets/images/styles/style-4.png";
import style5 from "../assets/images/styles/style-5.png";
import style6 from "../assets/images/styles/style-6.png";
import home1 from "../assets/images/ss25.jpg";
import home2 from "../assets/images/knuskool.jpg";
import home3 from "../assets/images/xliberaiders.jpg";
import OldSkool from "./OldSkool";

const Home = () => {
  return (
    <div>
      <div className="grid scroll-m-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <img src={hero} /> */}
        <h2 className="text-3xl font-extrabold mt-1 -mb-2 tracking-tight">
          ALWAYS PUSHIN'
        </h2>
        <p className="text-base leading-7 mb-2 font-semibold">
          FROM SKATEBOARDING TO ART AND EVERYTHING IN-BETWEEN, THE GOOD STUFF
          HAPPENS WHEN YOU PUSH.
        </p>
        <img src={heroMobile} className="rounded-md" />
        <h2 className="p-1 text-3xl tracking- font-extrabold mt-7">
          SELECT YOUR STYLE
        </h2>
        <div className="grid grid-cols-2 rounded-xl gap-y-1 overflow-hidden items-center justify-center mb-6">
          <img className="p-1 rounded-lg" src={style1} />
          <Link to="/oldskool">
            <img className="p-1 rounded-lg" src={style2} />
          </Link>
          <img className="p-1 rounded-lg" src={style3} />
          <img className="p-1 rounded-lg" src={style4} />
          <img className="p-1 rounded-lg" src={style5} />
          <img className="p-1 rounded-lg" src={style6} />
        </div>
        <h2 className="text-3xl font-extrabold mt-5 mb-1 tracking-tight">
          NEW ARRIVALS
        </h2>
        <figure className="text-center mb-3">
          <img src={home1} className="rounded-md" />
          <h3 className="mt-2 mb-4 text-xl font-bold text-[#222]">VANS SS25</h3>
          <Link
            to={""}
            className="rounded-md tracking-wide font-semibold text-white/90 bg-[#222] text-lg px-4 py-2 "
          >
            SHOP NOW
          </Link>
        </figure>
        <figure className="text-center mb-3">
          <img src={home2} className="rounded-md" />
          <h3 className="mt-2 mb-4 text-xl font-bold text-[#222]">VANS SS25</h3>
          <Link
            to={""}
            className="rounded-md tracking-wide font-semibold text-white/90 bg-[#222] text-lg px-4 py-2 "
          >
            SHOP NOW
          </Link>
        </figure>
        <figure className="text-center mb-3">
          <img src={home3} className="rounded-md" />
          <h3 className="mt-2 mb-4 text-xl font-bold text-[#222]">VANS SS25</h3>
          <Link
            to={""}
            className="rounded-md tracking-wide font-semibold text-white/90 bg-[#222] text-lg px-4 py-2 "
          >
            SHOP NOW
          </Link>
        </figure>
      </div>
      {/* <h2>Family</h2>
      <Link>Authentic</Link>
      <Link to="./old-school">Old Skool</Link>
      <Link>Slip-On</Link>
      <h2>Style</h2>
      <Link>Low Top</Link>
      <Link>High Top</Link>
      <Link>Platforms</Link> */}
    </div>
  );
};

export default Home;
