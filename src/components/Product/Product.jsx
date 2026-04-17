import React from 'react';
import { Link } from 'react-router';

const Product = ({product}) => {
    
    const {_id, title, price_min, price_max,image } = product;
    return (
      <div className="card bg-base-100  shadow-sm p-4">
        <figure className="h-70">
          <img src={image} className="w-full h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className='text-primary font-medium'>
            price: {price_min} - {price_max}
          </p>
          <div className="card-actions w-full">
            <Link to={`/productDetails/${_id}`} className="btn border-primary w-full bg-white text-primary">View Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Product;