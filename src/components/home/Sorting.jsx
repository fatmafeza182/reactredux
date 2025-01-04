import React from 'react'

const Sorting = ({ setSort }) => {
    return (
        <div onChange={e => setSort(e.target.value)} className='bg-custom-gray my-3 p-5 flex items-center justify-end'>
            <select className='bg-white py-3 px-5' >
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
        </div>
    )
}

export default Sorting
