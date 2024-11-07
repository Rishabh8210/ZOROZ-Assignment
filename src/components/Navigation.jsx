import React from 'react'
import cross from '../assets/cross.png' // Importing the cross image for closing the mobile navigation
import { Link } from 'react-router-dom' // Importing Link for navigation

const Navigation = ({trigger, setTrigger}) => {
  return (
    <div className='z-50 h-screen w-screen fixed left-0 top-0 p-3 uppercase bg-white flex flex-col gap-5 items-center '>
      <div className=' w-full flex justify-end' onClick={() => setTrigger(!trigger)}>
        <button className='rounded-lg text-lg text-white bg-orange-400 font-bold'><img className='scale-90' src={cross} alt='X'/></button>
      </div>
      {/* Navigation Links Section */}
      <div className='py-10 flex flex-col gap-5 justify-center items-center'>
        <Link to='/'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>Home</h1></Link>
        <Link to='/shop'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>Shop</h1></Link>
        
        <Link to='/cart'><h1 className='text-4xl font-semibold text-orange-400' onClick={() => setTrigger(!trigger)}>Cart</h1></Link>
      </div>
    </div>
  )
}

export default Navigation