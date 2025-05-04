import React from 'react';

const ProductItem = ({ product }) => {
  console.log(product);

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="w-sm h-sm border-2 border-[#005f73] rounded-lg overflow-hidden shadow-lg bg-[#dff1ee] text-[#e9d8a6]">
      <img
        src={product.images[0]}
        alt="product"
        className="w-full h-sm object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#033d2a]">
          {product.title}{' '}
          <span className="text-sm text-[#ee9b00] block">Rating: {product.rating}</span>
        </h2>
        <p className="text-sm mt-2">
          <span className="block text-[#ca6702]">{product.availabilityStatus}</span>
          <span className="block text-[#bb3e03]">{product.shippingInformation}</span>
          <span className="block text-[#ae2012]">{product.returnPolicy}</span>
        </p>
        <p className="text-sm mt-2 text-[#9b2226]">
          {isExpanded ? product.description : `${product.description.slice(0, 100)}...`}
          {product.description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#005f73] ml-2 underline"
            >
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;