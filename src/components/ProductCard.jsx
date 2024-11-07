import React from 'react'
const ProductCard = ({ data }) => {
  return (
    <div className='h-80 w-44 flex items-center flex-col gap-2 flex-shrink-0 hover:border-2 border-orange-400 cursor-pointer'>
      {/* Image section */}
      <div className='h-4/6 p-2 flex-shrink-0'>
        {/* Display product image with a fallback if image is missing */}
        <img className='h-full rounded-lg' src={data?.image} alt='Img' />
      </div>
      {/* Brand text, truncating to 10 characters */}
      <p className='text-sm text-gray-400 font-semibold'>{data?.brand?.substr(0, 10)}</p>
      {/* Title text, truncating if it's longer than 10 characters */}
      <p>{data?.title?.substr(0, 10) + '...'}</p>
      {/* Price and Ratings section */}
      <div className='flex w-full px-5 justify-between text-orange-400 font-semibold'>
        <p>₹{data?.price}</p>
        {/* Display product rating, defaulting to 4 stars if no rating is available */}
        <p>+{4 || data?.ratings}★</p>
      </div>
    </div>
  )
}

export default ProductCard