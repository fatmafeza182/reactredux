import { createSlice } from "@reduxjs/toolkit";



const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}
const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}


const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)
            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let temtTotalPrice = tempQty * item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: temtTotalPrice
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart;
                storeInLocalStorage(state.carts)
            } else {
                state.carts.push(action.payload)
                storeInLocalStorage(state.carts)
            }
        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            state.carts = tempCart;
            storeInLocalStorage(state.carts)
        },
        clearCart: (state) => {
            state.carts = []
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state) => {
            const { totalAmount, itemCount } = state.carts.reduce(
                (acc, cartItem) => {
                    acc.totalAmount += cartItem.price * cartItem.quantity; // Fiyat x Miktar
                    acc.itemCount += cartItem.quantity; // Toplam ürün sayısı
                    return acc;
                },
                { totalAmount: 0, itemCount: 0 } // Başlangıç değerleri
            );

            state.totalAmount = totalAmount; // Toplam tutar
            state.itemCount = itemCount; // Toplam ürün sayısı
        }

    }
})
export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions
export default cartSlice.reducer
