import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-4">
      <h1 className="uppercase text-2xl font-extrabold my-6 mb-10 text-[#333]">
        Shopping Cart
      </h1>
      {total > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-4 border-b-2 pb-3 border-[#555]/20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 object-cover"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="font-bold mb-1">${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({ index, quantity: e.target.value })
                    )
                  }
                  className="w-16 rounded-md border border-gray-300 p-1"
                />
                <button
                  onClick={() => dispatch(removeFromCart(index))}
                  className="ml-2 bg-red-800 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2 className="font-semibold mt-10 mb-6">
            Total : <span className="ml-1 text-3xl font-bold">${total}</span>
          </h2>
        </div>
      ) : (
        <p className="font-semibold text-[#333]">Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
