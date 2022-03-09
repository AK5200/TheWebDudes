import React from 'react'
import {Link} from 'react-router-dom'

const ServicesMenu = () => {
    return (
        <div className='flex gap-4 pl-28'>
         <Link className='hover:underline' to='/design'>Design</Link>
         <Link className='hover:underline' to='/development'>Development</Link>
         <Link className='hover:underline' to='/maintainance'>Maintainance</Link>   
        </div>
    )
}

export default ServicesMenu
