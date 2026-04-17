import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData(); // fetched JSON from loader

  

    console.log(product)
  return (
    <div className="max-w-4xl mx-auto my-10 p-5 border rounded shadow">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded mb-4"
      />
      <p>{product.description}</p>
      <p>
        Price: {product.price_min} - {product.price_max}
      </p>
      <p>Location: {product.location}</p>
      <p>Condition: {product.condition}</p>
    </div>
  );
};

export default ProductDetails;
