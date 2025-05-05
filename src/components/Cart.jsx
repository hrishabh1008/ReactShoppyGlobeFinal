import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );
  // console.log(isLightTheme);
  const cartItems = useSelector((store) => store.cartSlice.items);

  return (
    <div
      className={`min-h-screen p-6 ${
        isLightTheme ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-100"
      }`}>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                isLightTheme ? "bg-white" : "bg-gray-800"
              }`}>
              <CartItem cartItem={item} />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p
                  className={`text-sm ${
                    isLightTheme ? "text-gray-600" : "text-gray-400"
                  }`}>
                  Quantity: {item.quantity}
                </p>
                <p
                  className={`text-sm ${
                    isLightTheme ? "text-gray-600" : "text-gray-400"
                  }`}>
                  Price: ${item.price}
                </p>
              </div>
              <div className="text-lg font-bold">
                ${item.quantity * item.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
