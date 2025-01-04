import React from 'react'
import { removeFromCart } from '../../redux/CartSice'
import { useDispatch } from 'react-redux'

const CartComp = ({ cart }) => {
    const dispatch = useDispatch();
    return (
        <div className='flex items-center my-10 justify-between'>
            <img className='w-[150px] mt-10 object-cover' src={cart?.image}></img>
            <div>
                <div className='text-xl font-bold text-red-500'>{cart?.title}</div>
            </div>
            <div className='text-xl font-bold '>{cart?.price} USD ({cart?.quantity})</div>
            <div onClick={() => dispatch(removeFromCart(cart?.id))} className='w-[100px] bg-red-500 h-[35px] rounded-md flex items-center justify-center text-white cursor-pointer'>Ürünü Sil</div>
        </div>
    )
}

export default CartComp
