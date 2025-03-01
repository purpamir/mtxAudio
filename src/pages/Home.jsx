import React from "react";
import Layout from "../components/Layout";
import homeImg1 from "../images/stack1.jpg";

import gallery1 from "../images/products/1.jpg";
import gallery2 from "../images/products/2.jpg";
import gallery3 from "../images/products/3.jpg";
import gallery4 from "../images/products/4.jpg";
import gallery5 from "../images/products/5.jpg";
import gallery6 from "../images/products/6.jpg";
import gallery7 from "../images/products/7.jpg";
import gallery8 from "../images/products/8.jpg";
import gallery9 from "../images/products/9.jpg";
import gallery10 from "../images/products/10.jpg";
import gallery11 from "../images/products/11.jpg";
import gallery12 from "../images/products/12.jpg";

import news1 from "../images/mtxNews/3.jpg";
import news2 from "../images/mtxNews/2.jpg";
import news3 from "../images/mtxNews/5.jpg";
import news4 from "../images/mtxNews/7.jpg";
import news5 from "../images/mtxNews/8.jpg";
import news6 from "../images/mtxNews/6.jpg";

import popular1 from "../images/mtxPopular/1.jpg";
import popular2 from "../images/mtxPopular/2.jpg";
import popular3 from "../images/mtxPopular/3.jpg";
import popular4 from "../images/mtxPopular/4.jpg";
import popular5 from "../images/mtxPopular/5.jpg";
import popular6 from "../images/mtxPopular/6.jpg";
import popular7 from "../images/mtxPopular/7.jpg";
import popular8 from "../images/mtxPopular/8.jpg";

import install1 from "../images/mtxInstalls/1.jpg";
import install2 from "../images/mtxInstalls/2.jpg";
import install3 from "../images/mtxInstalls/3.jpg";
import install4 from "../images/mtxInstalls/4.jpg";
import install5 from "../images/mtxInstalls/5.jpg";
import install6 from "../images/mtxInstalls/6.jpg";

