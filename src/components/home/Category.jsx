import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice';

const Category = ({ setCategory }) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    console.log(categories, "categories")

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='w-1/2 bg-custom-gray p-5  max-h-screen'>
            <div className='border-b pb-1 px-2 font-bold text-xl'>Kategoriler</div>
            {
                categories?.map((category, i) => (
                    <div onClick={() => setCategory(category)} className='text-xl cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>
                ))
            }
        </div>
    )
}

export default Category
