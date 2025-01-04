import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Product from '../components/home/Product'

const Home = () => {
    const [sort, setSort] = useState(' ');
    const [category, setCategory] = useState('')

    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort} />
            <div className="flex">
                <div className="w-1/4 bg-gray-100">
                    <Category setCategory={setCategory} />
                </div>
                <div className="w-3/4">
                    <Product category={category} sort={sort} />
                </div>
            </div>
        </div>
    )
}

export default Home
