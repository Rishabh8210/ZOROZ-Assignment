import React from 'react'
const SaleBanner = () => {
  return (
    // Container for the sale banner with background and padding
    <div className='min-h-[50vh] w-full flex flex-col md:flex-row justify-center items-center p-16 gap-10 bg-gray-800'>
        {/* Left section with text content */}
        <div className='h-full w-full lg:w-1/2 flex flex-col gap-10'>
          {/* Main heading for the banner with large font size */}
          <p className='text-4xl font-semibold text-white'>
            Every Electorincs and Accessories
          </p>
          {/* Subheading with a bold, larger font size to highlight the discount */}
          <p className='text-6xl font-bold text-white'>
            Up to 40% off!
          </p>
        </div>
        {/* Right section with the sale image */}
        <div className='h-full w-full justify-center items-center lg:w-1/2'>
          {/* Image for the sale, with scale effect for responsiveness */}
          <img className='scale-110 lg:scale-100' src='./electornics.png' alt='SaleImage' />
        </div>
    </div>
  )
}

export default SaleBanner