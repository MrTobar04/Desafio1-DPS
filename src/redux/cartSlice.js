'use client'

import { createSlice } from '@reduxjs/toolkit';
import data from "../data/products"; 
const products = {};

for (let i = 1; i <= data.lenght; i++) {
    products[i] = { id: i, product: {}, quantity: 0 };
}

const initialState = { products, total: 0 };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modifyCart: (state, action) => {
            const { product, quantity } = action.payload;
            const id = product.id;

            const prevQuantity = state.products[id]?.quantity || 0;
            const difference = quantity - prevQuantity;

            // Actualiza el producto
            state.products[id] = {
                ...state.products[id],
                product,
                quantity
            };

            // Actualiza el total
            state.total += difference * product.price;
        },
        addProduct: (state, action) => {
            const product = action.payload;
            const id = product.id;

            let prevQuantity = state.products[id]?.quantity || 0;
            const quantity = prevQuantity + 1;

            // Actualiza el producto
            state.products[id] = {
                ...state.products[id],
                product,
                quantity
            };

            // Actualiza el total
            state.total += product.price;
        },
        removeProduct: (state, action) => {
            const product = action.payload;
            const id = product.id;

            let prevQuantity = state.products[id]?.quantity || 0;
            const quantity = 0;

            // Actualiza el producto
            state.products[id] = {
                ...state.products[id],
                product,
                quantity
            };

            // Actualiza el total
            state.total -= prevQuantity*product.price;
        },
        clearCart: (state) => {
            // Recorremos todos los productos y ponemos su quantity en 0
            for (const id in state.products) {
                state.products[id].quantity = 0;
            }

            // Reiniciamos el total
            state.total = 0;
        }

    }

}

)

export const { modifyCart, addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;