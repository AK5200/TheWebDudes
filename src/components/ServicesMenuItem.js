import React from 'react'

const ServicesMenuItem = ({design,development,maintainance}) => {
    return (
        <div>
           {design &&
           <p>design is best</p>} 
            
            {development &&
           <p>devp is best</p>}

             {maintainance &&
           <p>main is best</p>} 
 


        </div>
    )
}

export default ServicesMenuItem
