import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../reduc/cartSlice";

const ProductItem = ({ product }) => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );

  const cartItem = useSelector((store) => store.cartSlice.items);
  console.log(cartItem);
  const dispatch = useDispatch();

  function handleAddToCartBtn() {
    dispatch(addItemToCart(product));
  }

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={`hover:shadow-lg hover:scale-101 w-xs h-sm border-2 rounded-lg overflow-hidden shadow-md ${
        isLightTheme
          ? "bg-white text-gray-800 border-gray-300"
          : "bg-gray-800 text-gray-200 border-gray-600"
      }`}>
      <img
        src={product.images[0]}
        alt="product"
        className="w-full h-sm object-cover"
      />
      <div className="p-4">
        <h2
          className={`text-lg font-bold ${
            isLightTheme ? "text-gray-900" : "text-gray-100"
          }`}>
          {product.title}
          <span
            className={`text-sm block ${
              isLightTheme ? "text-yellow-600" : "text-yellow-400"
            }`}>
            Rating: {product.rating}
          </span>
        </h2>

        <p className="text-sm mt-2">
          <span
            className={`block ${
              isLightTheme ? "text-orange-600" : "text-orange-400"
            }`}>
            {product.availabilityStatus}
          </span>
          <span
            className={`block ${
              isLightTheme ? "text-red-600" : "text-red-400"
            }`}>
            {product.shippingInformation}
          </span>
          <span
            className={`block ${
              isLightTheme ? "text-red-800" : "text-red-500"
            }`}>
            {product.returnPolicy}
          </span>
          <button
            className="border-2 bg-[#29b2c4] rounded-md w-full "
            onClick={handleAddToCartBtn}>
            Add to Cart
          </button>
        </p>
        <p
          className={`text-sm mt-2 ${
            isLightTheme ? "text-red-700" : "text-red-300"
          }`}>
          {isExpanded
            ? product.description
            : `${product.description.slice(0, 100)}...`}
          {product.description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`ml-2 underline ${
                isLightTheme ? "text-blue-700" : "text-blue-400"
              }`}>
              {isExpanded ? "View Less" : "View More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;