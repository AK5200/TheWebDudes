import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

const Footer = () => {
    return (
        <div className="pt-16 mt-10 font-bold text-center bg-gray-400 ">
         <h1>FOOTER</h1>   
         {/* 
             footer code goes here 
                                    */}
         <p>&copy;TheWebDudes</p>
                                    
             <Link to='#services' smooth><h2 className='hover:underline'>Services</h2></Link>
             <Link to='#projects' smooth><h2 className='hover:underline'>Projects</h2></Link>
             <Link to='#about' smooth><h2 className='hover:underline'>Who are we</h2></Link>
        </div>
    )
}

export default Footer
