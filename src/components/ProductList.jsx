import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );

  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  console.log(data, loading, error);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    if (data && data.products) {
      setProductsData(data.products);
    }
  }, [data]);

  return (
    <div
      className={`min-h-screen p-4 ${
        isLightTheme ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"
      }`}>
      <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {productsData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
