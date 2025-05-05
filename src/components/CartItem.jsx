import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity, removeCartItem } from "../redux/cartSlice";

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity || 1);

  const dispatch = useDispatch();
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );

  const handleIncrease = () => {
    const newQuant = quantity + 1;
    setQuantity(newQuant);
    dispatch(updateItemQuantity({ id: cartItem.id, quantity: newQuant }));
  };

  const handleDecrease = () => {
    if (cartItem.quantity > 1) {
      const newQuant = quantity - 1;
      setQuantity(newQuant);
      dispatch(updateItemQuantity({ id: cartItem.id, quantity: newQuant }));
    }
  };

  const handleRemove = () => {
    dispatch(removeCartItem(cartItem.id));
  };

  return (
    <div
      className={`flex items-center justify-between p-6 rounded-lg shadow-lg transition-all duration-300 ${
        isLightTheme
          ? "bg-white text-gray-800 border border-gray-200 hover:shadow-2xl"
          : "bg-gray-900 text-gray-100 border border-gray-700 hover:shadow-2xl"
      }`}>
      <div className="flex items-center space-x-6">
        <img
          src={cartItem.images[0]}
          alt={cartItem.name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
        />
        <div>
          <h3 className="font-semibold text-lg">{cartItem.name}</h3>
          <p
            className={`text-sm ${
              isLightTheme ? "text-gray-500" : "text-gray-400"
            }`}>
            ${cartItem.price}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleDecrease}
          className={`px-3 py-2 rounded-lg transition-all duration-200 ${
            isLightTheme
              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
              : "bg-gray-700 hover:bg-gray-600 text-gray-100"
          }`}>
          -
        </button>
        <span className="font-medium text-lg">{quantity}</span>
        <button
          onClick={handleIncrease}
          className={`px-3 py-2 rounded-lg transition-all duration-200 ${
            isLightTheme
              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
              : "bg-gray-700 hover:bg-gray-600 text-gray-100"
          }`}>
          +
        </button>
      </div>
      <button
        onClick={handleRemove}
        className={`px-5 py-2 rounded-lg transition-all duration-200 mx-4 ${
          isLightTheme
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
