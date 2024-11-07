import React, { useState } from 'react';
import CartItem from './CartItem'; // Importing CartItem component to display individual items in the cart
import { useDispatch, useSelector } from 'react-redux'; // Importing Redux hooks to interact with the store
import { clearCart } from '../utils/cartSlice'; // Importing the clearCart action to clear all items from the cart
import PaymentPopup from './PaymentPopup';// Importing PaymentPopup component to show when payment is done


const Cart = () => {

  const dispatch = useDispatch(); // Initializing dispatch function for Redux actions
  
   // Function to clear the cart by dispatching the clearCart action
  const cleaningCart = () => {
    dispatch(clearCart())
  }

  const [isPaymentDone, setPaymentDone] = useState(false);  // State to track whether payment is completed
  
  let totalAmount = 0; // Variable to hold the total amount of the cart
  
  // Fetching the items in the cart from the Redux store
  const cartItemsData = useSelector(store => store.cart.items)

  // Function to handle placing an order and clearing the cart
  const handleCart = () => {
    cleaningCart()
    setPaymentDone(true) // Set payment status to done, triggering the PaymentPopup
  }


  // Function to calculate the total price of all items in the cart
  const calculateTotal = () => {
    let total = 0
     // Loop through all items and sum their prices
    for (let item of cartItemsData) {
      total += item.price;
    }
    totalAmount = total // Updating the totalAmount variable with the calculated total
    return total
  }

  // If payment is done, display the PaymentPopup component
  if (isPaymentDone) {
    return <PaymentPopup />
  }


  return (
    <div className='min-h-[650px]  w-full flex flex-col py-8 px-3 gap-20 relative'>
      <div className="cart-page max-h-[650px] h-fit w-full bg-bgColor px-8 py-3 rounded-lg shadow-lg overflow-scroll overflow-x-hidden">
        <h1 className="text-xl font-bold text-center text-gray-800 pb-10 underline">Your Cart - {cartItemsData.length} items</h1>
        {/* Loop through cart items and display them using the CartItem component */}
        <div className='w-full h-fit flex flex-col gap-7'>
          {cartItemsData.map((item, index) => (
            <>
              <CartItem key={index} item={item} />
              <hr className='border-black border-opacity-25' />
            </>
          ))}
        </div>

        {/* Display total amount of the cart */}
        <div className="flex justify-between items-center mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold text-gray-800">Total Amount:</h2>
          <span className="text-xl font-bold text-green-500">₹{calculateTotal()}</span>
        </div>
        
        {/* Button for placing the order */}
        <div className="text-center mt-6 w-full flex justify-center">
          {
            totalAmount === 0 ? <p className="w-fit bg-orange-400 hover:bg-orange-700 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110">Your Cart is Empty !</p> :
              <button className="w-fit bg-orange-400 hover:bg-orange-700 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110" onClick={() => handleCart()}>Place Order
              </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;