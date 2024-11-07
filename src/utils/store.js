import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import issuedProducts from "./issuedProducts";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        issued: issuedProducts
    }
})

export default store