import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/CartSice';

const DetailComp = ({ productsDetail }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const decrement = () => {
        if (
            quantity > 0) setQuantity(quantity - 1)
    }
    const increment = () => {
        if (quantity < productsDetail?.rating?.count) setQuantity(quantity + 1)
    }
    const addToBasket = () => {
        dispatch(addToCart({
            id: productsDetail?.id,
            title: productsDetail?.title,
            image: productsDetail?.image,
            price: productsDetail?.price,
            // quantity: quantity // Miktarı ekle.
        }));


    }
    return (
        <div className='flex items-center gap-5'>
            <img className='w-[300px] mt-10' src={productsDetail?.image}></img>
            <div className=''>
                <div className='font-bold text-2xl mb-8 text-red-900'>{productsDetail?.title}</div>
                <div className='text-xl '>{productsDetail?.description}</div>
                <div className='text-2xl mt-3 text-red-900'>Rating: {productsDetail?.rating?.rate} </div>
                <div className='text-2xl mt-3 text-red-900'>Count: {productsDetail?.rating?.count}</div>
                <div className='font-bold  text-2xl mt-3 text-red-600'>{productsDetail?.price}<span className='text-sm'> USD</span></div>
                <div className='flex items-center gap-5 mt-5'>
                    <div onClick={decrement} className='text-4xl cursor-pointer'>-</div>
                    <input className='w-10 text-4xl text-center font-bold' type='text' value={quantity}></input>
                    <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
                </div>
                <div onClick={addToBasket} className='border w-[150px] h-10 my-5 p-3 flex items-center justify-center bg-red-900 rounded-md text-white'>Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailComp
