import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: []
}
export const getCategories = createAsyncThunk("category", async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;
})
const CategorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: [],
    extraReducers: (builders) => {
        builders
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
    }
})
export default CategorySlice.reducer