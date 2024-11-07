import React from 'react'
import { Link } from 'react-router-dom'
const MainHome = () => {
    return (
        // Main container with flex layout for responsive design 
        <div className='w-screen h-fit p-3 lg:px-12 bg-bgColor flex'>
            {/* Left side content (text and shop button) */}
            <div className='h-full w-full md:w-1/2 py-10 flex flex-col gap-10 justify-center ' >
                
                {/* Main heading */}
                <h1 className='text-6xl font-semibold text-center leading-tight'>
                    Shop Smarter, Live Better 
                </h1>

                {/* Subheading text */}
                <p className='text-center'>– Unbeatable Deals at Your Fingertips!</p>

                {/* Link to the shop page */}
                <Link to='/shop'>
                    <div className='px-5 flex flex-col items-center '>
                        <div className='w-full md:w-1/2 h-12 border-2 border-black rounded-3xl flex items-center justify-between overflow-hidden '>
                            <p className='px-10 font-semibold'>Enter</p>
                            <div className='w-12 flex items-center justify-center h-full font-bold text-xl bg-black text-white rounded-full'>→</div>
                        </div>
                        <div className='w-full pb-5'>
                            <p className='text-center'>+500 reviews</p>
                        </div>
                        {
                           <p className='text-2xl  font-semibold underline'>Go to Shop →</p> 
                        }
                    </div>
                </Link>
            </div>
            {/* Right side content (image on large screens) */}
            <div className='hidden w-full lg:w-1/2 lg:flex justify-center items-center'>
                <img className='w-2/3 h-full flex items-center justify-center' src='./MainImage.png' alt='MainImg' />
            </div>
        </div>
    )
}

export default MainHome