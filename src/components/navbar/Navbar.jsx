import React from 'react'
import NavbarLeft from '../navbatitems/NavbarLeft'
import NavbarRight from '../navbatitems/NavbarRight'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mt-3'>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar
