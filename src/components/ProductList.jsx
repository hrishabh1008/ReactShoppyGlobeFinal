import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch'
import ProductItem from './ProductItem';
const ProductList = () => {


const {data, loading, error } = useFetch("https://dummyjson.com/products");
console.log(data, loading, error)

  const [productsData, setProductsData] = useState([]);

  useEffect(() => { 
    if (data && data.products) {
      setProductsData(data.products);
    }
  }, [data]);
  
  


  return (
    <>
      <div className='flex flex-wrap gap-2 justify-evenly'>


      {productsData.map(product => <ProductItem product={product } />)}
      </div>
    
    </>
  )
}

export default ProductList