import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState();
  const { data } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data && data.products) {
      const item = data.products.filter((product) => product.id == id);
      setProduct(item[0]);
      const image0 = item[0].images[0];
      setImage(image0);
    }
  }, [data, id]);

  const dispatch = useDispatch();
  function handleAddToCartBtn() {
    dispatch(addItemToCart(product));
  }

  return (
    <div
      className={`p-6 min-h-screen ${
        isLightTheme ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-100"
      }`}>
      <div
        className={`flex max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden ${
          isLightTheme ? "bg-white" : "bg-gray-800"
        }`}>
        <img
          src={image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Rating: <span className="font-medium">{product.rating}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Stock: <span className="font-medium">{product.stock}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: <span className="font-medium">{product.category}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Return policy:{" "}
            <span className="font-medium">{product.returnPolicy}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Shipping Information:{" "}
            <span className="font-medium">{product.shippingInformation}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Warranty Information:{" "}
            <span className="font-medium">{product.warrantyInformation}</span>
          </p>
          <br />
          <p
            className={`mb-4${
              isLightTheme ? " text-gray-500" : " text-gray-100"
            }`}>
            Description:
            <br />
            {product.description}
          </p>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCartBtn}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              isLightTheme
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
