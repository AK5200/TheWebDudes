import React from 'react'

const ServicesMenuItem = ({design,development,maintainance}) => {
    return (
        <div className='py-20 pl-28 pr-60'>
          
           {design &&
           <div className='flex gap-10'>
          
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat bibendum sem, ut scelerisque magna finibus eget. In pulvinar placerat purus quis scelerisque. Vivamus et tincidunt velit, nec vehicula tellus.</p>
           <img className='h-72 rounded-xl' src='https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80' />
           </div>} 
            
            {development &&
            <div className='flex gap-10'>
            <img className='h-72 rounded-xl' src='https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat bibendum sem, ut scelerisque magna finibus eget. In pulvinar placerat purus quis scelerisque. Vivamus et tincidunt velit, nec vehicula tellus.</p>
           </div>}

             {maintainance &&
             <div className='flex gap-10'>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat bibendum sem, ut scelerisque magna finibus eget. In pulvinar placerat purus quis scelerisque. Vivamus et tincidunt velit, nec vehicula tellus</p>
             <img  className='h-72 rounded-xl' src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' />
           
           </div>} 
 


        </div>
    )
}

export default ServicesMenuItem
