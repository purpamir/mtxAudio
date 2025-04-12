import React from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 m-7 border-gray-300/30 border-2 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover mb-6"
      />
      <div className="flex justify-start items-center gap-[7px] mb-4">
        <span
          className={
            product.id === 1
              ? "bg-red-600 w-3 h-3 rounded-full"
              : product.id === 2
              ? "w-3 h-3 bg-green-600 rounded-full"
              : product.id === 3
              ? " w-3 h-3 bg-indigo-600 rounded-full"
              : product.id === 4
              ? " w-3 h-3 bg-pink-600 rounded-full"
              : ""
          }
        ></span>
        <span
          className={
            product.id === 1
              ? "bg-gray-600 rounded-full w-3 h-3"
              : product.id === 2
              ? "w-3 h-3 bg-cyan-600 rounded-full"
              : product.id === 3
              ? " w-3 h-3 bg-orange-500 rounded-full"
              : product.id === 4
              ? " w-3 h-3 bg-pink-600 rounded-full"
              : ""
          }
        ></span>
        <span
          className={
            product.id === 1
              ? "bg-lime-800 w-3 h-3 rounded-full"
              : product.id === 2
              ? "w-3 h-3 bg-white border-2 rounded-full"
              : product.id === 3
              ? " w-3 h-3 bg-gray-600 rounded-full"
              : product.id === 4
              ? " w-3 h-3 bg-red-600 rounded-full"
              : ""
          }
        ></span>
      </div>
      <div className="h-20">
        <h2 className="text-xl my-2 leading-6 font-semibold text-[#222]">
          {product.name}
        </h2>
        <p className="text-gray-500 font-semibold">${product.price}</p>
      </div>
      <button
        onClick={() =>
          dispatch(
            addToCart(product),
            toast.success(`${product.name} Added to your cart.`, {
              position: "bottom-right",
              autoClose: 1500,
              style: {
                // padding: "50px",
                width: "80%",
                margin: "12px",
                marginBottom: "30px",
                borderRadius: "10px",
                fontSize: "18px",
                background: "#daf0de",
                color: "#444",
                fontWeight: "600",
                textAlign: "left",
                overflow: "hidden",
              },
            })
          )
        }
        className="mt-4 bg-[#333] hover:bg-red-800 cursor-pointer text-white py-3 px-3 rounded w-full font- uppercase"
      >
        <div className="flex tracking-wider justify-center items-center gap-4">
          <p className="mt-[2px]">Add to Cart</p>
          <FaCartPlus />
        </div>
      </button>
      <ToastContainer />
    </div>
  );
};

export default Product;
