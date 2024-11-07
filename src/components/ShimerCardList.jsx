import React from 'react'
import ShimerCard from './ShimerCard'
const ShimerCardList = () => {
  const shimerCount = new Array(10).fill(null)
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' >
        {
          shimerCount.map((d, ind) => {
              return <ShimerCard key={ind} />
          })
        }  
    </div>
  )
}

export default ShimerCardList