import React from 'react'
import { Link } from 'react-router-dom';

const ItemCard = ({prod}) => {
  return (
    // Link to the product details page using the product's id
    <Link to={`/products/${prod?.id}`}>
      {/* Card container with max width, rounded corners, and shadow */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">

        {/* Product image with an aspect ratio of 9:12 */}
        <img className="w-full aspect-[9/12]" src={prod?.image} alt={prod?.title} />

        {/* Card content for product title and brand */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{prod?.title}</div>
          <p className="text-gray-700 text-base">
            by {prod?.brand}
          </p>
        </div>

        {/* Pricing section: displaying original price (strikethrough) and discounted price */}
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><span className='line-through text-gray-400 px-2'>₹{(prod?.price * 1.1).toFixed(2)}</span> ₹{prod?.price}</span>
        </div>
        
        {/* Add to Cart button */}
        <div className="px-6 pt-4 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >
            Add to Cart
          </button>
        </div>
        
      </div>
      </Link>
    );
}

export default ItemCard

