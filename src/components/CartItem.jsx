import React from 'react';
import { useDispatch } from 'react-redux'; // Importing the useDispatch hook from Redux to dispatch actions
import { removeItem } from '../utils/cartSlice'; // Importing the removeItem action to remove the item from the cart

const CartItem = ({ item }) => {
    const dispatch = useDispatch() // Initializing the dispatch function to dispatch actions to the Redux store
    
    
    // Handler function for removing an item from the cart
    const onRemove = (item) => {
        dispatch(removeItem(item))  // Dispatching the removeItem action with the item as payload
    }

    return (
         // Container for the cart item with responsive layout
        <div className="flex flex-col w-full sm:flex-row justify-between gap-5 items-center ">
            <div className="flex w-full items-center gap-5">
                {/* Image of the cart item */}
                <img src={item?.image} alt={item.title} className="w-20 h-20 pr-4 rounded shadow" />
                
                {/* Item details */}
                <div>
                    <h5 className="text-base font-bold text-gray-800">{item.title}</h5>
                    <p className="text-gray-600">by {item.brand}</p>
                    <p className="text-gray-800 font-bold">Price: ₹{item.price}</p>
                </div>
            </div>
            
            {/* Button to remove the item from the cart */}
            <button
                onClick={() => onRemove(item.ISBN)}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
                Remove
            </button>
        </div>
    );
}
export default CartItem
