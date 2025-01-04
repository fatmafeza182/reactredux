import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'
import cartSlice from './CartSice'
export const store = configureStore({
    reducer: {
        categories: CategorySlice,
        products: ProductSlice,
        carts: cartSlice
    },
})

