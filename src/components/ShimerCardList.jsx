import React from 'react'
import ShimerCard from './ShimerCard'
const ShimerCardList = () => {
  // Create an array with 10 null values, each representing a loading skeleton (shimmer effect)
  const shimerCount = new Array(10).fill(null)
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' >
        {/* Map through the shimerCount array to render 10 ShimmerCard components */}
        {
          shimerCount.map((d, ind) => {
              return <ShimerCard key={ind} />
          })
        }  
    </div>
  )
}

export default ShimerCardList