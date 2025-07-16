'use client'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

for (let i = 1; i <= 5; i++) {
    initialState[i] = { id: i, product, quantity: 0 };
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modifyCart: (state, action) => {
            const { product, quantity } = action.payload;
            const id = product.id;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    product,
                    quantity
                }
            }
        }

    }

}

)

export const { modifyCart } = cartSlice.actions;
export default cartSlice.reducer;