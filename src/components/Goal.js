import React from 'react'

const Goal = ({content}) => {
    return (
        <div>
            
            <h3 className='flex mt-10 text-xl pl-60 pr-28'> Our Goal</h3>
             <p className='pb-32 text-3xl font-bold text-left pl-60 pr-28'> 
           {content}
            </p>
        
        </div>
    )
}

export default Goal
