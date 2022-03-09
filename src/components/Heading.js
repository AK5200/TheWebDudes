import React, { Fragment } from 'react'

const Heading = ({props,id}) => {
    return (
      
        <div className='px-10 mt-10 text-xl pl-28' id={id}>
           <h3>{props} </h3>
        </div>
       
    )
}

export default Heading
