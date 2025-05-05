import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );

  

  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  // console.log(data, loading, error);

  const [productsData, setProductsData] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(searchText);
  useEffect(() => {
    if (data && data.products) {
      setProductsData(data.products);
    }
  }, [data, error, loading]);
  // console.log(productsData);

  useEffect(() => {
    if (searchText === "") {
      setFilteredProducts(productsData); // Show all products when search is empty
    } else {
      const filtered = productsData.filter(
        (product) =>
          product?.title.toLowerCase().includes(searchText.toLowerCase()) ||
          product?.category.toLowerCase().includes(searchText.toLowerCase()) ||
          product?.description
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product?.brand?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchText, productsData]);

  return (
    <div
      className={` min-h-screen p-4 ${
        isLightTheme ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"
      }`}>
      <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
      <div className="text-center p-4">
        <input
          type="text"
          className="border-2 rounded-full text-center bg-amber-50 w-2/5"
          placeholder="Search for Products"
          onChange={(e) => setSearchtext(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-evenly">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
