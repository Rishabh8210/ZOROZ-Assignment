import { createSlice } from "@reduxjs/toolkit";

const issuedProducts = createSlice({
    name: 'issued',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [state.items, ...action.payload]
        },
        clearCart : (state) => {
            state.items = []
        }
    }
});

export const {addItem, clearCart} = issuedProducts.actions;
export default issuedProducts.reducer;