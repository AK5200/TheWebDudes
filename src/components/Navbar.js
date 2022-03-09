import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        
        <div className="sticky top-0 z-10 flex justify-between px-4 pt-4 bg-gray-400 cursor-pointer drop-shadow-md">
            <div className="flex flex-col font-bold font-Roboto ">
             <h1>THE </h1>
               <h1>  WEB</h1>
                <h1>  DUDES</h1>
            </div>
            <div className='flex gap-6 px-4 text-xl'>
             <Link to='#services' smooth><h2 className='hover:underline'>Services</h2></Link>
             <Link to='#projects' smooth><h2 className='hover:underline'>Projects</h2></Link>
             <Link to='#about' smooth><h2 className='hover:underline'>Who are we</h2></Link>
             <Link to='./hire' smooth><h2 className="p-2 text-white bg-black border-2 rounded-xl hover:bg-white hover:text-black hover:border-black">Hire Us</h2></Link>
            </div>
            
            
        </div>
        
    )
}

export default Navbar