const Home = () => {
  return (
    <Layout>
      <section className="w-screen bg-gray-950">
        <div className="max-w-[1200px] mx-auto">
          <div className=" w-full border-t-2 border-gray-700 relative">
            <img
              src={homeImg1}
              className="h-60 lg:h-80 mx-auto object-cover lg:w-full"
            />
            <h2 className="lg:text-2xl font-bold w-full text-white text-xl leading-6 text-center px-7 py-4 lg:py-7 absolute top-1/2 -translate-y-1/2 bg-[#030303bd] ">
              TX465S & TX665S compo sets elected best product of the year
              <p className="lg:text-sm block text-xs text-red-600 mt-1">
                Our competitors dont like us very much...😉
              </p>
            </h2>
          </div>
          <h1 className="text-2xl tracking-tight text-white text-center bg-red-700 h-15 items-center flex justify-center font-bold">
            Products
          </h1>
          {/* products cards */}

          <div className="bg-gradient-to-b from-[#d2d2d2] to-[#bfbfbf] grid grid-cols-3 items-center py-5">
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery1}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                Home/StreetAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery2}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                StreetAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery3}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery4}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery5}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery6}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery7}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery8}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery9}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                CarAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery10}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                StreetWires
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery11}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                MarineAudio
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={gallery12}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                Motorsport
              </p>
            </div>
          </div>
          <h1 className="text-2xl tracking-tight text-white text-center bg-red-700 h-15 items-center flex justify-center font-bold">
            News
          </h1>
          {/* news */}
          <div className=" text-red-700 bg-gradient-to-b w-full from-[#d2d2d2] to-[#bfbfbf] grid grid-cols-1 py-5">
            <figure className="relative rounded-lg text-center bg-gray-100 m-3 pb-2">
              <img
                src={news6}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <span className="absolute text-gray-100 bg-red-700 rounded-[5px] rounded-bl-none rounded-br-none px-2 py-1 right-0 bottom-[120px] text-xs">
                Februarary 9, 2025
              </span>

              <h2 className="italic font-bold text-2xl">
                Test MTX re-Q @Car&Hifi
              </h2>
              <p className="italic font-bold text-lg">
                "MTX is back on top with the incredible iX4BT earphones"
              </p>
            </figure>

            <figure className="relative rounded-lg text-center bg-gray-100 m-3 pb-2">
              <img
                src={news3}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <span className="absolute text-gray-100 bg-red-700 rounded-[5px] rounded-bl-none rounded-br-none px-2 py-1 right-0 bottom-[80px] text-xs">
                December 18, 2024
              </span>

              <p className="italic font-bold text-lg">
                ZNXH2L, the New (Very) Smart High-Level Adapter
              </p>
            </figure>

            <figure className="relative rounded-lg text-center bg-gray-100 m-3 pb-2">
              <img
                src={news4}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <span className="absolute text-gray-100 bg-red-700 rounded-[5px] rounded-bl-none rounded-br-none px-2 py-1 right-0 bottom-[115px] text-xs">
                September 30, 2023
              </span>

              <p className="italic font-bold text-lg px-2">
                Loyd IVEY, who founded MTX and pioneered the caraudio industry,
                passed away...
              </p>
            </figure>

            <figure className=" relative rounded-lg text-center bg-gray-100 m-3 pb-2">
              <img
                src={news1}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <span className="absolute text-gray-100 bg-red-700 rounded-[5px] rounded-bl-none rounded-br-none px-2 py-1 right-0 bottom-[105px] text-xs">
                December 15, 2021
              </span>
              <p className="  font-bold">MTX TX465S separate speakers ranked</p>
              <h2 className="italic font-bold text-2xl">
                "Product of the Year"
              </h2>
              <p className="text-sm font-bold">
                Nope... you don't see double... 🤩
              </p>
            </figure>

            <figure className="relative rounded-lg text-center bg-gray-100 m-3 pb-2">
              <img
                src={news5}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <span className="absolute text-gray-100 bg-red-700 rounded-[5px] rounded-bl-none rounded-br-none px-2 py-1 right-0 bottom-[190px] text-xs">
                July 5, 2021
              </span>
              <p className="font-bold">
                Test report MTX iX4BT BLuetooth earphone @ T3
              </p>
              <h2 className="italic font-bold text-2xl">
                "MTX is back on top with the incredible iX4BT earphones"
              </h2>
            </figure>

            <figure className="relative rounded-lg text-center bg-gray-100 m-3 pb-2">
              <img
                src={news2}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <span className="absolute text-gray-100 bg-red-700 rounded-[5px] rounded-bl-none rounded-br-none px-2 py-1 right-0 bottom-[150.4px] text-xs">
                February 26, 2021
              </span>
              <p className="font-bold">
                Test MTX RTP8 powered enclosure @Car&Hifi:
              </p>
              <h2 className="italic font-bold text-2xl">
                "Price/Performance: EXCELLENT"
              </h2>
            </figure>
          </div>
          <h1 className="text-2xl tracking-tight text-white text-center bg-red-700 h-15 items-center flex justify-center font-bold">
            Popular Products
          </h1>
          {/* POPULAR PRODUCTS ***************** */}

          <div className="bg-gradient-to-b from-[#d2d2d2] to-[#bfbfbf] grid grid-cols-3 items-center py-5">
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular1}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                TX665S
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular2}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                RTU8P
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular3}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                TX465S
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular4}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                iX3BT
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular5}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                iX4BT
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular6}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                RTF10P
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular7}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                TX2275
              </p>
            </div>
            <div className="p-3 rounded-lg text-center">
              <img
                src={popular8}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                iX3
              </p>
            </div>
          </div>
          {/* REMARKABLE MTX INSTALLATIONS */}
          <h1 className="text-2xl py-12 tracking-tight text-white text-center bg-red-700 h-15 items-center flex justify-center font-bold">
            Remarkable MTX
            <br /> installations
          </h1>

          <div className="grid grid-cols-2 bg-gradient-to-b from-[#d2d2d2] to-[#bfbfbf] py-5">
            <figure className="p-3 rounded-lg text-center ">
              <img
                src={install1}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="h-26 flex items-center justify-center leading-4 text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                SQ (Sound quality) installation in a 1973 Mini Clubman
              </p>
            </figure>

            <figure className="p-3 rounded-lg text-center">
              <img
                src={install2}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="h-26 flex items-center justify-center leading-4 overflow-hidden text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                High Efficiency MTX RTX speakers, RFL amplifiers and TX8
                subwoofers in a Mercedes ML to defeat the competition (Russia)
              </p>
            </figure>

            <figure className="p-3 rounded-lg text-center">
              <img
                src={install3}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="h-26 flex items-center justify-center leading-4 overflow-hidden text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                Really Fu...g Loud MTX RFL amplifiers, TX8 speakers ans TX8
                subwoofers in a Nissan GTR (Australia){" "}
              </p>
            </figure>

            <figure className="p-3 rounded-lg text-center">
              <img
                src={install4}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="text-sm flex items-center justify-center   h-26 leading-4 overflow-hidden tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                Delicious in-ceiling MTX iWs80 speakers & iWa250 amplifiers
                sound systems @Hotel d'Alsace (France){" "}
              </p>
            </figure>

            <figure className="p-3 rounded-lg text-center">
              <img
                src={install5}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="h-26 flex items-center justify-center leading-4 overflow-hidden text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                Legendary SPL world record breaker Peugeot 205 "Red Noise"
                (France){" "}
              </p>
            </figure>

            <figure className="p-3 rounded-lg text-center">
              <img
                src={install6}
                className="rounded-lg rounded-br-none rounded-bl-none"
              />
              <p className="h-26 flex items-center justify-center leading-4 overflow-hidden text-sm tracking-tight py-1 text-red-700 font-semibold bg-white rounded-b-lg shadow-lg">
                Jackhammer Hummer from JJ Hifi (Finland){" "}
              </p>
            </figure>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
