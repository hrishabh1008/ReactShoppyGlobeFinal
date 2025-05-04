import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess(state, action) {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
} = productListSlice.actions;

export default productListSlice.reducer;