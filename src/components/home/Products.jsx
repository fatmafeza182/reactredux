import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className='w-[380px] h-[300px] p-3 m-5 bottom-5 rounded-md relative cursor-pointer bg-custom-gray'>
            <div className='text-xl p-1 font-bold absolute rounded-md top-0 left-0 bg-gray-300 text-red-900'>{product?.price}<span className='text-sm'> USD</span></div>
            <img className='w-[200px] h-[200px] object-cover mt-auto' src={product?.image}></img>
            <div className='text-center mt-3 text-xl px-2 font-bold'>{product?.title}</div>
        </div>
    )
}

export default Products
