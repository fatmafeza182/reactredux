import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../redux/CartSice';
import { Link, useNavigate } from 'react-router-dom';

const NavbarRight = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { itemCount } = useSelector(state => state.carts)

    // console.log('totalAmount', totalAmount)

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/search?query=${search}`); // Arama sonuç sayfasına yönlendirme
        }
    }

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])

    return (
        <div className='flex items-center gap-6'>
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className='bg-gray-200 outline-none ' placeholder='Bir şeyler ara'></input>
                <IoSearch size={26} />
            </div>
            <Link to="/cart/"><CiHeart size={26} /></Link>

            <div onClick={() => navigate('cart')} className='relative '>
                <div className='absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center '>{itemCount}</div>
                <SlBasket size={26} />

            </div>
        </div>
    )
}

export default NavbarRight
