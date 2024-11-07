import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'; // To access URL parameters
import { useDispatch } from 'react-redux'; // To dispatch actions to the Redux store
import { toast } from 'react-toastify'; // For displaying toast notifications
import { addItem } from '../utils/cartSlice'; // Importing action to add item to the cart
const ProductDetails = () => {
    const { id } = useParams() // Get product ID from the URL params

    const [detail, setDetail] = useState(null) // State to store product details
 
    const dispatch = useDispatch() // Redux dispatch to manage cart state
    const handeleAddItem = () => {
        dispatch(addItem(detail)) // Dispatching addItem action to add product to cart
        notify() // Show notification
    }

    useEffect(() => {
        fetchData(); // Fetch product details when component is mounted
    }, []) 

    // Function to fetch product details from API
    async function fetchData() {
        try {
            const data = await fetch(`https://fakestoreapi.in/api/products/${id}`)
            const dataJson = await data.json()
            console.log(dataJson);
            setDetail(dataJson?.product); // Set product details in state
        } catch {
            console.log("Something went wrong")
        }
    }

    // Toast notification function
    const notify = () => {
        toast.success('Item added to cart!');
    };

    return (
        <div className='w-full min-h-screen flex flex-col md:flex-row items-center'>
            {/* Left section - Product image */}
            <div className='w-full flex justify-center items-center px-10 md:px-0 md:w-1/2 h-full'>
                <img className='size-4/5' src={detail?.image} />
            </div>
             {/* Right section - Product details */}
            <div className='h-full w-full px-5 md:p-16 md:w-1/2  flex flex-col justify-center gap-7'>
                <h1 className='text-lg uppercase'>{detail?.category} / {detail?.brand} / {detail?.color}</h1>
                {/* Product title */}
                <h1 className='text-4xl'>{detail?.title}</h1>
                {/* Pricing: Discounted price */}
                <div className="">
                    <span className="inline-flex gap-5 text-3xl bg-gray-200 rounded-full px-6 py-3  font-semibold"><span className='line-through '>₹{(detail?.price * 1.1).toFixed(2)}</span> ₹{detail?.price}</span>
                </div>
                {/* Product description */}
                <p>{detail?.description}</p>
                 {/* Add to Cart button */}
                <button className='h-10 w-fit px-5 rounded-xl hover:font-semibold hover:bg-orange-700 text-lg bg-orange-500 text-white' onClick={() => handeleAddItem()}>Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails