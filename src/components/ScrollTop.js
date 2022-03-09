import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
const ScrollTop = () => {
    return (
        <div>
         <Link to="#services" smooth><button className='p-2 m-4 bg-gray-400 rounded-md hover:bg-gray-600 hover:text-white'>scroll up</button></Link>   

            
        </div>
    )
}

export default ScrollTop
