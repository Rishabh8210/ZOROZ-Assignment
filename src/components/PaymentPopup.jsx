import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const PaymentPopup = () => {

    return (
        <div className='min-h-[50vh] w-full flex flex-col justify-center items-center  gap-5'>
            {/* Display the thank you image */}
            <img className='w-28' src='./thankyou.png' alt='Thank you' />
            {/* Heading text for thank you message */}
            <h3 className='text-6xl font-semibold'>Thank you </h3>
            {/* Subheading text for order confirmation */}
            <p className='text-3xl'>Your order has been received</p>
            {/* Button to navigate back to homepage */}
            <div className='h-fit w-full p-5 flex flex-col justify-center items-center gap-5 md:flex-row'>
                <Link className='w-fit bg-orange-400 hover:bg-orange-700 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110' to={'/'}> Go to Homepage</Link>
            </div>
        </div>
    )
}

export default PaymentPopup;
