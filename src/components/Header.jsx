import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import hamburgMenu from '../assets/hamburgMenu.png'
const Header = () => {
    // State to control mobile navigation visibility    
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        // Main container for header with flex layout
        <div className='h-fit md:h-16 w-full bg-bgColor flex gap-10 p-3 lg:px-12 items-center justify-between'>
            
            {/* Logo section with link to homepage */}
            <div className='h-full w-36 flex items-center font-extrabold'>
                <Link to={'/'} className='text-4xl'>Shop</Link>
            </div>
            
            {/* Hamburger menu icon for mobile devices */}
            <p className='h-fit  w-fit px-3 py-2 text-2xl font-bold text-white flex rounded-md bg-orange-400 items-center justify-center lg:hidden' onClick={() => setIsNavOpen(!isNavOpen)}><img src={hamburgMenu} alt='Menu'/></p>
            
            {/* Mobile Navigation: Shows when isNavOpen is true */}
            {
                isNavOpen && <Navigation trigger={isNavOpen} setTrigger={setIsNavOpen} />
            }


            {/* Desktop Navigation: links to Home and Products pages */}
            <div className='hidden h-full w-fit lg:flex gap-20 items-center text-lg'>
                <Link to="/">
                    <p className='font-bold hover:underline'>Home</p>
                </Link>
                <Link to="/shop">
                    <p className='font-bold hover:underline'>Products</p>
                </Link>
            </div>

             {/* Cart icon displayed on desktop */}
            <div className='hidden lg:block'>
                {
                    <Link to='/cart'><img className='w-10' src='./cartItem.svg' alt='cart' /></Link>             
                }
            </div>
        </div>
    )
}

export default Header