import React from 'react'
import {Link} from 'react-router-dom'

const ServicesMenu = () => {
    return (
        <div className='flex gap-4 pl-28'>
         <Link to='./design'>Design</Link>
         <Link to='./development'>Development</Link>
         <Link to='./maintainance'>Maintainance</Link>   
        </div>
    )
}

export default ServicesMenu
