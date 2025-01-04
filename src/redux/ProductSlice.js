import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productsDetail: [],
    productsDetailStatus: STATUS.IDLE
}
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(!data, "data")
    return data;
});

export const getDetailProducts = createAsyncThunk('products/getDetailProducts', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
});
export const getCategoryProducts = createAsyncThunk('products/getCategory', async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    // console.log(!data, "data")
    return data;
});
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS
                state.products = action.payload
                // console.log(state.products, "products data")
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL
            })
            .addCase(getDetailProducts.pending, (state, action) => {
                state.productsDetailStatus = STATUS.LOADING
            })
            .addCase(getDetailProducts.fulfilled, (state, action) => {
                state.productsDetailStatus = STATUS.SUCCESS
                state.productsDetail = action.payload
            })
            .addCase(getDetailProducts.rejected, (state, action) => {
                state.productsDetailStatus = STATUS.FAIL
            })
            .addCase(getCategoryProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS
                state.products = action.payload
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL
            })
    }
})
export default productSlice.reducer