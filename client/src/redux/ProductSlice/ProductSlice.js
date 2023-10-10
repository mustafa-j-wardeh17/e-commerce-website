import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
    total_price: 0,
    price_filter: 0,
    category_filter: ''
}

export const ProductSlice = createSlice({
    name: 'bazar',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        // =============== User Start here ==============
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
        // =============== User End here ================

        //---------------- Price Filter ------------------

        Setselectedprice: (state, action) => {
            state.price_filter = action.payload
        },
        Setselectedcategory: (state, action) => {
            state.category_filter = action.payload
        },
    },
})


export const { addToCart, increamentQuantity, decrementQuantity, deleteItem, resetCart, addUser, removeUser, Setselectedprice, Setselectedcategory } = ProductSlice.actions

export default ProductSlice.reducer